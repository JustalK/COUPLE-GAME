import React, { Component } from 'react';
import { ActivityIndicator, Text, StyleSheet, View, ScrollView, NativeScrollSize, NativeScrollPoint } from 'react-native';
import Loading from '../components/Loading';
import Slide from '../components/Slide';
import TextCustom from '../components/TextCustom';
import {FIRST_ID_PROJECT} from '../libs/constants';
import { styleMain, stylePage } from '../styles/main';
import ApiProject from '../services/ApiProject';
import ApiSlide from '../services/ApiSlide';
import { ProjectZoomProps, ProjectZoomStates } from '../interfaces/ProjectZoom';
import { SlideApiProps } from '../interfaces/Slide';
import { colors } from '../styles/colors';
import { isGoingDown } from '../libs/utils';

/**
* Display the html for a project
* @params {ProjectZoomProps} props The project informations needed for the component
* @return {JSX.Element} The html representing the project
**/
export default class ProjectZoom extends Component<ProjectZoomProps, ProjectZoomStates> {
	/**
	* Binding the event when the user scroll down and reach the bottom
	* @params {ProjectZoomProps} this The component
	**/
	isGoingDown = isGoingDown.bind(this);

	/**
	* The constructor and initializer of the state
	* @params {ProjectZoomProps} props The project informations needed for the component
	**/
	constructor(props: ProjectZoomProps) {
		super(props);
		this.state = {
			title: '',
			description: '',
			loadMore: true,
			slidesId: [],
			slides: [],
		};
	}

	/**
	* When the component is mounted, this method is called once
	**/
	async componentDidMount(): Promise<void> {
		await this.loadProject(FIRST_ID_PROJECT);
	}

	/**
	* Load the project and give the informations received to the state
	* @params {string} idProject The id of the project to load
	**/
	async loadProject(idProject: string): Promise<void> {
		const project = await ApiProject.getOneProject(idProject);
		let slides: SlideApiProps[] = [];
		if (project.slides !== null && project.slides.length > 0) {
			slides = [await this.loadSlide(project.slides[0])];
		}

		this.setState({
			title: project.title,
			description: project.long_description,
			slidesId: project.slides,
			slides: slides,
			loadMore: true,
		});
		this.props.projectLoaded();
	}

	/**
	* Load a slide of the project by id
	* @params {string} idSlide The id of the slide to load
	* @return {SlideApiProps} The slide object
	**/
	async loadSlide(idSlide: string): Promise<SlideApiProps> {
		return ApiSlide.getOneSlide(idSlide);
	}

	/**
	* Load the following slide and unlock the current loader before loading more
	* @params {string} idSlide The id of the slide to load
	* @return {SlideApiProps} The slide object
	**/
	async nextSlide(idSlide: string): Promise<void> {
		const slides = await ApiSlide.getOneSlide(idSlide);
		this.setState({ slides: [...this.state.slides, slides], loadMore: true });
	}

	/**
	* Load when the id of the project has been update by the parent
	* @params {ProjectZoomProps} prevProps The previous props of the project
	**/
	async componentDidUpdate(prevProps: ProjectZoomProps): Promise<void> {
		if (this.props.idProject !== prevProps.idProject) {
			await this.loadProject(this.props.idProject);
		}
	}

	/**
	* Check if we reach the last slide
	* @return {boolean} True if we reach the last slide
	**/
	lastSlide(): boolean {
		return this.state.slides.length === this.state.slidesId.length;
	}

	/**
	* Message to show when the last page has been reached
	* @return {JSX.Element} The message in a html element
	**/
	renderEndOfPage(): JSX.Element {
		return <Text style={stylePage.end}>You have reached the bottom of the page</Text>;
	}

	/**
	* Display of the project page
	* @return {JSX.Element} Display the project page
	**/
	renderProject(): JSX.Element {
		return (
			<ScrollView
				onScroll={({ nativeEvent }) => {
					if (
						this.isGoingDown(nativeEvent.layoutMeasurement,
						nativeEvent.contentOffset,
						nativeEvent.contentSize) &&
						!this.lastSlide()
					) {
						console.log('boom');
						const nextSlide = this.state.slides.length;
						this.nextSlide(this.state.slidesId[nextSlide]);
					}
				}}
				style={styleMain.pagePadding}
			>
				<TextCustom isTitle={true} text={this.state.title} />
				<TextCustom text={this.state.description} />
				{this.state.slides.map((slide: SlideApiProps, index: number) => {
					return (
						<Slide
							key={index}
							firstText={slide.first_text}
							secondText={slide.second_text}
							title={slide.image.name}
							image={slide.image.path}
						/>
					);
				})}
				{this.state.loadMore && (<Loading />)}
				{this.lastSlide() && this.renderEndOfPage()}
			</ScrollView>
		);
	}

	/**
	* Display the project zoom component
	* It shows a loader before showing the content
	* @params {JSX.Element} Display the project zoom
	**/
	render(): JSX.Element {
		return (
			<View style={styleMain.pageContainer}>
				{this.props.loadingProject && (<Loading isScreen={true} />)}
				{!this.props.loadingProject && this.renderProject()}
			</View>
		);
	}
}

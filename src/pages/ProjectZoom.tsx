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

export default class ProjectZoom extends Component<ProjectZoomProps, ProjectZoomStates> {
	isGoingDown = isGoingDown.bind(this);

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

	async componentDidMount(): Promise<void> {
		await this.loadProject(FIRST_ID_PROJECT);
	}

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

	async loadSlide(idSlide: string): Promise<SlideApiProps> {
		return ApiSlide.getOneSlide(idSlide);
	}

	async nextSlide(idSlide: string): Promise<void> {
		const slides = await ApiSlide.getOneSlide(idSlide);
		this.setState({ slides: [...this.state.slides, slides], loadMore: true });
	}

	async componentDidUpdate(prevProps: ProjectZoomProps): Promise<void> {
		if (this.props.idProject !== prevProps.idProject) {
			await this.loadProject(this.props.idProject);
		}
	}

	lastSlide(): boolean {
		return this.state.slides.length === this.state.slidesId.length;
	}

	renderEndOfPage(): JSX.Element {
		return <Text style={stylePage.end}>You have reached the bottom of the page</Text>;
	}

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

	render(): JSX.Element {
		return (
			<View style={styleMain.pageContainer}>
				{this.props.loadingProject && (<Loading isScreen={true} />)}
				{!this.props.loadingProject && this.renderProject()}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	loaderPadding: {
		padding: 100,
	},
});

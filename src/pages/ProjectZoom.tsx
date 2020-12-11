import React, { Component } from 'react';
import { ActivityIndicator, Text, StyleSheet, View, ScrollView, NativeScrollSize, NativeScrollPoint } from 'react-native';
import Loading from '../components/Loading';
import Slide from '../components/Slide';
import Title from '../components/Title';
import Description from '../components/Description';
import {FIRST_ID_PROJECT} from '../libs/constants';
import { styleMain } from '../styles/main';
import ApiProject from '../services/ApiProject';
import ApiSlide from '../services/ApiSlide';
import { ProjectZoomProps, ProjectZoomStates } from '../interfaces/ProjectZoom';
import { SlideApiProps } from '../interfaces/Slide';
import { colors } from '../styles/colors';

export default class ProjectZoom extends Component<ProjectZoomProps, ProjectZoomStates> {
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

	isGoingDown(
		layoutMeasurement: NativeScrollSize,
		contentOffset: NativeScrollPoint,
		contentSize: NativeScrollSize,
	): boolean {
		if (this.state.loadMore && layoutMeasurement.height + contentOffset.y >= contentSize.height - 1000) {
			this.setState({ loadMore: false });
			return true;
		}

		return false;
	}

	lastSlide(): boolean {
		return this.state.slides.length === this.state.slidesId.length;
	}

	renderEndOfPage(): JSX.Element {
		return <Text style={styles.end}>You have reached the bottom of the page</Text>;
	}

	renderLoadingMore(): JSX.Element {
		return (
			<View style={styles.loaderPadding}>
				<ActivityIndicator size="large" color={colors.white} />
			</View>
		);
	}

	renderLoading(): JSX.Element {
		return <Loading />;
	}

	renderProject(): JSX.Element {
		return (
			<ScrollView
				onScroll={({ nativeEvent }) => {
					if (
						this.isGoingDown(
							nativeEvent.layoutMeasurement,
							nativeEvent.contentOffset,
							nativeEvent.contentSize,
						) &&
						!this.lastSlide()
					) {
						const nextSlide = this.state.slides.length;
						this.nextSlide(this.state.slidesId[nextSlide]);
					}
				}}
				style={styleMain.pagePadding}
			>
				<Title title={this.state.title} />
				<Description description={this.state.description} />
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
				{this.state.loadMore && this.renderLoadingMore()}
				{this.lastSlide() && this.renderEndOfPage()}
			</ScrollView>
		);
	}

	render(): JSX.Element {
		return (
			<View style={styleMain.pageContainer}>
				{this.props.loadingProject && this.renderLoading()}
				{!this.props.loadingProject && this.renderProject()}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	end: {
		fontSize: 20,
		fontFamily: 'LatoLight',
		textAlign: 'center',
		color: colors.cyan,
		alignSelf: 'center',
		marginTop: 50,
		marginBottom: 100,
	},
	loaderPadding: {
		padding: 100,
	},
});

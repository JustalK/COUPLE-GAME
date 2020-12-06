import React, { Component } from "react";
import { StyleSheet, Text, Image, View, ScrollView, TouchableWithoutFeedback } from "react-native";
import { Icon } from 'react-native-elements'
import Button from '../components/Button'
import Loading from '../components/Loading'
import Slide from '../components/Slide'
import { colors } from '../styles/colors'
import { styleText, styleMain } from '../styles/main'
import ApiProject from '../services/ApiProject'
import ApiSlide from '../services/ApiSlide'

export default class ProjectZoom extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			description: "",
			slidesId: [],
			slides: []
		}
	}

	async componentDidMount() {
		await this.loadProject("5fcb294909c6720bc207e5a1");
	}

	async loadProject(idProject) {
		const project = await ApiProject.getOneProject(idProject);
		let slides = [];
		if(project.slides !== null && project.slides.length > 0) {
			slides = [await this.loadSlide(project.slides[0])];
		}

		this.setState({title: project.title, description: project.long_description, slidesId: project.slides, slides: slides})
		this.props.projectLoaded();
	}

	async loadSlide(idSlide) {
		return ApiSlide.getOneSlide(idSlide);
	}

	async componentDidUpdate(prevProps) {
		if (this.props.idProject !== prevProps.idProject) {
			await this.loadProject(this.props.idProject, 0);
		}
	}

	renderProject() {
		return (
			<View>
				<Text style={styles.title}>{this.state.title}</Text>
				<Text style={styles.description}>{this.state.description}</Text>
				{this.state.slides.map((slide, index) => {
					return <Slide key={index} firstText={slide.first_text} secondText={slide.second_text} image={slide.image.path} />;
				})}
			</View>
		)
	}

	renderLoading() {
		return (<Loading />);
	}

	render = () => {
		return (
			<ScrollView style={styleMain.pagePadding}>
				<View>
					{this.props.loadingProject && this.renderLoading()}
					{!this.props.loadingProject && this.renderProject()}
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	title: {
		marginTop: 40,
		fontSize: 50,
		fontWeight: "bold",
		fontFamily: "LatoLight",
		textAlign: "center",
		color: colors.white,
		textTransform: "uppercase",
		marginBottom: 40
	},
	description: {
		fontSize: 20,
		fontFamily: "LatoLight",
		textAlign: "center",
		color: colors.cyan,
		alignSelf: 'flex-start',
		marginBottom: 50
	}
});

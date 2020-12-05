import React, { Component } from "react";
import { StyleSheet, Text, Image, View, ScrollView, TouchableWithoutFeedback } from "react-native";
import { Icon } from 'react-native-elements'
import Button from '../components/Button'
import { colors } from '../styles/colors'
import { styleText, styleMain } from '../styles/main'
import ApiProject from '../services/ApiProject'

export default class ProjectZoom extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			description: ""
		}
	}

	async componentDidMount() {
		await this.loadProject("5fcb294909c6720bc207e5a1");
	}

	async loadProject(idProject) {
		const project = await ApiProject.getOneProject(idProject);
		this.setState({title: project.title, description: project.long_description})
	}

	async componentDidUpdate() {
		await this.loadProject(this.props.idProject);
	}

	render = () => {
		return (
			<ScrollView>
				<View>
					<Text style={styles.title}>{this.state.title}</Text>
					<Text style={styles.description}>{this.state.description}</Text>
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

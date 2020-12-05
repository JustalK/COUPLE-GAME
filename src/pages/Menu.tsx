import React, { Component } from "react";
import { StyleSheet, Text, Image, View, ScrollView, TouchableWithoutFeedback } from "react-native";
import { Icon } from 'react-native-elements'
import Button from '../components/Button'
import { colors } from '../styles/colors'
import { styleText, styleMain } from '../styles/main'
import ApiProject from '../services/ApiProject'

export default class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: []
		}
	}

	async componentDidMount() {
		await this.getMenuInformations();
	}

	async getMenuInformations() {
		const infos: PagesInformationProps[] = await ApiProject.getMenu();
		this.setState({projects: infos})
	}

	render = () => {
		const aboutMe = [{
			buttonTitle: "Button 1"
		}]

		return (
			<ScrollView>
				<View style={styles.section}>
					<Text style={styles.title}>About me</Text>
					{aboutMe.map((button, index) => {
						return <Button key={index} index={index} buttonTitle={button.buttonTitle} />
					})}
				</View>
				<View style={styles.section}>
					<Text style={styles.title}>Projects</Text>
					{this.state.projects.map((project, index) => {
						return <Button key={index} index={index} slug={project.slug} buttonTitle={project.title} />
					})}
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	section: {
		marginBottom: 50
	},
	title: {
		fontSize: 18,
		lineHeight: 40,
		fontFamily: "LatoBold",
		textAlign: "left",
		margin: 20,
		color: colors.cyan,
		textTransform: "uppercase"
	},
	button: {
		borderRadius: 0,
		backgroundColor: colors.cyan,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		padding: 20
	},
	buttonText: {
		fontSize: 18,
		fontFamily: "LatoBold",
		textTransform: "capitalize",
		color: colors.white,
		lineHeight: 40
	}
});

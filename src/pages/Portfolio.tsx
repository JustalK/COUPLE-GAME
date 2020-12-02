import { StatusBar } from "expo-status-bar";
import React, { useState, Component } from 'react';
import { Text, View, StyleSheet, ViewStyle } from "react-native";
import { styleText, styleMain } from '../styles/main'
import { colors } from '../styles/colors'
import ApiPage from '../services/ApiPage'
import ApiProject from '../services/ApiProject'
import {PagesInformationProps} from '../interfaces/Pages'
import {ProjectsInformationProps} from '../interfaces/Projects'
import {PortfolioProps, PortfolioStates} from '../interfaces/Portfolio'

export default class Portfolio extends Component<PortfolioProps, PortfolioStates> {
	constructor(props: PortfolioProps) {
		super(props);
		this.state = {
			informations: {
				title: 'Loading',
				description: 'Loading',
				projects: []
			}
		};
    }

	async componentDidMount() {
		await this.getPageInformations();
		await this.getProjectsInformations();
	}

	async getPageInformations() {
		const infos: PagesInformationProps[] = await ApiPage.getPortfolioInformation();
		this.setState({informations: infos[0]})
	}

	async getProjectsInformations() {
		const infos: ProjectsInformationProps[] = await ApiProject.getProject();
		this.setState({projects: infos})
		console.log(infos);
	}

	render = () => {
		return (
			<View style={styleMain.pageContainer}>
				<Text style={styles.title}>{this.state.informations.title}</Text>
				<Text style={styles.description}>{this.state.informations.description}</Text>
			</View>
		)
	};
}

const styles = StyleSheet.create({
	title: {
		marginTop: 50,
		fontSize: 50,
		fontWeight: "bold",
		fontFamily: "LatoLight",
		textAlign: "center",
		color: colors.white,
		textTransform: "uppercase"
	},
	description: {
		marginTop: 20,
		fontSize: 20,
		fontFamily: "LatoLight",
		textAlign: "center",
		color: colors.cyan,
		alignSelf: 'flex-start'
	},
});

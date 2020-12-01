import { StatusBar } from "expo-status-bar";
import React, { useState, Component } from 'react';
import { Text, View, StyleSheet, ViewStyle } from "react-native";
import { styleText, styleMain } from '../styles/main'
import { colors } from '../styles/colors'
import ApiPage from '../services/ApiPage'
import {PagesInformationProps} from '../interfaces/Pages'
import {PortfolioProps, PortfolioStates} from '../interfaces/Portfolio'

export default class Portfolio extends Component<PortfolioProps, PortfolioStates> {
	constructor(props: PortfolioProps) {
		super(props);
		this.state = {
			informations: {
				title: 'Loading',
				description: 'Loading'
			}
		};
    }

	async componentDidMount() {
		await this.getPageInformations();
	}

	async getPageInformations() {
		const infos: PagesInformationProps[] = await ApiPage.getPortfolioInformation();
		this.setState({informations: infos[0]})
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

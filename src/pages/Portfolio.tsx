import { StatusBar } from "expo-status-bar";
import React, { useState, Component } from 'react';
import { Text, View } from "react-native";
import { styleText, styleMain } from '../styles/main'
import { colors } from '../styles/colors'
import ApiPage from '../services/ApiPage'

export default class Portfolio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			informations: []
		};
    }

	async componentDidMount() {
		await this.getPageInformations();
	}

	async getPageInformations() {
		const infos = await ApiPage.getPortfolioInformation();
		this.setState({informations: infos})
	}

	render = () => {
		return (
			<View style={styleMain.container}>
				<Text style={styleText.textStyle}>Test</Text>
			</View>
		)
	};
}

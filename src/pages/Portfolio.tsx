import { StatusBar } from "expo-status-bar";
import React, { useState, Component } from 'react';
import { Text, View, ScrollView, StyleSheet, ViewStyle } from "react-native";
import { styleText, styleMain } from '../styles/main'
import { colors } from '../styles/colors'
import Project from '../components/Project'
import HeaderApp from '../components/HeaderApp'
import Main from './Main'
import ApiPage from '../services/ApiPage'
import ApiProject from '../services/ApiProject'
import {PagesInformationProps} from '../interfaces/Pages'
import {ProjectsInformationProps} from '../interfaces/Projects'
import {PortfolioProps, PortfolioStates} from '../interfaces/Portfolio'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default class Portfolio extends Component<PortfolioProps, PortfolioStates> {
	constructor(props: PortfolioProps) {
		super(props);
		this.state = {
			informations: {
				title: 'Loading',
				description: 'Loading',
			},
			projects: [],
			loadMore: true,
			page: 0
		};
    }

	async componentDidMount() {
		await this.getPageInformations();
		await this.getProjectsInformations(0);
	}

	async getPageInformations() {
		const infos: PagesInformationProps[] = await ApiPage.getPortfolioInformation();
		this.setState({informations: infos[0]})
	}

	async getProjectsInformations(page: number) {
		const projects: ProjectsInformationProps[] = await ApiProject.getProject(page);
		this.setState({projects: [...this.state.projects, ...projects], page: page, loadMore: true});
	}

	isGoingDown({ layoutMeasurement, contentOffset, contentSize }) {
		if (this.state.loadMore && (layoutMeasurement.height + contentOffset.y >= contentSize.height - 500)) {
			this.setState({loadMore: false});
			return true;
		}

		return false;
	};

	onSwipeRight(gestureState) {
		this.props.navigation.navigate("Home");
	}

	render = () => {
		return (
			<View style={styleMain.pageContainer}>
				<HeaderApp navigation={this.props.navigation} title={this.props.route.name} />
				<Main />
				<StatusBar style="auto" hidden />
			</View>
		)
	};
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
	},
});

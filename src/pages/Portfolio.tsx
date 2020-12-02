import { StatusBar } from "expo-status-bar";
import React, { useState, Component } from 'react';
import { Text, ScrollView, StyleSheet, ViewStyle } from "react-native";
import { styleText, styleMain } from '../styles/main'
import { colors } from '../styles/colors'
import Project from '../components/Project'
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


	render = () => {
		return (
			<ScrollView onScroll={({ nativeEvent }) => {
	            if (this.isGoingDown(nativeEvent)) {
					const nextPage = this.state.page + 1;
					this.getProjectsInformations(nextPage);
	            }
	          }} style={styleMain.pageContainer}>
				<Text style={styles.title}>{this.state.informations.title}</Text>
				<Text style={styles.description}>{this.state.informations.description}</Text>
				{this.state.projects.map((project, index) => {
					return <Project image={project.images[0].path} title={project.title} key={index}></Project>;
				})}
			</ScrollView>
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
		textTransform: "uppercase",
		marginBottom: 20
	},
	description: {
		fontSize: 20,
		fontFamily: "LatoLight",
		textAlign: "center",
		color: colors.cyan,
		alignSelf: 'flex-start',
		marginBottom: 20
	},
});

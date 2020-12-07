import { StatusBar } from "expo-status-bar";
import React, { useState, Component } from 'react';
import { ActivityIndicator, Text, View, ScrollView, StyleSheet, ViewStyle } from "react-native";
import { styleText, styleMain } from '../styles/main'
import { colors } from '../styles/colors'
import Project from '../components/Project'
import HeaderApp from '../components/HeaderApp'
import Loading from '../components/Loading'
import Title from '../components/Title'
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
				title: "",
				description: "",
			},
			projects: [],
			loadMore: true,
			loading: true,
			pageLimit: 1,
			page: 0
		};
    }

	async componentDidMount() {
		await this.getPageInformations();
		await this.getProjectsInformations(0);
		await this.getPageLimit();
	}

	async getPageInformations() {
		const infos: PagesInformationProps[] = await ApiPage.getPortfolioInformation();
		this.setState({informations: infos[0]})
	}

	async getPageLimit() {
		const total: number = await ApiProject.countProject();
		const pageMax: number = total.total / 4;
		this.setState({pageLimit: pageMax});
	}

	async getProjectsInformations(page: number) {
		const projects: ProjectsInformationProps[] = await ApiProject.getProject(page);
		this.setState({projects: [...this.state.projects, ...projects], page: page, loadMore: true, loading: false});
	}

	isGoingDown({ layoutMeasurement, contentOffset, contentSize }) {
		if (this.state.loadMore && (layoutMeasurement.height + contentOffset.y >= contentSize.height - 1000)) {
			this.setState({loadMore: false});
			return true;
		}

		return false;
	};

	endOfPage(): boolean {
		return this.state.page + 1 > this.state.pageLimit;
	}

	renderEndOfPage() {
		return (<Text style={styles.end}>You have reached the bottom of the page</Text>);
	}

	renderLoadingMore() {
		return (
			<View style={styles.loaderPadding}>
				<ActivityIndicator size="large" color={colors.white} />
			</View>);
	}

	renderLoading() {
		return (<Loading />);
	}

	renderListing() {
		return (
			<ScrollView onScroll={({nativeEvent}) => {
				if (this.isGoingDown(nativeEvent) && !this.endOfPage()) {
					const nextPage = this.state.page + 1;
					this.getProjectsInformations(nextPage);
				}
			}} style={styleMain.pagePadding}>
				<Title title={this.state.informations.title} />
				<Text style={styles.description}>{this.state.informations.description}</Text>
				{this.state.projects.map((project, index) => {
					return <Project image={project.images[0].path} updateIdProject={this.props.updateIdProject} jumpTo={this.props.jumpTo} id={project._id} title={project.title} key={index}></Project>;
				})}
				{this.state.loadMore && this.renderLoadingMore()}
				{this.endOfPage() && this.renderEndOfPage()}
			</ScrollView>
		)
	}

	render = () => {
		console.log("LL");

		return (
			<View style={styleMain.pageContainer}>
				{this.state.loading && this.renderLoading()}
				{!this.state.loading && this.renderListing()}
				<StatusBar style="auto" hidden />
			</View>
		)
	};
}

const styles = StyleSheet.create({
	description: {
		fontSize: 20,
		fontFamily: "LatoLight",
		textAlign: "center",
		color: colors.cyan,
		alignSelf: 'flex-start',
		marginBottom: 50
	},
	end: {
		fontSize: 20,
		fontFamily: "LatoLight",
		textAlign: "center",
		color: colors.cyan,
		alignSelf: 'center',
		marginTop: 50,
		marginBottom: 100
	},
	loaderPadding: {
		padding: 100
	}
});

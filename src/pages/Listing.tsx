import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
	ActivityIndicator,
	Text,
	View,
	ScrollView,
	StyleSheet,
	NativeScrollSize,
	NativeScrollPoint,
} from 'react-native';
import { styleMain } from '../styles/main';
import { colors } from '../styles/colors';
import Project from '../components/Project';
import Loading from '../components/Loading';
import Title from '../components/Title';
import Description from '../components/Description';
import ApiPage from '../services/ApiPage';
import ApiProject from '../services/ApiProject';
import { PagesInformationProps } from '../interfaces/Pages';
import { ProjectsInformationProps } from '../interfaces/Projects';
import { ListingProps, ListingStates } from '../interfaces/Listing';
import { isGoingDown } from '../libs/utils';

export default class Portfolio extends Component<ListingProps, ListingStates> {
	isGoingDown = isGoingDown.bind(this);

	constructor(props: ListingProps) {
		super(props);
		this.state = {
			informations: {
				title: '',
				description: '',
			},
			projects: [],
			loadMore: true,
			loading: true,
			pageLimit: 1,
			page: 0,
		};

	}

	async componentDidMount(): Promise<void> {
		await this.getPageInformations();
		await this.getProjectsInformations(0);
		await this.getPageLimit();
	}

	async getPageInformations(): Promise<void> {
		const infos: PagesInformationProps[] = await ApiPage.getPortfolioInformation();
		this.setState({ informations: infos[0] });
	}

	async getPageLimit(): Promise<void> {
		const total = await ApiProject.countProject();
		const pageMax: number = total.total / 4;
		this.setState({ pageLimit: pageMax });
	}

	async getProjectsInformations(page: number): Promise<void> {
		const projects: ProjectsInformationProps[] = await ApiProject.getProject(page);
		this.setState({
			projects: [...this.state.projects, ...projects],
			page: page,
			loadMore: true,
			loading: false,
		});
	}

	endOfPage(): boolean {
		return this.state.page + 1 > this.state.pageLimit;
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

	renderListing(): JSX.Element {
		return (
			<ScrollView
				onScroll={({ nativeEvent }) => {
					if (
						this.isGoingDown(nativeEvent.layoutMeasurement,
						nativeEvent.contentOffset,
						nativeEvent.contentSize) &&
						!this.endOfPage()
					) {
						const nextPage = this.state.page + 1;
						this.getProjectsInformations(nextPage);
					}
				}}
				style={styleMain.pagePadding}
			>
				<Title title={this.state.informations.title} />
				<Description description={this.state.informations.description} />
				{this.state.projects.map((project, index) => {
					return (
						<Project
							image={project.images[0].path}
							updateIdProject={this.props.updateIdProject}
							jumpTo={this.props.jumpTo}
							id={project._id}
							title={project.title}
							key={index}
						></Project>
					);
				})}
				{this.state.loadMore && this.renderLoadingMore()}
				{this.endOfPage() && this.renderEndOfPage()}
			</ScrollView>
		);
	}

	render(): JSX.Element {
		return (
			<View style={styleMain.pageContainer}>
				{this.state.loading && this.renderLoading()}
				{!this.state.loading && this.renderListing()}
				<StatusBar style="auto" hidden />
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

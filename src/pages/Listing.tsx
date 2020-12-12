import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
	ActivityIndicator,
	Text,
	View,
	ScrollView,
	NativeScrollSize,
	NativeScrollPoint,
} from 'react-native';
import { styleMain, stylePage } from '../styles/main';
import { colors } from '../styles/colors';
import Project from '../components/Project';
import Loading from '../components/Loading';
import TextCustom from '../components/TextCustom';
import ApiPage from '../services/ApiPage';
import ApiProject from '../services/ApiProject';
import { PagesInformationProps } from '../interfaces/Pages';
import { ProjectsInformationProps } from '../interfaces/Projects';
import { ListingProps, ListingStates } from '../interfaces/Listing';
import { isGoingDown } from '../libs/utils';

/**
* Display the portfolio
* @params {ListingProps} props The functions for switching between project
* @return {JSX.Element} Display the portfolio
**/
export default class Portfolio extends Component<ListingProps, ListingStates> {

	/**
	* Binding the event when the user scroll down and reach the bottom
	* @params {ListingProps} this The component
	**/
	isGoingDown = isGoingDown.bind(this);

	/**
	* The constructor and initializer of the state
	* @params {ListingProps} props The functions for switching between project
	**/
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

	/**
	* When the component is mounted, this method is called once
	* Load the page informations, the project and page limit
	**/
	async componentDidMount(): Promise<void> {
		await this.getPageInformations();
		await this.getProjectsInformations(0);
		await this.getPageLimit();
	}

	/**
	* Load the first page information
	**/
	async getPageInformations(): Promise<void> {
		const infos: PagesInformationProps[] = await ApiPage.getPortfolioInformation();
		this.setState({ informations: infos[0] });
	}

	/**
	* Load the number of project max of the app
	**/
	async getPageLimit(): Promise<void> {
		const total = await ApiProject.countProject();
		const pageMax: number = total.total / 4;
		this.setState({ pageLimit: pageMax });
	}

	/**
	* Load the informations of a specific page and lock the scroll until everything is load
	**/
	async getProjectsInformations(page: number): Promise<void> {
		const projects: ProjectsInformationProps[] = await ApiProject.getProject(page);
		this.setState({
			projects: [...this.state.projects, ...projects],
			page: page,
			loadMore: true,
			loading: false,
		});
	}

	/**
	* Check if the user has reach the bottom of the page
	* @return {boolean} Return True if the user has load the last page
	**/
	endOfPage(): boolean {
		return this.state.page + 1 > this.state.pageLimit;
	}

	/**
	* Render the end of the page
	* @return {JSX.Element} Display the end of a page
	**/
	renderEndOfPage(): JSX.Element {
		return <Text style={stylePage.end}>You have reached the bottom of the page</Text>;
	}

	/**
	* Display the listing of the page
	* @return {JSX.Element} Display the listing of the page
	**/
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
				<TextCustom isTitle={true} text={this.state.informations.title} />
				<TextCustom text={this.state.informations.description} />
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
				{this.state.loadMore && (<Loading />)}
				{this.endOfPage() && this.renderEndOfPage()}
			</ScrollView>
		);
	}

	/**
	* Display the listing of the page or the loading screen if everything is not load
	* @return {JSX.Element} Display the listing of the page or the loading screen if everything is not load
	**/
	render(): JSX.Element {
		return (
			<View style={styleMain.pageContainer}>
				{this.state.loading && (<Loading isScreen={true} />)}
				{!this.state.loading && this.renderListing()}
				<StatusBar style="auto" hidden />
			</View>
		);
	}
}

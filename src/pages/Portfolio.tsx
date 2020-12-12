import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View } from 'react-native';
import { styleMain } from '../styles/main';
import HeaderApp from '../components/HeaderApp';
import Main from './Main';
import ApiPage from '../services/ApiPage';
import ApiProject from '../services/ApiProject';
import { PagesInformationProps } from '../interfaces/Pages';
import { ProjectsInformationProps } from '../interfaces/Projects';
import { PortfolioProps, PortfolioStates } from '../interfaces/Portfolio';

export default class Portfolio extends Component<PortfolioProps, PortfolioStates> {
	constructor(props: PortfolioProps) {
		super(props);
		this.state = {
			informations: {
				title: '',
				description: '',
			},
			projects: [],
			loadMore: true,
			page: 0,
		};
	}

	async componentDidMount(): Promise<void> {
		const infos: PagesInformationProps[] = await ApiPage.getPortfolioInformation();
		const projects: ProjectsInformationProps[] = await ApiProject.getProject(0);
		this.setState({
			informations: infos[0],
			projects: [...this.state.projects, ...projects],
			page: 0,
			loadMore: true,
		});
	}

	render(): JSX.Element {
		return (
			<View style={styleMain.pageContainer}>
				<HeaderApp navigation={this.props.navigation} title={this.props.route.name} />
				<Main />
				<StatusBar style="auto" hidden />
			</View>
		);
	}
}

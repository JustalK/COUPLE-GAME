import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Listing from './Listing';
import Menu from './Menu';
import ProjectZoom from './ProjectZoom';
import {FIRST_ID_PROJECT} from '../libs/constants';
import { MainStates, RouteProps } from '../interfaces/Main';
import { TabView, TabBar } from 'react-native-tab-view';
import { colors } from '../styles/colors';

export default class Main extends Component<unknown, MainStates> {
	constructor(props: unknown) {
		super(props);
		this.state = {
			index: 1,
			idProject: FIRST_ID_PROJECT,
			routes: [
				{ key: 'menu', title: 'Menu' },
				{ key: 'listing', title: 'Projects' },
				{ key: 'project', title: 'Zoom' },
			],
			loadingProject: true,
		};
	}

	updateIndex(index: number): void {
		this.setState({ index });
	}

	updateIdProject(index: string): void {
		if(index !== this.state.idProject) {
			this.setState({ idProject: index, loadingProject: true });
		}
	}

	projectLoaded(): void {
		this.setState({ loadingProject: false });
	}

	renderTabBar(props: any): JSX.Element {
		return <TabBar {...props} indicatorStyle={styles.indicator} style={styles.tabBar} />;
	}

	renderScene(route: RouteProps, jumpTo: (key: string) => void): JSX.Element | undefined {
		switch (route.key) {
			case 'menu':
				return <Menu updateIdProject={(id: string) => this.updateIdProject(id)} jumpTo={jumpTo} />;
			case 'listing':
				return <Listing updateIdProject={(id: string) => this.updateIdProject(id)} jumpTo={jumpTo} />;
			case 'project':
				return (
					<ProjectZoom
						loadingProject={this.state.loadingProject}
						projectLoaded={() => this.projectLoaded()}
						idProject={this.state.idProject}
						jumpTo={jumpTo}
					/>
				);
		}
	}

	initialLayout(): { width: number } {
		return { width: Dimensions.get('window').width };
	}

	render(): JSX.Element {
		return (
			<TabView
				renderTabBar={this.renderTabBar}
				navigationState={this.state}
				renderScene={(rs) => this.renderScene(rs.route, rs.jumpTo)}
				onIndexChange={(index) => this.updateIndex(index)}
				initialLayout={this.initialLayout()}
			/>
		);
	}
}

const styles = StyleSheet.create({
	tabBar: {
		backgroundColor: colors.clearBlue,
		borderColor: colors.cyan,
		borderWidth: 1,
		borderRadius: 20,
		marginRight: 20,
		marginLeft: 20
	},
	indicator: {
		backgroundColor: colors.white,
		borderBottomColor: colors.cyan,
		borderBottomWidth: 49,
		borderRadius: 20
	},
});

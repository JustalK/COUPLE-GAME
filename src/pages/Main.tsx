import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Listing from './Listing';
import Menu from './Menu';
import ProjectZoom from './ProjectZoom';
import {FIRST_ID_PROJECT} from '../libs/constants';
import { MainStates, RouteProps } from '../interfaces/Main';
import { TabView, TabBar } from 'react-native-tab-view';
import { colors } from '../styles/colors';

/**
* Display the tabs system
* @return {JSX.Element} Display the tabs system
**/
export default class Main extends Component<unknown, MainStates> {

	/**
	* The constructor and initializer of the state
	**/
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

	/**
	* Set the index of the tabs
	* @params {number} index The new index of the tabs
	**/
	updateIndex(index: number): void {
		this.setState({ index });
	}

	/**
	* Update the index of the project and the tabs zoom if this one change
	* @params {string} index The id of the project
	**/
	updateIdProject(index: string): void {
		if(index !== this.state.idProject) {
			this.setState({ idProject: index, loadingProject: true });
		}
	}

	/**
	* Specify the project has been loaded
	**/
	projectLoaded(): void {
		this.setState({ loadingProject: false });
	}

	/**
	* Display the tabs bar
	* @params {JSX.Element} props The tabs styled
	**/
	renderTabBar(props: any): JSX.Element {
		return <TabBar {...props} indicatorStyle={styles.indicator} style={styles.tabBar} />;
	}

	/**
	 * The jump function of the navigation tabs
	 * @name JumpTo
	 * @function
	 * @param {String} key The key of the tab
	*/

	/**
	* Display the right component depending of the tabs choosen
	* @params {RouteProps} route The route object
	* @params {JumpTo} jumpTo The jumpTo function for the tab system
	* @return {JSX.Element} Return the right component
	**/
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

	/**
	* Return the width of the screen in a Dimension object
	* @params {number} width The width of the screen
	**/
	initialLayout(): { width: number } {
		return { width: Dimensions.get('window').width };
	}

	/**
	* Display the main component
	* @params {JSX.Element} Display the main component
	**/
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

/**
* Create the custom style for the tabs
**/
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

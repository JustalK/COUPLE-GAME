import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import Listing from './Listing';
import Menu from './Menu';
import ProjectZoom from './ProjectZoom';
import { MainStates, RouteProps } from '../interfaces/Main';
import { TabView } from 'react-native-tab-view';

export default class Main extends Component<unknown, MainStates> {
	constructor(props: unknown) {
		super(props);
		this.state = {
			index: 1,
			idProject: '5fcb294909c6720bc207e5a1',
			routes: [
				{ key: 'menu', title: 'Menu' },
				{ key: 'listing', title: 'Listing' },
				{ key: 'project', title: 'Zoom' },
			],
			loadingProject: true,
		};
	}

	updateIndex(index: number): void {
		this.setState({ index });
	}

	updateIdProject(index: string): void {
		this.setState({ idProject: index, loadingProject: true });
	}

	projectLoaded(): void {
		this.setState({ loadingProject: false });
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
				navigationState={this.state}
				renderScene={(rs) => this.renderScene(rs.route, rs.jumpTo)}
				renderTabBar={() => null}
				onIndexChange={(index) => this.updateIndex(index)}
				initialLayout={this.initialLayout()}
			/>
		);
	}
}

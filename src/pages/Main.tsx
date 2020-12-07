import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, Image, View, TouchableHighlight, Dimensions } from "react-native";
import { colors } from '../styles/colors'
import { styleText, styleMain } from '../styles/main'
import BlinkingEffect from '../components/BlinkingEffect'
import WritingEffect from '../components/WritingEffect'
import Loading from '../components/Loading'
import Listing from './Listing'
import Menu from './Menu'
import ProjectZoom from './ProjectZoom'
import profileImg from '../../assets/me.jpeg'
import {MainProps, MainStates, RouteProps} from '../interfaces/Main'
import { TabView, SceneMap } from 'react-native-tab-view';

export default class Main extends Component<MainProps, MainStates> {
	constructor(props: MainProps) {
		super(props);
		this.state = {
			index: 1,
			idProject: "5fcb294909c6720bc207e5a1",
			routes: [
				{ key: 'menu', title: 'Menu' },
				{ key: 'listing', title: 'Listing' },
				{ key: 'project', title: 'Zoom' }
			],
			loadingProject: true
		}
	}

	updateIndex(index: number) {
		this.setState({index});
	}

	updateIdProject(index: string) {
		this.setState({idProject: index, loadingProject: true});
	}

	projectLoaded() {
		this.setState({loadingProject: false});
	}

	renderScene(route: RouteProps, jumpTo: (key: string) => void) {
		switch (route.key) {
			case 'menu':
				return <Menu updateIdProject={(id: string) => this.updateIdProject(id)} jumpTo={jumpTo} />;
			case 'listing':
				return <Listing updateIdProject={(id: string) => this.updateIdProject(id)} jumpTo={jumpTo} />;
			case 'project':
				return <ProjectZoom loadingProject={this.state.loadingProject} projectLoaded={() => this.projectLoaded()} idProject={this.state.idProject} jumpTo={jumpTo} />;
		}
	}

	initialLayout() {
		return { width: Dimensions.get('window').width };
	}

	render = () => {
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

const styles = StyleSheet.create({
	scene: {
		flex: 1,
	},
	textStyle: {
		fontSize: 18,
		fontFamily: "LatoLight",
		textAlign: "center",
		color: colors.cyan
	},
	portrait: {
		width: 200,
		height: 200,
		alignSelf: "center",
		marginBottom: 50,
		borderRadius: 200,
		borderWidth: 1,
		borderColor: colors.cyan
	},
	textCursor: {
		borderRightWidth: 2,
		borderColor: colors.white,
		color: colors.white
	},
	intructions: {
		marginTop: 100,
		textAlign: "center",
		fontFamily: "LatoLight",
		fontSize: 14,
		color: colors.white,
		textTransform: "uppercase"
	}
});

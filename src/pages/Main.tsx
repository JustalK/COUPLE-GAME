import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, Image, View, TouchableHighlight, Dimensions } from "react-native";
import { colors } from '../styles/colors'
import { styleText, styleMain } from '../styles/main'
import BlinkingEffect from '../components/BlinkingEffect'
import WritingEffect from '../components/WritingEffect'
import Listing from './Listing'
import Menu from './Menu'
import ProjectZoom from './ProjectZoom'
import profileImg from '../../assets/me.jpeg'
import {HomeProps, HomeStates} from '../interfaces/Home'
import { TabView, SceneMap } from 'react-native-tab-view';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			index: 1,
			idProject: "5fcb294909c6720bc207e5a1",
			routes: [
				{ key: 'menu', title: 'Menu' },
				{ key: 'listing', title: 'Listing' },
				{ key: 'project', title: 'Zoom' }
			]
		}
	}

	updateIndex(index) {
		this.setState({index});
	}

	updateIdProject(index) {
		this.setState({idProject: index});
	}

	renderScene({ route, jumpTo }) {
		switch (route.key) {
			case 'menu':
				return <Menu updateIdProject={(id) => this.updateIdProject(id)} jumpTo={jumpTo} />;
			case 'listing':
				return <Listing updateIdProject={(id) => this.updateIdProject(id)} jumpTo={jumpTo} />;
			case 'project':
				return <ProjectZoom idProject={this.state.idProject} jumpTo={jumpTo} />;
		}
	}

	initialLayout() {
		return { width: Dimensions.get('window').width };
	}

	render = () => {
		return (
			<TabView
		      navigationState={this.state}
		      renderScene={(rs) => this.renderScene(rs)}
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

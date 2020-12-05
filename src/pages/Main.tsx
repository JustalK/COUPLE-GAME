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
			routes: [
				{ key: 'first', title: 'Menu' },
				{ key: 'second', title: 'Listing' },
				{ key: 'third', title: 'Zoom' }
			]
		}
	}

	updateIndex(index) {
		this.setState({index});
	}

	renderScene({ route, jumpTo }) {
		switch (route.key) {
			case 'first':
				return <Menu jumpTo={jumpTo} />;
			case 'second':
				return <Listing jumpTo={jumpTo} />;
			case 'third':
				return <ProjectZoom jumpTo={jumpTo} />;
		}
	}

	render = () => {
		const initialLayout = { width: Dimensions.get('window').width };

		return (
			<TabView
		      navigationState={this.state}
		      renderScene={this.renderScene}
			  renderTabBar={() => null}
			  onIndexChange={(index) => this.updateIndex(index)}
		      initialLayout={initialLayout}
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

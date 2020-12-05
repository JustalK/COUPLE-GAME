import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, Image, View, TouchableHighlight, Dimensions } from "react-native";
import { colors } from '../styles/colors'
import { styleText, styleMain } from '../styles/main'
import BlinkingEffect from '../components/BlinkingEffect'
import WritingEffect from '../components/WritingEffect'
import Listing from './Listing'
import Menu from './Menu'
import profileImg from '../../assets/me.jpeg'
import {HomeProps, HomeStates} from '../interfaces/Home'
import { TabView, SceneMap } from 'react-native-tab-view';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.states = {
			index: 1,
			routes: [
				{ key: 'first', title: 'First' },
				{ key: 'second', title: 'Second' }
			]
		}
	}

	updateIndex(index) {
		this.states.index = index;
	}

	render = () => {
		const initialLayout = { width: Dimensions.get('window').width };

		const SecondRoute = () => (
		  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
		);

		const renderScene = SceneMap({
			first: Menu,
			second: Listing
		});

		return (
			<TabView
		      navigationState={this.states}
		      renderScene={renderScene}
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

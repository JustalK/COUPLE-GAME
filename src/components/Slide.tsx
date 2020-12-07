import React, { Component } from 'react';
import {ActivityIndicator, StyleSheet, TouchableHighlight, Text, Image, View } from 'react-native'
import Windows from './Windows'
import { colors } from '../styles/colors'

export default class Slide extends Component {
	constructor(props) {
		super(props);
	}

	render = () => {
	  return (
		<View>
			<Windows title={this.props.title} image={this.props.image} />
			<Text style={styles.description}>{this.props.firstText}</Text>
			<Text style={styles.description}>{this.props.secondText}</Text>
		</View>
	  );
	}
}

const styles = StyleSheet.create({
	loading: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
	},
	description: {
		fontSize: 20,
		fontFamily: "LatoLight",
		textAlign: "center",
		color: colors.cyan,
		alignSelf: 'flex-start',
		marginBottom: 50
	}
})

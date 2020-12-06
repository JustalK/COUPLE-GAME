import React, { Component } from 'react';
import {ActivityIndicator, StyleSheet, TouchableHighlight, Text, Image, View } from 'react-native'
import { colors } from '../styles/colors'

export default class Slide extends Component {
	constructor(props) {
		super(props);
	}

	render = () => {
	  return (
		<View>
			<Image source={{uri: "http://justalk.online" + this.props.image}} style={styles.image} />
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
	image: {
		height: 200,
		marginBottom: 50
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

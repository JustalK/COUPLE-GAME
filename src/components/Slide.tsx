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
			<View style={styles.project}>
				<Text style={styles.title}>{this.props.title}</Text>
				<Image source={{uri: "http://justalk.online" + this.props.image}} style={styles.image} />
			</View>
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
		height: 200
	},
	description: {
		fontSize: 20,
		fontFamily: "LatoLight",
		textAlign: "center",
		color: colors.cyan,
		alignSelf: 'flex-start',
		marginBottom: 50
	},
	project: {
		borderWidth: 1,
		borderColor: colors.black,
		marginBottom: 30
	},
	title: {
		fontFamily: "LatoBold",
		backgroundColor: colors.clearBlue,
		height: 40,
		lineHeight: 40,
		textTransform: "uppercase",
		color: colors.white,
		zIndex: 2,
		textAlign: "center",
		alignSelf: "stretch",

	}
})

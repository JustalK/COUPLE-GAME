import React, { Component } from 'react';
import {StyleSheet, TouchableHighlight, Text, Image, View } from 'react-native';
import { colors } from '../styles/colors'

export default class Windows extends Component {
	constructor(props) {
		super(props);
	}

	render = () => {
	  return (
		<View style={styles.project}>
			<Text style={styles.title}>{this.props.title}</Text>
			<Image source={{uri: "http://justalk.online" + this.props.image}} style={styles.image} />
		</View>
	  );
	}
}

const styles = StyleSheet.create({
	project: {
		borderWidth: 1,
		borderColor: colors.black,
		marginBottom: 30
	},
	image: {
		height: 200
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

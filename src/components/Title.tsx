import React, { Component } from 'react';
import {StyleSheet, TouchableHighlight, Text, Image, View } from 'react-native';
import { colors } from '../styles/colors'

export default class Title extends Component {
	constructor(props) {
		super(props);
	}

	render = () => {
	  return (
		  <Text style={styles.title}>{this.props.title}</Text>
	  );
	}
}

const styles = StyleSheet.create({
	title: {
		marginTop: 40,
		fontSize: 50,
		fontWeight: "bold",
		fontFamily: "LatoLight",
		textAlign: "center",
		color: colors.white,
		textTransform: "uppercase",
		marginBottom: 40
	}
})

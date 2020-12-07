import React, { Component } from 'react';
import {StyleSheet, TouchableHighlight, Text, Image, View } from 'react-native';
import {DescriptionProps, DescriptionStates} from '../interfaces/Description'
import { colors } from '../styles/colors'

export default class Description extends Component<DescriptionProps, DescriptionStates> {
	constructor(props: DescriptionProps) {
		super(props);
	}

	render = () => {
	  return (
		  <Text style={styles.description}>{this.props.description}</Text>
	  );
	}
}

const styles = StyleSheet.create({
	description: {
		fontSize: 20,
		fontFamily: "LatoLight",
		textAlign: "center",
		color: colors.cyan,
		alignSelf: 'flex-start',
		marginBottom: 50
	}
})

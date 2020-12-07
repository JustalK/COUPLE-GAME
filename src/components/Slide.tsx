import React, { Component } from 'react';
import {ActivityIndicator, StyleSheet, TouchableHighlight, Text, Image, View } from 'react-native'
import Windows from './Windows'
import Description from './Description'
import { colors } from '../styles/colors'

export default class Slide extends Component {
	constructor(props) {
		super(props);
	}

	render = () => {
	  return (
		<View>
			<Windows title={this.props.title} image={this.props.image} />
			<Description description={this.props.firstText} />
			<Description description={this.props.secondText} />
		</View>
	  );
	}
}

const styles = StyleSheet.create({
	loading: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
	}
})

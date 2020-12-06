import React, { Component } from 'react';
import {ActivityIndicator, StyleSheet, TouchableHighlight, Text, Image, View } from 'react-native'
import { colors } from '../styles/colors'

export default class Loading extends Component {
	constructor(props) {
		super(props);
	}

	render = () => {
	  return (
		<View style={styles.loading}>
			<ActivityIndicator size="large" color={colors.white} />
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

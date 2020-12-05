import React, { Component } from "react";
import { StyleSheet, Text, Image, View, ScrollView, TouchableWithoutFeedback } from "react-native";
import { Icon } from 'react-native-elements'
import Button from '../components/Button'
import { colors } from '../styles/colors'
import { styleText, styleMain } from '../styles/main'
import ApiProject from '../services/ApiProject'

export default class ProjectZoom extends Component {
	constructor(props) {
		super(props);
	}

	render = () => {
		return (
			<ScrollView>
				<View style={styles.section}>
					<Text>Test</Text>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	section: {
		marginBottom: 50
	},
	title: {
		fontSize: 18,
		lineHeight: 40,
		fontFamily: "LatoBold",
		textAlign: "left",
		margin: 20,
		color: colors.cyan,
		textTransform: "uppercase"
	},
	button: {
		borderRadius: 0,
		backgroundColor: colors.cyan,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		padding: 20
	},
	buttonText: {
		fontSize: 18,
		fontFamily: "LatoBold",
		textTransform: "capitalize",
		color: colors.white,
		lineHeight: 40
	}
});

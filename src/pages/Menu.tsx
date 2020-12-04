import React, { Component } from "react";
import { StyleSheet, Text, Image, View, ScrollView, TouchableWithoutFeedback } from "react-native";
import { Icon } from 'react-native-elements'
import Button from '../components/Button'
import { colors } from '../styles/colors'
import { styleText, styleMain } from '../styles/main'

export default class Menu extends Component {
	constructor(props) {
		super(props);
	}

	render = () => {
		const aboutMe = [{
			buttonTitle: "Button 1"
		}]

		const projects = [{
			buttonTitle: "Button 1"
		},{
			buttonTitle: "Button 2"
		},{
			buttonTitle: "Button 3"
		},{
			buttonTitle: "Button 4"
		},{
			buttonTitle: "Button 5"
		}]
		return (
			<ScrollView>
				<View style={styles.section}>
					<Text style={styles.title}>About me</Text>
					{aboutMe.map((button, index) => {
						return <Button key={index} index={index} buttonTitle={button.buttonTitle} />
					})}
				</View>
				<View style={styles.section}>
					<Text style={styles.title}>Projects</Text>
					{projects.map((button, index) => {
						return <Button key={index} index={index} buttonTitle={button.buttonTitle} />
					})}
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

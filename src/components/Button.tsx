import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableWithoutFeedback } from "react-native";
import { Icon } from 'react-native-elements'
import { colors } from '../styles/colors'
import { styleText, styleMain } from '../styles/main'

export default class Button extends Component {
	constructor(props) {
		super(props);
	}

	checkIndexIsEven (n) {
		return n % 2 == 0;
	}

	zoomProject(id) {
		this.props.updateIdProject(id);
		this.props.jumpTo('project');
	}

	render = () => {
		return (
			<TouchableWithoutFeedback title="Press me" onPress={() => this.zoomProject(this.props.idProject)} >
				<View style={[styles.button, {backgroundColor: this.checkIndexIsEven(this.props.index) ? colors.clearBlue : colors.darkBlue}]}>
					<Text style={styles.buttonText}>{this.props.buttonTitle}</Text>
					<Icon name='chevron-right' type="evilicon" color={colors.white} />
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = StyleSheet.create({
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
		fontFamily: "LatoLight",
		textTransform: "capitalize",
		color: colors.white,
		lineHeight: 40
	}
});

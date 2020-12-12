import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { TextCustomProps } from '../interfaces/TextCustom';
import { colors } from '../styles/colors';

/**
* Display a title or description
* @params {TextCustomProps} props display the title or description
**/
export default class TextCustom extends Component<TextCustomProps, never> {

	/**
	* Display a title or description
	* @return {JSX.Element} Display a title or description
	**/
	render(): JSX.Element {
		return <Text style={this.props.isTitle ? styles.title : styles.description}>{this.props.text}</Text>;
	}
}

const styles = StyleSheet.create({
	description: {
		fontSize: 20,
		fontFamily: 'LatoLight',
		textAlign: 'center',
		color: colors.cyan,
		alignSelf: 'flex-start',
		marginBottom: 50,
	},
	title: {
		marginTop: 40,
		fontSize: 50,
		fontWeight: 'bold',
		fontFamily: 'LatoLight',
		textAlign: 'center',
		color: colors.white,
		textTransform: 'uppercase',
		marginBottom: 40,
	},
});

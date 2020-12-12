import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { TitleProps } from '../interfaces/Title';
import { colors } from '../styles/colors';

export default class Title extends Component<TitleProps, never> {

	render(): JSX.Element {
		return <Text style={styles.title}>{this.props.title}</Text>;
	}
}

const styles = StyleSheet.create({
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

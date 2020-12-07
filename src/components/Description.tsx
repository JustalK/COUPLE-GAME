import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { DescriptionProps } from '../interfaces/Description';
import { colors } from '../styles/colors';

export default class Description extends Component<DescriptionProps, never> {
	constructor(props: DescriptionProps) {
		super(props);
	}

	render(): JSX.Element {
		return <Text style={styles.description}>{this.props.description}</Text>;
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
});

import React, { Component } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { WindowsProps } from '../interfaces/Windows';
import { colors } from '../styles/colors';

/**
* Display the windows
* @params {WindowsProps} props The information needed for the windows
**/
export default class Windows extends Component<WindowsProps, never> {

	/**
	* Display the windows
	* @return The windows
	**/
	render(): JSX.Element {
		return (
			<View style={styles.project}>
				<Text style={styles.title}>{this.props.title}</Text>
				<Image source={{ uri: 'http://justalk.online' + this.props.image }} style={styles.image} />
			</View>
		);
	}
}

/**
* Create the custom style for the windows
**/
const styles = StyleSheet.create({
	project: {
		borderWidth: 1,
		borderColor: colors.black,
		marginBottom: 50,
		borderRadius: 20
	},
	image: {
		height: 200,
		borderBottomRightRadius: 20,
		borderBottomLeftRadius: 20
	},
	title: {
		fontFamily: 'LatoBold',
		backgroundColor: colors.clearBlue,
		height: 40,
		lineHeight: 40,
		textTransform: 'uppercase',
		color: colors.white,
		zIndex: 2,
		textAlign: 'center',
		alignSelf: 'stretch',
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20
	},
});

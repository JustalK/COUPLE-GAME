import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { LoadingProps } from '../interfaces/Loading';
import { colors } from '../styles/colors';

/**
* Display the loading screen
* @params {LoadingProps} props The information if the loading is for a screen or a block
**/
export default class Loading extends Component<LoadingProps, never> {

	/**
	* Display the loading screen
	* @return {JSX.Element} Return the display of the loading screen
	**/
	render(): JSX.Element {
		return (
			<View style={this.props.isScreen ? styles.loading : styles.loaderPadding}>
				<ActivityIndicator size="large" color={colors.white} />
			</View>
		);
	}
}

/**
* Create the custom time for each loader
**/
const styles = StyleSheet.create({
	loaderPadding: {
		padding: 100,
	},
	loading: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
	},
});

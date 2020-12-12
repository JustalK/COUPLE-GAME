import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { LoadingProps } from '../interfaces/Loading';
import { colors } from '../styles/colors';

export default class Loading extends Component<LoadingProps, never> {

	render(): JSX.Element {
		return (
			<View style={this.props.isScreen ? styles.loading : styles.loaderPadding}>
				<ActivityIndicator size="large" color={colors.white} />
			</View>
		);
	}
}

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

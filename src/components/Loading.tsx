import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { colors } from '../styles/colors';

export default class Loading extends Component<unknown, never> {
	constructor(props: unknown) {
		super(props);
	}

	render(): JSX.Element {
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
		flexDirection: 'row',
		justifyContent: 'center',
	},
});

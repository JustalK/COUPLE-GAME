import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const styleText = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.darkBlue,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export const styleMain = StyleSheet.create({
	homeContainer: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: colors.darkBlue,
		alignItems: 'center',
		justifyContent: 'center',
	},
	pageContainer: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: colors.darkBlue,
	},
	pagePadding: {
		padding: 20,
	},
});

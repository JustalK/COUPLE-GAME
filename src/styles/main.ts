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

export const stylePage = StyleSheet.create({
	end: {
		fontSize: 20,
		fontFamily: 'LatoLight',
		textAlign: 'center',
		color: colors.cyan,
		alignSelf: 'center',
		marginTop: 50,
		marginBottom: 100,
	}
});

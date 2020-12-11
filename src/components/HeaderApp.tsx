import React, { Component } from 'react';
import { StyleSheet, Linking } from 'react-native';
import ApiContact from '../services/ApiContact';
import { HeaderAppProps, HeaderAppStates } from '../interfaces/HeaderApp';
import { colors } from '../styles/colors';
import { Header } from 'react-native-elements';

export default class HeaderApp extends Component<HeaderAppProps, HeaderAppStates> {
	constructor(props: HeaderAppProps) {
		super(props);
		this.state = {
			email: ''
		}
	}

	async componentDidMount(): Promise<void> {
		const identity = await ApiContact.getMyContact();
		this.setState({ email: identity.email });
	}

	backToHome(): void {
		this.props.navigation.navigate('Home');
	}

	render(): JSX.Element {
		return (
			<Header
				rightComponent={{ icon: 'envelope', type: 'font-awesome', size: 30, ...styles.button, onPress: (): void => {
					 Linking.openURL('mailto:' + this.state.email)}
				 }}
				centerComponent={{
					...{ text: this.props.title },
					...{ style: styles.title },
				}}
				leftComponent={{
					icon: 'home',
					type: 'font-awesome',
					size: 30,
					...styles.button,
					onPress: () => {
						this.backToHome();
					},
				}}
				containerStyle={styles.header}
			/>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: colors.darkBlue,
		justifyContent: 'space-around',
		paddingRight: 20,
		paddingLeft: 20,
		paddingBottom: 20,
		borderBottomWidth: 1,
		borderBottomColor: colors.darkBlue,
	},
	button: {
		color: colors.cyan,
	},
	title: {
		fontFamily: 'LatoBold',
		fontSize: 14,
		textTransform: 'uppercase',
		color: colors.cyan,
		zIndex: 2,
		textAlign: 'center',
		alignSelf: 'stretch',
	},
});

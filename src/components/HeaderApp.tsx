import React, { Component } from 'react';
import { StyleSheet, Linking } from 'react-native';
import ApiContact from '../services/ApiContact';
import { HeaderAppProps, HeaderAppStates } from '../interfaces/HeaderApp';
import { colors } from '../styles/colors';
import { Header } from 'react-native-elements';

/**
* Display the header
* @params {HeaderAppProps} props The information for the title and the navigation
**/
export default class HeaderApp extends Component<HeaderAppProps, HeaderAppStates> {

	/**
	* The constructor and initializer of the state
	* @params {HeaderAppProps} The information for the title and the navigation
	**/
	constructor(props: HeaderAppProps) {
		super(props);
		this.state = {
			email: ''
		}
	}

	/**
	* When the component is mounted, this method is called once
	* Load the information about my identity
	**/
	async componentDidMount(): Promise<void> {
		const identity = await ApiContact.getMyContact();
		this.setState({ email: identity.email });
	}

	/**
	* Send an event for going back to the home
	**/
	backToHome(): void {
		this.props.navigation.navigate('Home');
	}

	/**
	* Display the header
	* @return {JSX.Element} Display the header
	**/
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

/**
* Create the custom style for the header
**/
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

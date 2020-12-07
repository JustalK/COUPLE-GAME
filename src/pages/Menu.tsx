import React, { Component } from 'react';
import { StyleSheet, TouchableWithoutFeedback, Text, View, ScrollView, Linking } from 'react-native';
import Button from '../components/Button';
import { colors } from '../styles/colors';
import ApiProject from '../services/ApiProject';
import { MenuProps, MenuStates } from '../interfaces/Menu';
import { ProjectsMenuProps } from '../interfaces/Projects';
import { Icon } from 'react-native-elements';

export default class Menu extends Component<MenuProps, MenuStates> {
	constructor(props: MenuProps) {
		super(props);
		this.state = {
			projects: [],
		};
	}

	async componentDidMount(): Promise<void> {
		await this.getMenuInformations();
	}

	async getMenuInformations(): Promise<void> {
		const infos: ProjectsMenuProps[] = await ApiProject.getMenu();
		this.setState({ projects: infos });
	}

	render(): JSX.Element {
		return (
			<ScrollView>
				<View style={styles.section}>
					<Text style={styles.title}>Contact me</Text>
					<TouchableWithoutFeedback
						onPress={(): Promise<void> => Linking.openURL('mailto:justal.kevin@gmail.com')}>
						<View style={styles.button}>
							<Text style={styles.buttonText}>Send me an email</Text>
							<Icon name="chevron-right" type="evilicon" color={colors.white} />
						</View>
					</TouchableWithoutFeedback>
				</View>
				<View style={styles.section}>
					<Text style={styles.title}>Projects</Text>
					{this.state.projects.map((project, index) => {
						return (
							<Button
								key={index}
								updateIdProject={this.props.updateIdProject}
								jumpTo={this.props.jumpTo}
								idProject={project.id}
								index={index}
								slug={project.slug}
								buttonTitle={project.title}
							/>
						);
					})}
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	section: {
		marginBottom: 50,
	},
	button: {
		borderRadius: 0,
		backgroundColor: colors.clearBlue,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 20,
	},
	buttonText: {
		fontSize: 18,
		fontFamily: 'LatoLight',
		color: colors.white,
		lineHeight: 40,
	},
	title: {
		fontSize: 18,
		lineHeight: 40,
		fontFamily: 'LatoBold',
		textAlign: 'left',
		margin: 20,
		color: colors.cyan,
		textTransform: 'uppercase',
	},
});

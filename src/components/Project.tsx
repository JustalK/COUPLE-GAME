import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ProjectsProps } from '../interfaces/Projects';
import Windows from './Windows';
import { colors } from '../styles/colors';

/**
* Display a project for a listing
* @params {ProjectsProps} props The title and image
**/
export default class Project extends Component<ProjectsProps, never> {

	/**
	* The function for switching tabs and loading the project in the zoom tab
	* @params {string} id The id of the project
	**/
	zoomProject(id: string): void {
		this.props.updateIdProject(id);
		this.props.jumpTo('project');
	}

	/**
	* Display a project for a listing
	* @return {JSX.Element} The display of a project
	**/
	render(): JSX.Element {
		return (
			<TouchableOpacity onPress={() => this.zoomProject(this.props.id)}>
				<View>
					<Windows title={this.props.title} image={this.props.image} />
				</View>
			</TouchableOpacity>
		);
	}
}

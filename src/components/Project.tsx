import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ProjectsProps } from '../interfaces/Projects';
import Windows from './Windows';
import { colors } from '../styles/colors';

export default class Project extends Component<ProjectsProps, never> {
	constructor(props: ProjectsProps) {
		super(props);
	}

	zoomProject(id: string): void {
		this.props.updateIdProject(id);
		this.props.jumpTo('project');
	}

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

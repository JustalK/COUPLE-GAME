import React, { Component } from 'react';
import { TouchableHighlight } from 'react-native';
import { ProjectsProps } from '../interfaces/Projects';
import Windows from './Windows';

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
			<TouchableHighlight onPress={() => this.zoomProject(this.props.id)}>
				<Windows title={this.props.title} image={this.props.image} />
			</TouchableHighlight>
		);
	}
}

import React, { Component } from 'react';
import {StyleSheet, TouchableHighlight, Text, Image, View } from 'react-native';
import {ProjectsProps, ProjectsStates} from '../components/Project'
import Windows from './Windows'

export default class Project extends Component<ProjectsProps, ProjectsStates> {
	constructor(props) {
		super(props);
	}

	zoomProject(id) {
		this.props.updateIdProject(id);
		this.props.jumpTo('project');
	}

	render = () => {
	  return (
	    <TouchableHighlight onPress={() => this.zoomProject(this.props.id)}>
			<Windows title={this.props.title} image={this.props.image} />
	    </TouchableHighlight>
	  );
	}
}

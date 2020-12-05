import React, { Component } from 'react';
import {StyleSheet, TouchableHighlight, Text, Image, View } from 'react-native';
import {ProjectsProps, ProjectsStates} from '../components/Project'
import { colors } from '../styles/colors'

export default class Project extends Component<ProjectsProps, ProjectsStates> {
	constructor(props) {
		super(props);
	}

	zoomProject() {
		console.log('hey');
		this.props.jumpTo('third');
	}

	render = () => {
	  return (
	    <TouchableHighlight onPress={() => this.zoomProject()}>
			<View style={styles.project}>
				<Text style={styles.title}>{this.props.title}</Text>
				<Image source={{uri: "http://justalk.online" + this.props.image}} style={{height: 200}} />
			</View>
	    </TouchableHighlight>
	  );
	}
}

const styles = StyleSheet.create({
	project: {
		borderWidth: 1,
		borderColor: colors.black,
		marginBottom: 30
	},
	title: {
		fontFamily: "LatoBold",
		backgroundColor: colors.clearBlue,
		height: 40,
		lineHeight: 40,
		textTransform: "uppercase",
		color: colors.white,
		zIndex: 2,
		textAlign: "center",
		alignSelf: "stretch",

	}
})

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/colors'
import {WrittingEffectProps, WrittingEffectStates} from '../interfaces/WrittingEffect'

export default class WritingEffect extends Component<WrittingEffectProps, WrittingEffectStates> {
	constructor(props: WrittingEffectProps) {
		super(props)
		this.state = {
			fullText: "",
			indexArray: 0
		}
	}

	componentDidMount() {
		setTimeout(() => {
			this.writing(this.state.fullText, this.state.indexArray)
		}, 100);
	}

	writing(actualText: string, indexActualArray: number) {
		const i = actualText.length;
		if (i < this.props.data[indexActualArray].length) {
			const newFullText = actualText  + this.props.data[indexActualArray].charAt(i);
			this.setState({fullText: newFullText})
			setTimeout(() => {
				this.writing(newFullText, indexActualArray)
			}, 30);
		} else {
			setTimeout(() => {
				const newIndexArray = (indexActualArray + 1) % this.props.data.length
				this.setState({
					indexArray: newIndexArray,
					fullText: ""
				})
				this.writing("", newIndexArray);
			}, 1000);
		}
	}

	render = () => {
		return (
			<View>
				<Text style={this.props.style}>{this.props.predata} <Text style={{...this.props.style, ...styles.textStyle}}>{this.state.fullText}</Text></Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	textStyle: {
		borderRightWidth: 2,
		borderColor: colors.white,
		color: colors.white
	}
});

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/colors';
import { WrittingEffectProps, WrittingEffectStates } from '../interfaces/WrittingEffect';

/**
* Display a text that will be written automatically on the scren
* @params {WrittingEffectProps} props The data to write
* @return {JSX.Element} Display the writter of text
**/
export default class WritingEffect extends Component<WrittingEffectProps, WrittingEffectStates> {

	/**
	* The constructor and initializer of the state
	* @params {HomeProps} props The data to write
	**/
	constructor(props: WrittingEffectProps) {
		super(props);
		this.state = {
			fullText: '',
			indexArray: 0,
		};
	}

	/**
	* When the component is mounted, this method is called once
	* Active the first setTimeout for writting information
	**/
	componentDidMount(): void {
		setTimeout(() => {
			this.writing(this.state.fullText, this.state.indexArray);
		}, 100);
	}

	/**
	* Write text on the screen automatically letter by letter
	* @param {string} actualText The actual text shown on the screen
	* @param {number} indexActualArray The index in the array of jobs of the text being written
	**/
	writing(actualText: string, indexActualArray: number): void {
		const i = actualText.length;
		if (i < this.props.data[indexActualArray].length) {
			const newFullText = actualText + this.props.data[indexActualArray].charAt(i);
			this.setState({ fullText: newFullText });
			setTimeout(() => {
				this.writing(newFullText, indexActualArray);
			}, 30);
		} else {
			setTimeout(() => {
				const newIndexArray = (indexActualArray + 1) % this.props.data.length;
				this.setState({
					indexArray: newIndexArray,
					fullText: '',
				});
				this.writing('', newIndexArray);
			}, 1000);
		}
	}

	/**
	* Display the text writter
	* @return {JSX.Element} Display the writter of text
	**/
	render(): JSX.Element {
		return (
			<View>
				<Text style={this.props.style}>
					{this.props.predata + ' '}
					<Text style={[this.props.style, styles.textStyle]}>{this.state.fullText}</Text>
				</Text>
			</View>
		);
	}
}

/**
* Create the custom style for the writting text
**/
const styles = StyleSheet.create({
	textStyle: {
		borderRightWidth: 2,
		borderColor: colors.white,
		color: colors.white,
	},
});

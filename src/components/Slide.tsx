import React, { Component } from 'react';
import { View } from 'react-native';
import Windows from './Windows';
import { SlideProps } from '../interfaces/Slide';
import TextCustom from './TextCustom';

export default class Slide extends Component<SlideProps, never> {

	render(): JSX.Element {
		return (
			<View>
				<Windows title={this.props.title} image={this.props.image} />
				<TextCustom text={this.props.firstText} />
				<TextCustom text={this.props.secondText} />
			</View>
		);
	}
}

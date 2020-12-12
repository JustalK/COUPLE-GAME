import React, { Component } from 'react';
import { View } from 'react-native';
import Windows from './Windows';
import { SlideProps } from '../interfaces/Slide';
import TextCustom from './TextCustom';

/**
* Display a slide
* @params {SlideProps} props display the slide
**/
export default class Slide extends Component<SlideProps, never> {

	/**
	* Display a slide
	* @return {JSX.Element} Display a slide
	**/
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

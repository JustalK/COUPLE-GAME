import React, { Component } from 'react';
import { View } from 'react-native';
import Windows from './Windows';
import { SlideProps } from '../interfaces/Slide';
import Description from './Description';

export default class Slide extends Component<SlideProps, never> {

	render(): JSX.Element {
		return (
			<View>
				<Windows title={this.props.title} image={this.props.image} />
				<Description description={this.props.firstText} />
				<Description description={this.props.secondText} />
			</View>
		);
	}
}

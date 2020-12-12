import React, { Component } from 'react';
import { Animated } from 'react-native';
import { BlinkingEffectProps, BlinkingEffectStates } from '../interfaces/BlinkingEffect';

/**
* Display a blinking text
* @params {BlinkingEffectProps} props The informations about the style and children element
**/
export default class BlinkingEffect extends Component<BlinkingEffectProps, BlinkingEffectStates> {

	/**
	* The constructor and initializer of the state
	* @params {BlinkingEffectProps} The informations about the style and children element
	**/
	constructor(props: BlinkingEffectProps) {
		super(props);
		this.state = {
			fadeValue: new Animated.Value(0),
		};
	}

	/**
	* When the component is mounted, this method is called once
	* Activate the animation at the start
	**/
	componentDidMount(): void {
		this.fadeAnim();
	}

	/**
	* Create an infinite fading in and out animation on the children
	**/
	fadeAnim(): void {
		Animated.loop(
			Animated.sequence([
				Animated.timing(this.state.fadeValue, {
					toValue: 1,
					duration: 500,
					useNativeDriver: true,
				}),
				Animated.timing(this.state.fadeValue, {
					toValue: 0,
					duration: 1200,
					useNativeDriver: true,
				}),
			]),
		).start();
	}

	/**
	* Display the blinking text
	* @return {JSX.Element} Display the blinking text
	**/
	render(): JSX.Element {
		const opacity = { opacity: this.state.fadeValue };

		return <Animated.View style={[this.props.style as {}, opacity]}>{this.props.children}</Animated.View>; // eslint-disable-line @typescript-eslint/ban-types
	}
}

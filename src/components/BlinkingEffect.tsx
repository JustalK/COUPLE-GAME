import React, { Component, useRef } from 'react';
import { Animated, View, StyleProp, ViewStyle } from 'react-native';
import {BlinkingEffectProps, BlinkingEffectStates} from '../interfaces/BlinkingEffect';

export default class BlinkingEffect extends Component<BlinkingEffectProps, BlinkingEffectStates> {
	constructor(props: BlinkingEffectProps) {
		super(props);
		this.state = {
			fadeValue: new Animated.Value(0)
		};
	}

	componentDidMount() {
		this.fadeAnim();
 	}

	fadeAnim() {
		Animated.loop(
			Animated.sequence([
				Animated.timing(this.state.fadeValue,
		      	{
		        	toValue: 1,
		        	duration: 500,
					useNativeDriver: true
		      	}),
				Animated.timing(this.state.fadeValue,
		      	{
		        	toValue: 0,
		        	duration: 1200,
					useNativeDriver: true
		      	})
		  	])
		  ).start();
	}

	render = () => {
	  const opacity = {opacity: this.state.fadeValue};

	  return (
	    <Animated.View
	      style={[this.props.style as {}, opacity]}
	    >
	      {this.props.children}
	    </Animated.View>
	  );
	}
}

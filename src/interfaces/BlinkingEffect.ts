import { Animated } from 'react-native';
import { StyleProp, ViewStyle } from 'react-native';
import React from 'react';

export interface BlinkingEffectProps {
	/**
	* Style passed from the parent to the children
	**/
	style?: StyleProp<ViewStyle>;
	/**
	* Node passed from the parent to the children
	**/
	children: React.ReactNode;
}

export interface BlinkingEffectStates {
	/**
	* Animated value for some effect
	**/
	fadeValue: Animated.Value | Animated.ValueXY;
}

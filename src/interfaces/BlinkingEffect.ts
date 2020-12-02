import { Animated } from 'react-native';
import {StyleProp, ViewStyle} from 'react-native';
import React from "react";

export interface BlinkingEffectProps {
	style?: StyleProp<ViewStyle>,
	children: React.ReactNode
}

export interface BlinkingEffectStates {
	fadeValue: Animated.Value | Animated.ValueXY
}

import { StyleProp, ViewStyle } from 'react-native';

export interface WrittingEffectProps {
	/**
	* The data that will be written
	**/
	data: string[];
	/**
	* The data shown in front of the data to be written
	**/
	predata: string;
	/**
	* The style associated
	**/
	style?: StyleProp<ViewStyle>;
}

export interface WrittingEffectStates {
	/**
	* The state being written
	**/
	fullText: string;
	/**
	* The index of the element being written
	**/
	indexArray: number;
}

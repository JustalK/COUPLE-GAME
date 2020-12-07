import { StyleProp, ViewStyle } from 'react-native';

export interface WrittingEffectProps {
	data: string[];
	predata: string;
	style?: StyleProp<ViewStyle>;
}

export interface WrittingEffectStates {
	fullText: string;
	indexArray: number;
}

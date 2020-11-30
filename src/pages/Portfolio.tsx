import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { styleText, styleMain } from '../styles/main'
import { colors } from '../styles/colors'

export default function Portfolio() {
	return (
		<View style={styleMain.container}>
			<Text style={styleText.textStyle}>Test</Text>
		</View>
	);
}

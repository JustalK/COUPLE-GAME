import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from '../consts/colors'
import { useFonts } from 'expo-font';

export default function Portfolio() {
	const jobs = ["Fullstack Developer", "Backend Developer", "Frontend Developer"];

	const [loaded] = useFonts({
		Lato: require('../../assets/fonts/Lato-Regular.ttf'),
		Heebo: require('../../assets/fonts/Heebo-Bold.ttf'),
	  });

	  if (!loaded) {
	    return null;
	  }

	return (
		<View>
			<Text style={styles.textStyle}>Test</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 15,
		fontFamily: "Lato",
		color: colors.cyan
	}
});

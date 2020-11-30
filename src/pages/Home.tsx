import { registerRootComponent } from 'expo';
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from '../consts/colors'
import { styleText } from '../styles/main'
import BlinkingEffect from '../components/BlinkingEffect'
import WritingEffect from '../components/WritingEffect'
import { useFonts } from 'expo-font';

export default function Home() {
	const jobs = ["Fullstack Developer", "Backend Developer", "Frontend Developer"];

	const [loaded] = useFonts({
		Lato: require('../../assets/fonts/Lato-Regular.ttf'),
		Heebo: require('../../assets/fonts/Heebo-Bold.ttf'),
	  });

	  if (!loaded) {
	    return null;
	  }

	return (
		<View style={styles.container}>
			<Text style={styles.textStyle}>Hello World, Im Justal Kevin</Text>
			<WritingEffect predata="Im a" data={jobs}></WritingEffect>
			<Text style={styles.textStyle}>If any questions, contact me at justal.kevin@gmail.com</Text>
			<BlinkingEffect>
				<Text style={styles.intructions}>Press the screen</Text>
			</BlinkingEffect>
			<StatusBar style="auto" hidden />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.darkBlue,
		alignItems: "center",
		justifyContent: "center",
	},
	textStyle: {
		fontSize: 15,
		fontFamily: "Lato",
		color: colors.cyan
	},
	textCursor: {
		borderRightWidth: 2,
		borderColor: colors.white,
		color: colors.white
	},
	intructions: {
		...styleText.blinking,
		color: colors.white
	}
});

registerRootComponent(Home);

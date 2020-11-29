import { registerRootComponent } from 'expo';
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from '../consts/colors'
import { styleText } from '../styles/main'
import BlinkingText from '../components/BlinkingText'

export default function Home() {
	return (
		<View style={styles.container}>
			<Text style={styles.textStyle}>Hello World, Im Justal Kevin</Text>
			<Text style={styles.textStyle}>Im a Fullstack Developer</Text>
			<Text style={styles.textStyle}>If any questions, contact me at justal.kevin@gmail.com</Text>
			<BlinkingText>
				<Text style={styles.intructions}>Press the screen</Text>
			</BlinkingText>
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
		color: colors.cyan
	},
	intructions: {
		...styleText.blinking,
		color: colors.white
	}
});

registerRootComponent(Home);

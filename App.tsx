import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const white = "#fff";

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Hello World, Im Justal Kevin</Text>
			<Text>Im a Fullstack Developer</Text>
			<Text>If any questions, contact me at justal.kevin@gmail.com</Text>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: white,
		alignItems: "center",
		justifyContent: "center",
	},
});

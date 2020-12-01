import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Image, View, TouchableHighlight } from "react-native";
import { colors } from '../styles/colors'
import { styleText, styleMain } from '../styles/main'
import BlinkingEffect from '../components/BlinkingEffect'
import WritingEffect from '../components/WritingEffect'
import profileImg from '../../assets/me.jpeg'

export default function Home(props) {
	const jobs = ["Fullstack Developer", "Backend Developer", "Frontend Developer"];

	  const goToPortfolio = () => {
		  props.navigation.navigate('Portfolio')
	  }

	return (
		<TouchableHighlight onPress={goToPortfolio} style={styleMain.container}>
			<View style={styles.home}>
				<Image
					style={styles.portrait}
					source={profileImg}
				/>
				<Text style={styles.textStyle}>Hello World, Im Justal Kevin</Text>
				<WritingEffect style={styles.textStyle} predata="Im a" data={jobs}></WritingEffect>
				<Text style={styles.textStyle}>If any questions, contact me at justal.kevin@gmail.com</Text>
				<BlinkingEffect>
					<Text style={styles.intructions}>Press the screen</Text>
				</BlinkingEffect>
				<StatusBar style="auto" hidden />
			</View>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 18,
		fontFamily: "LatoLight",
		textAlign: "center",
		color: colors.cyan
	},
	portrait: {
		width: 200,
		height: 200,
		alignSelf: "center",
		marginBottom: 50,
		borderRadius: 200,
		borderWidth: 1,
		borderColor: colors.cyan
	},
	textCursor: {
		borderRightWidth: 2,
		borderColor: colors.white,
		color: colors.white
	},
	intructions: {
		marginTop: 100,
		textAlign: "center",
		fontFamily: "LatoLight",
		fontSize: 14,
		color: colors.white,
		textTransform: "uppercase"
	}
});

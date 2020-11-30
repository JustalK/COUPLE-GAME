import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/colors'

export default WritingEffect = (props) => {
	const [fullText, setFullText] = useState("");
	const [startAnimation, setStartAnimation] = useState(true);
	const [indexArray, setIndexArray] = useState(0);

	function writing(actualText, indexActualArray) {
		const i = actualText.length;
		if (i < props.data[indexActualArray].length) {
			const newFullText = actualText  + props.data[indexActualArray].charAt(i);
			setFullText(newFullText);
			setTimeout(function() {
				writing(newFullText, indexActualArray)
			}, 30);
		} else {
			setTimeout(function() {
				const newIndexArray = (indexActualArray + 1)%props.data.length
				setIndexArray(newIndexArray);
				setFullText("");
				writing("", newIndexArray);
			}, 1000);
		}
	}

	if(startAnimation) {
		setStartAnimation(false);
		setTimeout(function() {
			writing(fullText, indexArray)
		}, 100);
	}

	return (
    <View>
      	<Text style={props.style}>{props.predata} <Text style={{...props.style, ...styles.textStyle}}>{fullText}</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
	textStyle: {
		borderRightWidth: 2,
		borderColor: colors.white,
		color: colors.white
	}
});

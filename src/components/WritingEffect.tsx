import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../consts/colors'

export default WritingEffect = (props) => {
	const [fullText, setFullText] = useState("");
	const [startAnimation, setStartAnimation] = useState(true);

	function writing(actualText) {
		const i = actualText.length;
		if (i < props.data.length) {
			const newFullText = actualText  + props.data.charAt(i);
			setFullText(newFullText);
			setTimeout(function() {
				writing(newFullText)
			}, 100);
		} else {
			setTimeout(function() {
				setFullText("");
				writing("");
			}, 1000);
		}
	}

	if(startAnimation) {
		setStartAnimation(false);
		setTimeout(function() {
			writing(fullText)
		}, 100);
	}

	return (
    <View
      	style={{
        	...props.style
      	}}>
      	<Text style={styles.text}>{props.predata} {fullText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
	text: {
		color: colors.white
	}
});

import React, { useRef, useEffect } from 'react';
import { Animated, View } from 'react-native';

export default BlinkingEffect = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current

  React.useEffect(() => {
	Animated.loop(
		Animated.sequence([
			Animated.timing(fadeAnim,
	      	{
	        	toValue: 1,
	        	duration: 500,
				useNativeDriver: true
	      	}),
			Animated.timing(fadeAnim,
	      	{
	        	toValue: 0,
	        	duration: 1200,
				useNativeDriver: true
	      	})
	  	])
	  ).start();
  }, [fadeAnim])

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
}

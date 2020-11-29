import React, { useRef, useEffect } from 'react';
import { Animated, View } from 'react-native';

export default BlinkingText = (props) => {
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
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}

// For Navigation purpose
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';
const Stack = createStackNavigator();

import { registerRootComponent } from 'expo';
import React from "react";
import { StyleSheet, View, Animated } from "react-native";
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import { colors } from './consts/colors'
import { useFonts } from 'expo-font';

const forSlide = ({ current, next, inverted, layouts: { screen } }) => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        })
      : 0
  );

  return {
    cardStyle: {
      transform: [
        {
          translateX: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [
                screen.width, // Focused, but offscreen in the beginning
                0, // Fully focused
                screen.width * -0.3, // Fully unfocused
              ],
              extrapolate: 'clamp',
            }),
            inverted
          ),
        },
      ],
    },
  };
};

export default function App() {
	const [loaded] = useFonts({
		LatoRegular: require('../assets/fonts/Lato-Regular.ttf'),
		LatoLight: require('../assets/fonts/Lato-Light.ttf'),
		Heebo: require('../assets/fonts/Heebo-Bold.ttf'),
	  });

	  if (!loaded) {
		return null;
	  }

	return (
		<NavigationContainer>
			<Stack.Navigator>
	  			<Stack.Screen
					name="Home"
					component={Home}
					options={{ title: 'Welcome', headerShown: false, cardStyleInterpolator: forSlide }} />
				<Stack.Screen name="Portfolio" component={Portfolio} options={{headerShown: false, cardStyleInterpolator: forSlide}} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

registerRootComponent(App);

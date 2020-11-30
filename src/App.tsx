// For Navigation purpose
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import { registerRootComponent } from 'expo';
import React from "react";
import { StyleSheet, View } from "react-native";
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import { colors } from './consts/colors'
import { useFonts } from 'expo-font';

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
					options={{ title: 'Welcome', headerShown: false }} />
				<Stack.Screen name="Portfolio" component={Portfolio} options={{headerShown: false}} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

registerRootComponent(App);

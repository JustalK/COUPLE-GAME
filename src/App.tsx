// For Navigation purpose
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionSpecs, HeaderStyleInterpolators, StackCardInterpolationProps} from '@react-navigation/stack';
const Stack = createStackNavigator();

import { registerRootComponent } from 'expo';
import React, { Component } from "react";
import { StyleSheet, View, Text, Animated, Button } from "react-native";
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import * as Font from 'expo-font';
import {AppProps, AppStates} from './interfaces/App'
import { colors } from './styles/colors'

const forSlide = ({ current, next, inverted, layouts: { screen } }: StackCardInterpolationProps) => {
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

const customFonts = {
	LatoRegular: require('../assets/fonts/Lato-Regular.ttf'),
	LatoBold: require('../assets/fonts/Lato-Bold.ttf'),
	LatoLight: require('../assets/fonts/Lato-Light.ttf'),
	Heebo: require('../assets/fonts/Heebo-Bold.ttf')
};

export default class App extends Component<AppProps, AppStates> {
	constructor(props: AppProps) {
		super(props);
		this.state = {
			fontsLoaded: false
		};
	}

	async componentDidMount() {
		await Font.loadAsync(customFonts);
    	this.setState({ fontsLoaded: true });
	}

	render = () => {
		if (this.state.fontsLoaded) {
			return (
				<NavigationContainer>
					<Stack.Navigator>
			  			<Stack.Screen
							name="Home"
							component={Home}
							options={{ title: 'Welcome', headerShown: false, cardStyleInterpolator: forSlide }} />
						<Stack.Screen name="Portfolio" component={Portfolio} options={{
							headerStyle: {
								backgroundColor: colors.clearBlue
							},
							headerLeft: () => (
								<Button
									onPress={() => alert('This is a button!')}
									title="Info"
									color="#fff"
								/>
							),
							headerTitle: () => (
								<Button
									onPress={() => alert('This is a button!')}
									title="Info"
									color="#fff"
								/>
							),
							headerRight: () => (
								<Button
									onPress={() => alert('This is a button!')}
              						title="Info"
              						color="#fff"
								/>
							),
							cardStyleInterpolator: forSlide}} />
					</Stack.Navigator>
				</NavigationContainer>
			)
		} else {
			return (<Text>Loading</Text>)
		}
	};
}

registerRootComponent(App);

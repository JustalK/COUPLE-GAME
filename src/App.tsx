// For Navigation purpose
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackCardInterpolationProps } from '@react-navigation/stack';
const Stack = createStackNavigator();

import { registerRootComponent } from 'expo';
import React, { Component } from 'react';
import { Text, Animated } from 'react-native';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import * as Font from 'expo-font';
import { AppStates } from './interfaces/App';

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
			: 0,
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
						inverted,
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
	Heebo: require('../assets/fonts/Heebo-Bold.ttf'),
};

export default class App extends Component<unknown, AppStates> {
	constructor(props: unknown) {
		super(props);
		this.state = {
			fontsLoaded: false,
		};
	}

	async componentDidMount(): Promise<void> {
		await Font.loadAsync(customFonts);
		this.setState({ fontsLoaded: true });
	}

	render(): JSX.Element {
		if (this.state.fontsLoaded) {
			return (
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen name="Home" component={Home} options={{ headerShown: false, cardStyleInterpolator: forSlide }} />
						<Stack.Screen name="Portfolio" component={Portfolio} options={{ headerShown: false, cardStyleInterpolator: forSlide }} />
					</Stack.Navigator>
				</NavigationContainer>
			);
		} else {
			return <Text>Loading</Text>;
		}
	}
}

registerRootComponent(App);

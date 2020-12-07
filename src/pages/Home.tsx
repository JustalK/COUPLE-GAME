import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, TouchableWithoutFeedback } from 'react-native';
import { colors } from '../styles/colors';
import { styleMain } from '../styles/main';
import BlinkingEffect from '../components/BlinkingEffect';
import WritingEffect from '../components/WritingEffect';
import Loading from '../components/Loading';
import profileImg from '../../assets/me.jpeg';
import { HomeProps, HomeStates } from '../interfaces/Home';
import ApiContact from '../services/ApiContact';
import ApiJob from '../services/ApiJob';

export default class Home extends Component<HomeProps, HomeStates> {
	constructor(props: HomeProps) {
		super(props);
		this.state = {
			fullname: '',
			email: '',
			jobs: [''],
			loading: true,
		};
	}

	async componentDidMount(): Promise<void> {
		const identity = await ApiContact.getMyContact();
		const jobs = await ApiJob.getJobs();
		const jobs_title = jobs.map((job) => job.title);
		this.setState({ fullname: identity.fullname, email: identity.email, jobs: jobs_title, loading: false });
	}

	renderHome(): JSX.Element {
		return (
			<View>
				<Image style={styles.portrait} source={profileImg} />
				<Text style={styles.textStyle}>Hello World, Im {this.state.fullname}</Text>
				<WritingEffect style={styles.textStyle as {}} predata="Im a" data={this.state.jobs}></WritingEffect>
				<Text style={styles.textStyle}>If any questions, contact me at {this.state.email}</Text>
				<BlinkingEffect>
					<Text style={styles.intructions}>Press the screen</Text>
				</BlinkingEffect>
			</View>
		);
	}

	renderLoading(): JSX.Element {
		return <Loading />;
	}

	render(): JSX.Element {
		return (
			<TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Portfolio')}>
				<View style={styleMain.homeContainer}>
					{this.state.loading && this.renderLoading()}
					{!this.state.loading && this.renderHome()}
					<StatusBar style="auto" hidden />
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 18,
		fontFamily: 'LatoLight',
		textAlign: 'center',
		color: colors.cyan,
	},
	portrait: {
		width: 200,
		height: 200,
		alignSelf: 'center',
		marginBottom: 50,
		borderRadius: 200,
		borderWidth: 1,
		borderColor: colors.cyan,
	},
	intructions: {
		marginTop: 100,
		textAlign: 'center',
		fontFamily: 'LatoLight',
		fontSize: 14,
		color: colors.white,
		textTransform: 'uppercase',
	},
});

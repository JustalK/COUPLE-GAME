import axios from 'axios';
import React, { Component } from 'react';

export default class Api extends Component {

	static get = (url: string) => {
		return axios.get(url);
	}
}

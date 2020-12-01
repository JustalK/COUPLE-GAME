import axios from 'axios';
import React, { Component } from 'react';
import { ApiDataProps } from '../../interfaces/Api'

export default class Api extends Component {

	static get = (url: string) => {
		return axios.get(url);
	}

	static success: any = (response: ApiDataProps) => {
		return response.data;
	}
}

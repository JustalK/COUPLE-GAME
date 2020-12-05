import axios from 'axios';
import React, { Component } from 'react';
import { ApiDataProps } from '../../interfaces/Api'
import { apiConfig } from './ApiConfig'

export default class Api extends Component {

	static get = (url: string) => {
		return axios.get(apiConfig.api_url + url);
	}

	static success: any = (response: ApiDataProps) => {
		return response.data;
	}
}

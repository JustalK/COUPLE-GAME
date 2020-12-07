import axios, { AxiosResponse } from 'axios';
import { Component } from 'react';
import { ApiDataProps } from '../../interfaces/Api';
import { apiConfig } from './ApiConfig';

export default class Api extends Component {
	static get<T, R = AxiosResponse<T>>(url: string): Promise<R> {
		return axios.get(apiConfig.api_url + url);
	}

	static success<T>(response: ApiDataProps): T {
		return response.data;
	}
}

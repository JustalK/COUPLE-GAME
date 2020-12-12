import axios, { AxiosResponse } from 'axios';
import { Component } from 'react';
import { ApiDataProps } from '../../interfaces/Api';
import { apiConfig } from './ApiConfig';

/**
* Superclass for managing the API call
**/
export default class Api extends Component {

	/**
	* Manage the get method for API calls
	* @params {string} url The endpoint to call
	* @return {AxiosResponse} An object Response from axios
	**/
	static get<T, R = AxiosResponse<T>>(url: string): Promise<R> {
		return axios.get(apiConfig.api_url + url);
	}

	/**
	* Manage the success method for API calls
	* params {ApiDataProps} Receive the success response from axios
	* @return {Object} The data resulting from the successful call
	**/
	static success<T>(response: ApiDataProps): T {
		return response.data;
	}
}

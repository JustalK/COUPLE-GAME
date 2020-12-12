import Api from './libs/Api';
import { Component } from 'react';
import { SlideApiProps } from '../interfaces/Slide';

/**
* Manage the API for the slide of the application
**/
export default class ApiSlide extends Component {

	/**
	* Get one slide from the website
	* @params {string} id The id of the slide
	* @return {SlideApiProps} A slide
	**/
	static getOneSlide = async (id: string): Promise<SlideApiProps> => {
		const response = await Api.get('/slides/one?id=' + id);
		return Api.success(response);
	};
}

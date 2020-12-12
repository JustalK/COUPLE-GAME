import Api from './libs/Api';
import { Component } from 'react';
import { PagesInformationProps } from '../interfaces/Pages';

/**
* Manage the API of the page
**/
export default class ApiPage extends Component {

	/**
	* Manage the API of Page by slug/name
	* @return {PagesInformationProps[]} Return an array of page
	**/
	static getPortfolioInformation = async (): Promise<PagesInformationProps[]> => {
		const response = await Api.get('/pages?name=portfolio');
		return Api.success(response);
	};
}

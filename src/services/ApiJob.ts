import Api from './libs/Api';
import { Component } from 'react';
import { PagesInformationProps } from '../interfaces/Pages';

/**
* Manage the API of job
**/
export default class ApiJob extends Component {

	/**
	* Get the list of all jobs
	* @return {PagesInformationProps[]} The list of all jobs
	**/
	static getJobs = async (): Promise<PagesInformationProps[]> => {
		const response = await Api.get('/jobs');
		return Api.success(response);
	};
}

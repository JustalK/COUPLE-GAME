import Api from './libs/Api';
import { Component } from 'react';
import { PagesInformationProps } from '../interfaces/Pages';

export default class ApiJob extends Component {
	static getJobs = async (): Promise<PagesInformationProps[]> => {
		const response = await Api.get('/jobs');
		return Api.success(response);
	};
}

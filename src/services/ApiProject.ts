import Api from './libs/Api';
import React, { Component } from 'react';
import {ProjectsInformationProps} from '../interfaces/Projects'

export default class ApiProject extends Component {
	static getProject = async (page: number): Promise<ProjectsInformationProps[]> => {
		const response = await Api.get("http://justalk.online/api/articles?page=" + page + "&tags=5f95461688489acdd8ee5871");
		return Api.success(response);
	}
}

import Api from './libs/Api';
import React, { Component } from 'react';
import {ProjectsInformationProps} from '../interfaces/Projects'

export default class ApiProject extends Component {
	static getProject = async (page: number): Promise<ProjectsInformationProps[]> => {
		const response = await Api.get("/articles?page=" + page + "&tags=5f95461688489acdd8ee5871");
		return Api.success(response);
	}

	static countProject = async (page: number): Promise<ProjectsInformationProps[]> => {
		const response = await Api.get("/articles/count?tags=5f95461688489acdd8ee5871");
		return Api.success(response);
	}

	static getMenu = async (page: number): Promise<ProjectsInformationProps[]> => {
		const response = await Api.get("/articles/menu");
		return Api.success(response);
	}
}

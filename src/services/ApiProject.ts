import Api from './libs/Api';
import { Component } from 'react';
import { ProjectsInformationProps, TotalProjectsProps, ProjectsMenuProps } from '../interfaces/Projects';

/**
* Manage the API for the projects
**/
export default class ApiProject extends Component {

	/**
	* Get projects by page
	* @params {number} page The page to call
	* @return {ProjectsInformationProps[]} An array of project
	**/
	static getProject = async (page: number): Promise<ProjectsInformationProps[]> => {
		const response = await Api.get('/articles?page=' + page + '&tags=5f95461688489acdd8ee5871');
		return Api.success(response);
	};

	/**
	* Get one project with full details by id
	* @params {string} id The id of the project
	* @return {ProjectsInformationProps} A project will full information
	**/
	static getOneProject = async (id: string): Promise<ProjectsInformationProps> => {
		const response = await Api.get('/articles/one?id=' + id + '&populate=true');
		return Api.success(response);
	};

	/**
	* Count the total number of project
	* @return {TotalProjectsProps} Return the number of total project
	**/
	static countProject = async (): Promise<TotalProjectsProps> => {
		const response = await Api.get('/articles/count?tags=5f95461688489acdd8ee5871');
		return Api.success(response);
	};

	/**
	* Get the name and slug of all the project
	* This call is very usefull for creating a menu
	* @return {ProjectsMenuProps} Return the menu
	**/
	static getMenu = async (): Promise<ProjectsMenuProps[]> => {
		const response = await Api.get('/articles/menu');
		return Api.success(response);
	};
}

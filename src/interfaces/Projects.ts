import { ImageProps } from './Image';

export interface ProjectsInformationProps {
	/**
	* The id of a project
	**/
	_id: string;
	/**
	* The title of a project
	**/
	title: string;
	/**
	* The id slides of a project
	**/
	slides: string[];
	/**
	* The long description of a project
	**/
	long_description: string;
	/**
	* The list of image of a project
	**/
	images: ImageProps[];
}

export interface TotalProjectsProps {
	/**
	* The total number of projects
	**/
	total: number;
}

export interface ProjectsMenuProps {
	/**
	* The id of a project
	**/
	id: string;
	/**
	* The title of a project
	**/
	title: string;
	/**
	* The slug of a project
	**/
	slug: string;
}

export interface ProjectsProps {
	/**
	* The title of a project
	**/
	title: string;
	/**
	* The id of a project
	**/
	id: string;
	/**
	* The image path of a project
	**/
	image: string;
	/**
	* The function for update the id of the project for the portfolio
	**/
	updateIdProject(id: string): void;
	/**
	* The function for navigating between tabs
	**/
	jumpTo(route: string): void;
}

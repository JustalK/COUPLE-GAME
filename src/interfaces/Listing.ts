import { PagesInformationProps } from './Pages';
import { ProjectsInformationProps } from './Projects';

export interface RouteNavProps {
	/**
	* The name of the route
	**/
	name: string;
}

export interface ListingProps {
	/**
	* The function for navigating between tabs
	**/
	jumpTo(route: string): void;
	/**
	* The function for update the id of the project for the portfolio
	**/
	updateIdProject(id: string): void;
}

export interface ListingStates {
	/**
	* The information of the page
	**/
	informations: PagesInformationProps;
	/**
	* List of the projects in the listing
	**/
	projects: ProjectsInformationProps[];
	/**
	* True if the user is loading more project
	**/
	loadMore: boolean;
	/**
	* True if the page is loading
	**/
	loading: boolean;
	/**
	* Number max of project
	**/
	pageLimit: number;
	/**
	* Index of the last page loaded
	**/
	page: number;
}

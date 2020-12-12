import { PagesInformationProps } from './Pages';
import { ProjectsInformationProps } from './Projects';

export interface RouteNavProps {
	/**
	* The name of a route
	**/
	name: string;
}

export interface PortfolioProps {
	/**
	* The function for update the id of the project for the portfolio
	**/
	updateIdProject(id: string): void;
	/**
	* The function for navigating between tabs
	**/
	jumpTo(route: string): void;
	/**
	* The route object containing the name of the route
	**/
	route: RouteNavProps;
	navigation: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export interface PortfolioStates {
	/**
	* The information of the page
	**/
	informations: PagesInformationProps;
	/**
	* The list of project
	**/
	projects: ProjectsInformationProps[];
	/**
	* True if the page has been loaded
	**/
	loadMore: boolean;
	/**
	* The index of the last page load
	**/
	page: number;
}

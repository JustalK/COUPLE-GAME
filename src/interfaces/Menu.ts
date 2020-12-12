import { ProjectsMenuProps } from './Projects';

export interface MenuProps {
	/**
	* The function for navigating between tabs
	**/
	jumpTo(route: string): void;
	/**
	* The function for update the id of the project for the portfolio
	**/
	updateIdProject(id: string): void;
}

export interface MenuStates {
	/**
	* The project's list
	**/
	projects: ProjectsMenuProps[];
	/**
	* The email in the menu
	**/
	email: string;
}

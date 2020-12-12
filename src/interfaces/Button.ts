export interface ButtonProps {
	/**
	* The function for navigating between tabs
	**/
	jumpTo(route: string): void;
	/**
	* The function for update the id of the project for the portfolio
	**/
	updateIdProject(id: string): void;
	/**
	* id of the project to load when button click
	**/
	idProject: string;
	/**
	* slug of the project
	**/
	slug: string;
	/**
	* index of the button
	**/
	index: number;
	/**
	* Title of the button
	**/
	buttonTitle: string;
}

export interface RouteProps {
	/**
	* The key of the route
	**/
	key: string;
	/**
	* The title of the route
	**/
	title: string;
}

export interface MainStates {
	/**
	* The index of the tab
	**/
	index: number;
	/**
	* The id of the project in the tabs id project
	**/
	idProject: string;
	/**
	* The routes in the tabs
	**/
	routes: RouteProps[];
	/**
	* True if the project in the zoom tabs is loading
	**/
	loadingProject: boolean;
}

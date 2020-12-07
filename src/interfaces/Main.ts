export interface RouteProps {
	key: string;
	title: string;
}

export interface MainStates {
	index: number;
	idProject: string;
	routes: RouteProps[];
	loadingProject: boolean;
}

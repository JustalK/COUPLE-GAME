import { PagesInformationProps } from './Pages';
import { ProjectsInformationProps } from './Projects';

export interface RouteNavProps {
	name: string;
}

export interface PortfolioProps {
	updateIdProject(id: string): void;
	jumpTo(route: string): void;
	route: RouteNavProps;
	navigation: any;
}

export interface PortfolioStates {
	informations: PagesInformationProps;
	projects: ProjectsInformationProps[];
	loadMore: boolean;
	page: number;
}

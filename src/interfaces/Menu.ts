import { ProjectsMenuProps } from './Projects';

export interface MenuProps {
	jumpTo(route: string): void;
	updateIdProject(id: string): void;
}

export interface MenuStates {
	projects: ProjectsMenuProps[];
	email: string;
}

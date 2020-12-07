export interface ButtonProps {
	updateIdProject(id: string): void;
	jumpTo(route: string): void;
	idProject: string;
	slug: string;
	index: number;
	buttonTitle: string;
}

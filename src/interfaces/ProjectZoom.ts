import { SlideApiProps } from './Slide';

export interface ProjectZoomProps {
	/**
	* The id of the project
	**/
	idProject: string;
	/**
	* True if the project is loading
	**/
	loadingProject: boolean;
	/**
	* The jumpTo function of the navigation for switching tabs
	**/
	jumpTo(route: string): void;
	/**
	* For specifing that the project has been loaded
	**/
	projectLoaded(): void;
}

export interface ProjectZoomStates {
	/**
	* The title of the project
	**/
	title: string;
	/**
	* The description of the project
	**/
	description: string;
	/**
	* True if the project is loading more
	**/
	loadMore: boolean;
	/**
	* The id list of slides
	**/
	slidesId: string[];
	/**
	* The list of slide load
	**/
	slides: SlideApiProps[];
}

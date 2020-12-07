import { SlideApiProps } from './Slide';

export interface ProjectZoomProps {
	idProject: string;
	loadingProject: boolean;
	jumpTo(route: string): void;
	projectLoaded(): void;
}

export interface ProjectZoomStates {
	title: string;
	description: string;
	loadMore: boolean;
	slidesId: string[];
	slides: SlideApiProps[];
}

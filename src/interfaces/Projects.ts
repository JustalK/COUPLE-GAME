import {ImageProps} from './Image'

export interface ProjectsInformationProps {
	_id: string
	title: string
	slides: string[]
	long_description: string
	images: ImageProps[]
}

export interface TotalProjectsProps {
	total: number
}

export interface ProjectsMenuProps {
	id: string
	title: string
	slug: string
}

export interface ProjectsProps {
	title: string
	id: string
	image: string
	updateIdProject(id: string): void
	jumpTo(route: string): void
}

export interface ProjectsStates {}

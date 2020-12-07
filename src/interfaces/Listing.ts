import {PagesInformationProps} from './Pages'
import {ProjectsInformationProps} from './Projects'

export interface RouteNavProps {
	name: string
}

export interface ListingProps {
	updateIdProject(id: string): void
	jumpTo(route: string): void
	route: RouteNavProps
	navigation: any
}

export interface ListingStates {
	informations: PagesInformationProps
	projects: ProjectsInformationProps[]
	loadMore: boolean
	loading: boolean
	pageLimit: number
	page: number
}

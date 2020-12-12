export interface HeaderAppProps {
	/**
	* The route object for navigating
	**/
	navigation: any; // eslint-disable-line @typescript-eslint/no-explicit-any
	/**
	* The title in the header
	**/
	title: string;
}

export interface HeaderAppStates {
	/**
	* My email
	**/
	email: string;
}

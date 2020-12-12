export interface HomeProps {
	/**
	* The route object for navigating
	**/
	navigation: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export interface HomeStates {
	/**
	* My fullname
	**/
	fullname: string;
	/**
	* My email
	**/
	email: string;
	/**
	* My jobs
	**/
	jobs: string[];
	/**
	* True if the page is loading
	**/
	loading: boolean;
}

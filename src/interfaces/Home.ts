export interface HomeProps {
	navigation: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export interface HomeStates {
	fullname: string;
	email: string;
	jobs: string[];
	loading: boolean;
}

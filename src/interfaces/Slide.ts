import { ImageProps } from './Image';

export interface SlideApiProps {
	/**
	* The title of the slide from the API
	**/
	title: string;
	/**
	* The image of the slide from the API
	**/
	image: ImageProps;
	/**
	* The first paragraph of the slide from the API
	**/
	first_text: string;
	/**
	* The second paragraph of the slide from the API
	**/
	second_text: string;
}

export interface SlideProps {
	/**
	* The title of the slide
	**/
	title: string;
	/**
	* The image of the slide
	**/
	image: string;
	/**
	* The first paragraph of the slide
	**/
	firstText: string;
	/**
	* The second paragraph of the slide
	**/
	secondText: string;
}

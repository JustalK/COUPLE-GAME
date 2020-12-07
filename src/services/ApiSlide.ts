import Api from './libs/Api';
import React, { Component } from 'react';
import {PagesInformationProps} from '../interfaces/Pages'
import {SlideApiProps} from '../interfaces/Slide'

export default class ApiJob extends Component {
	static getOneSlide = async (id: string): Promise<SlideApiProps> => {
		const response = await Api.get("/slides/one?id=" + id);
		return Api.success(response);
	}
}

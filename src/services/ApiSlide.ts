import Api from './libs/Api';
import React, { Component } from 'react';
import {PagesInformationProps} from '../interfaces/Pages'

export default class ApiJob extends Component {
	static getOneSlide = async (id): Promise<PagesInformationProps[]> => {
		const response = await Api.get("/slides/one?id=" + id);
		return Api.success(response);
	}
}

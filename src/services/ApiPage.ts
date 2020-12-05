import Api from './libs/Api';
import React, { Component } from 'react';
import {PagesInformationProps} from '../interfaces/Pages'

export default class ApiPage extends Component {
	static getPortfolioInformation = async (): Promise<PagesInformationProps[]> => {
		const response = await Api.get("/pages?name=portfolio");
		return Api.success(response);
	}
}

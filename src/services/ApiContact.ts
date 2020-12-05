import Api from './libs/Api';
import React, { Component } from 'react';
import {PagesInformationProps} from '../interfaces/Pages'

export default class ApiContact extends Component {
	static getMyContact = async (): Promise<PagesInformationProps[]> => {
		const response = await Api.get("/contacts/my-identity");
		return Api.success(response);
	}
}

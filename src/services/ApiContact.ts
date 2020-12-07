import Api from './libs/Api';
import React, { Component } from 'react';
import {ContactProps} from '../interfaces/Contact'

export default class ApiContact extends Component {
	static getMyContact = async (): Promise<ContactProps> => {
		const response = await Api.get("/contacts/my-identity");
		return Api.success(response);
	}
}

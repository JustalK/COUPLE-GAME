import Api from './libs/Api';
import { Component } from 'react';
import { ContactProps } from '../interfaces/Contact';

/**
* Manage the API of contact
**/
export default class ApiContact extends Component {
	/**
	* Get the informations about me
	* @return {ContactProps} Return the informations about me
	**/
	static getMyContact = async (): Promise<ContactProps> => {
		const response = await Api.get('/contacts/my-identity');
		return Api.success(response);
	};
}

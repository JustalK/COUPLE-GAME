import Api from './libs/Api';
import React, { Component } from 'react';

export default class ApiPage extends Component {
	static getPortfolioInformation = () => {
		return Api.get("http://justalk.online/api/pages?name=portfolio");
	}
}

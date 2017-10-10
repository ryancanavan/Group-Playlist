import React, { Component } from 'react';

import Login from './Login';
import './styles/Body.css';

export default class Body extends Component {
	state = { 
		loggedIn: false,
		params: null
	}

	componentWillMount() {
		let params = this.getHashParams();
		this.setState({
			params: params
		});
		if(this.state.loggedIn === false)
			this.loggedInCheck(params);
	}

	getHashParams() {
		var hashParams = {};
		var e, r = /([^&;=]+)=?([^&;]*)/g,
			q = window.location.hash.substring(1);
		// eslint-disable-next-line
		while ( e = r.exec(q)) {
			hashParams[e[1]] = decodeURIComponent(e[2]);
		}
		return hashParams;
	}

	loggedInCheck(params) {
        if(!isEmpty(params)){
            this.setState({
                loggedIn: true,
            });
        }
	}

	render() {
		if(this.state.params.error) {
			return <Login error={this.state.params.error} />
		} else if(this.state.loggedIn) {
			return "You are logged in!";
		} else { 
			return <Login />;
		}
	}
}

function isEmpty(obj) {
	for(var prop in obj) {
		if(obj.hasOwnProperty(prop))
			return false;
	}
	return JSON.stringify(obj) === JSON.stringify({});
}
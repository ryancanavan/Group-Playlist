import React from 'react';
import { object } from 'prop-types';

import './styles/Login.css';
import Philly from '../res/philly.png';

Login.propTypes = {
	error: object
}

function Login({ error = "" }) {
	return (
		<div className="Login">
			<img className="BackgroundImage" alt="" src={Philly} />
			<div className="LoginContents">
				{(error !== "") && <h2>An error occurred. Please try again.</h2>}
				<a href="/login"><button className="loginButton"><b>Login With Spotify</b></button></a>
			</div>
		</div>
	);
}

export default Login;
import React from 'react';
import Philly from '../philly.png';

function Login(props) {
	return (
		<div className="Login">
			<img className="BackgroundImage" alt="" src={Philly} />
			<div className="LoginContents">
				<br />
				{(props.error !== "") && <h2>An error occurred. Please try again.</h2>}
				<a href="/login"><button className="loginButton"><b>Login With Spotify</b></button></a>
			</div>
		</div>
	);
}

export default Login;
import React from 'react';
import spotifyLogo from '../Spotify_Icon_Green.png';

function Header() {
	return (
		<div className="Header">
			<img className="Logo" src={spotifyLogo} alt="Spotify Logo" height="75" width="75" />
			<h1 className="Title">Spotify Timed Playlists!</h1>
		</div>
	);
}

export default Header;
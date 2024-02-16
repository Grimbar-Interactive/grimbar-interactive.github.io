import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './navbar';
import './navbar.css';
import './navbar-mobile.css';

export default class NavBarSimple extends NavBar {

	render() {
		var buttons = [
			this.renderButton('Home', '/')
		];

		return (
			<div id="nav-bar">
				<Link to="/" id="logo-container">
					<img id="grimbar-logo" src="./images/Grimbar_Interactive_Logo_Image_Only.png" alt="Grimbar Interactive Logo" />
					<img id="grimbar-name" src="./images/Grimbar_Interactive_Logo_Name_Only.png" alt="Grimbar Interactive Logo" />
				</Link>
				<nav id="desktopNav">{buttons}</nav>
				<nav id="mobileNav">{buttons}</nav>
				<div id="icons">
					<img id="return-up" onClick={this.returnUp} src="./images/return-up-arrow.png" alt="Up Arrow" />
					<img className="icon" onClick={this.burgerMenu} src="./images/bars-solid.png" alt="Menu Bar" />
				</div>
			</div>
		);
	}
}
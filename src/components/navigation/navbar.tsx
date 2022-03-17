import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import './navbar-mobile.css';

type NavBarState = {
	menuVisible: boolean,
}

let navMenuVisible: boolean = false;

export default class NavBar extends React.Component<{}, NavBarState> {
	constructor(props: object) {
		super(props)
		this.returnUp = this.returnUp.bind(this);
		this.burgerMenu = this.burgerMenu.bind(this);

		window.addEventListener('scroll', event => {
			if (window.pageYOffset > 50 && window.innerWidth < 1400) {
				document.getElementById('return-up').setAttribute("style", "opacity: 100");
			} else if (window.pageYOffset > 50) {
				document.getElementById('return-up').setAttribute("style", "opacity: 100");
				document.getElementById('grimbar-logo').setAttribute("style", "height: 75px");
				document.getElementById('nav-bar').setAttribute("style", "height: 100px");
				document.getElementById('grimbar-name').setAttribute("style", "height: 50px");
			} else if (window.pageYOffset <= 50 && window.innerWidth < 1400) {
				document.getElementById('return-up').setAttribute("style", "opacity: 0");
			} else if (window.pageYOffset <= 50) {
				document.getElementById('return-up').setAttribute("style", "opacity: 0");
				document.getElementById('grimbar-logo').setAttribute("style", "height: 150px");
				document.getElementById('nav-bar').setAttribute("style", "height: 175px");
				document.getElementById('grimbar-name').setAttribute("style", "height: 75px");
			}
		});
	}

	returnUp() {
		window.scroll(
			{
				top: 0,
				left: 0,
				behavior: 'smooth'
			}
		);
	}


	burgerMenu() {
		if (window.innerWidth <= 1000) {
			if (navMenuVisible === true) {
				document.getElementById('mobileNav').setAttribute("style", "display: none");
				navMenuVisible = false;
			} else if (navMenuVisible === false) {
				document.getElementById('mobileNav').setAttribute("style", "display: block");
				navMenuVisible = true;
			}
		}
	}

	renderButton(key: string, url: string) {
		return <NavButton key={key} buttonName={key} url={url} />
	}

	render() {
		var buttons = [
			this.renderButton('Home', '/'),
			this.renderButton('Games', '/games'),
			// this.renderButton('Web Development', '/webdevelopment'),
			this.renderButton('Team', '/team')
		];

		return (
			<div id="nav-bar">
				<div id="logo-container">
					<img id="grimbar-logo" src="./images/Grimbar_Interactvive_Logo_Image_Only.png" alt="Grimbar Interactive Logo"/>
					<img id="grimbar-name" src="./images/Grimbar_Interactvive_Logo_Name_Only.png" alt="Grimbar Interactive Logo"/>
				</div>
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

type NavButtonProps = {
	buttonName: string;
	url: string;
}

class NavButton extends React.Component<NavButtonProps> {
	onButtonPressed() {
		document.getElementById('mobileNav').setAttribute("style", "display: none");
		navMenuVisible = false;
	}

	render() {
		return (
			<Link key={this.props.buttonName} to={this.props.url} className="navbutton" onClick={() => this.onButtonPressed()}>{this.props.buttonName}</Link>
		);
	}
}
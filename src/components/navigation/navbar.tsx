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
			if (window.scrollY > 10) {
				document.getElementById('return-up').classList.add('return-up-visible');
				document.getElementById('nav-bar').classList.add('nav-bar-translucent-background');
			} else {
				document.getElementById('return-up').classList.remove('return-up-visible');
				document.getElementById('nav-bar').classList.remove('nav-bar-translucent-background');
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
		if (window.innerWidth <= 1200) {
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
			this.renderButton('Services', '/services'),
			this.renderButton('Projects', '/projects'),
			this.renderButton('About', '/about'),
			// this.renderButton('CGF 2022', '/quest'),
		];

		return (
			<div id="nav-bar">
				<div id="nav-bar-container">
					<Link to="/" id="logo-container" onClick={this.returnUp}>
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
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	}

	render() {
		return (
			<Link key={this.props.buttonName} to={this.props.url} className="navbutton" onClick={() => this.onButtonPressed()}>{this.props.buttonName.toUpperCase()}</Link>
		);
	}
}
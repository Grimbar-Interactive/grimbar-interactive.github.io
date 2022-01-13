import React from 'react';
import { ContentType } from '../content';

export class NavBar extends React.Component<ContentType, Function> {
	renderButton(type: ContentType) {
		return <NavButton key={type.id} contentType={type} clickAction={() => this.props.changeStateMethod(type)}/>;
	}
	
	render() {
		var buttons = [];
		for (let t of ContentType.Types) {
			buttons.push(this.renderButton(t));
		}
		return <nav>{buttons}</nav>;
	}
}

type NavButtonProps = {
	contentType: ContentType;
	clickAction: Function;
}

class NavButton extends React.Component<NavButtonProps> {
	onButtonPressed() {
		this.props.clickAction();
	}

	render() {
		return (
			<button onClick={() => this.onButtonPressed()}><h3>{this.props.contentType.displayName}</h3></button>
		);
	}
}
import React from 'react';
import { WebsiteType } from 'components';

type WebsiteInfoProps = {
	website: WebsiteType;
}

export default class WebsiteInfo extends React.Component<WebsiteInfoProps, {}> {
	render() {
		const website = this.props.website.mainURL !== undefined ? <p><a href={this.props.website.mainURL}>Website</a></p> : '';

		return (
			<div className='gameInfo'>
				<h2>{this.props.website.title}</h2>
				<h4>{this.props.website.client !== '' ? this.props.website.client : ''}</h4>
				<p>{this.props.website.description}</p>
				{website}
			</div>
		)
	}
}
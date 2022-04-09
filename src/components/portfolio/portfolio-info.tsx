import React from 'react';
import { platformInfo } from 'config';

type PortfolioInfoProps<PortfolioItemType> = {
	portfolioItem: PortfolioItemType;
}

export default abstract class PortfolioInfo<PortfolioInfoProps<PortfolioItemType>> extends React.Component<PortfolioInfoProps<PortfolioItemType>, {}> {
	render() {
		const website = this.props.portfolioItem.mainURL !== undefined ? <p><a href={this.props.portfolioItem.mainURL}>Website</a></p> : '';
		const platforms = this.props.portfolioItem.platforms.map(p => <a href={p.url} target="blank"><img src={platformInfo.get(p.platform).iconURL} alt={p.platform.toString()} /></a>);

		return (
			<div className='gameInfo'>
				<h2>{this.props.portfolioItem.title}</h2>
				<h4>{this.props.portfolioItem.client !== '' ? this.props.portfolioItem.client : ''}</h4>
				<p>{this.props.portfolioItem.description}</p>
				{website}
				{platforms}
			</div>
		)
	}
}
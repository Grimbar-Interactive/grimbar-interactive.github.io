import React from 'react';
import { GameType } from 'components';
import { platformInfo } from 'config';

type GameInfoProps = {
	game: GameType;
}

export default class GameInfo extends React.Component<GameInfoProps, {}> {
	render() {
		const website = this.props.game.mainURL !== undefined ? <p><a href={this.props.game.mainURL}>Website</a></p> : '';
		const platforms = this.props.game.platforms.map(p => <a href={p.url} target="blank"><img src={platformInfo.get(p.platform).iconURL} alt={p.platform.toString()} /></a>);

		return (
			<div className='gameInfo'>
				<h2>{this.props.game.title}</h2>
				<h4>{this.props.game.client !== '' ? this.props.game.client : ''}</h4>
				<p>{this.props.game.description}</p>
				{website}
				{platforms}
			</div>
		)
	}
}
import React from 'react';
import { GameType } from 'components'

type GameInfoProps = {
    game: GameType;
    section: string;
    rowNum: number;
}

export default class GameInfo extends React.Component <GameInfoProps, {}> {
    render() {
        return (
            <div className='gameInfo' >
                <h2>{this.props.game.title}{this.props.game.client}</h2>
                <p>{this.props.game.description}</p>
            </div>
        )
    }
}
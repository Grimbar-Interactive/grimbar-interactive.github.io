import React from 'react';
import { GameType } from 'components'


type GamePicProps = {
    i: number;
    eventHandler: Function;
    rowNum: number;
    game: GameType;
}

export default class GamePic extends React.Component <GamePicProps, {}> {
    render() {
        return (
            <img id={'image' + this.props.i} className={`image imageRow${this.props.rowNum}`} src={this.props.game.photoURL} alt={this.props.game.title} onClick={() => this.props.eventHandler(this.props.i)}/>
        )
    }
}
import React from 'react';
import { GameType } from 'components';

type GamePicProps = {
    i: number;
    selected: number | undefined;
    eventHandler: Function;
    game: GameType;
}

export default class GamePic extends React.Component <GamePicProps, {}> {
    render() {
        const imageClass = this.props.selected === undefined ? 'image' : this.props.i === this.props.selected ? 'imageFocus' : 'imageUnfocus';

        return (
            <div key={this.props.i}>
                <img className={imageClass} src={this.props.game.photoURL} alt={this.props.game.title} onClick={() => this.props.eventHandler(this.props.i)}/>
            </div>
        )
    }
}
import React from 'react';
import { GameType } from 'components'


type GamePicProps = {
    i: number;
    eventHandler: Function;
    rowNum: number;
    game: GameType;
    section: string;
}

export default class GamePic extends React.Component <GamePicProps, {}> {
    render() {
        const sectionRow = (this.props.section + this.props.rowNum.toString());
        console.log('sectionRow: ' + sectionRow);
        return (
            <div>
                <img id={sectionRow + 'pic' + this.props.i} className={`image`} src={this.props.game.photoURL} alt={this.props.game.title} onClick={() => this.props.eventHandler(this.props.i, sectionRow)}/>
            </div>
            
        )
    }
}
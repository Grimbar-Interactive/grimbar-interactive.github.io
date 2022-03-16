import React from "react";
import { GamePic, GameInfo } from 'components'

export type GameType = {
    title: string,
    client: string,
    description: string,
    photoURL: string,
}

type GamesSectionProps = {
    gamesArray: GameType[],
    header: string
}

type GamesSectionState = {
    index: number,
}



export default class GamesSection extends React.Component <GamesSectionProps, GamesSectionState> {
    constructor (props) {
        super(props);
        this.state = {
            index: 0,
        }
        this.showInfo = this.showInfo.bind(this);
        this.hideInfo = this.hideInfo.bind(this);
    }

    showInfo(x: number) {
        this.setState({index: x});

        Array.from(document.getElementsByClassName('mobileInfo')).forEach(element => element.setAttribute('style', 'display: none'));
        document.getElementById('info' + x).setAttribute('style', 'display:block');
         
    }

    hideInfo(e) {
        const classArray = ['image', 'imageFocus', 'imageUnfocus', 'gameInfo']
        if (!classArray.includes(e.target.className)) {
            Array.from(document.getElementsByClassName('imageFocus')).forEach(element => element.setAttribute('class', 'image'));
            Array.from(document.getElementsByClassName('imageUnfocus')).forEach(element => element.setAttribute('class', 'image'));
            Array.from(document.getElementsByClassName('mobileInfo')).forEach(element => element.setAttribute('class', 'image'));
            Array.from(document.getElementsByClassName('desktopInfo')).forEach(element => element.setAttribute('class', 'image'));
        } else {
            return;
        }      
    }

    renderRows() {
        const desktopArray = [];
        for (let i = 0; i < this.props.gamesArray.length; i += 3) {
            const row = this.props.gamesArray.slice(i, i + 3);
            const rowNum = (Math.round(i / 3));
            desktopArray.push(this.renderRow(row, rowNum));
        }
        return desktopArray;
    }

    renderRow(row: GameType[], rowNum: number) {
        const pics = row.map((g, i) => <GamePic key={g.title} i={i + (3 * (rowNum))} eventHandler={this.showInfo} rowNum={rowNum} game={row[i]} />)
        
        return (
            <div>
                <div className="gameLibrary">
                    {pics}
                </div> 
                <div id={this.props.header + rowNum} className={'desktopInfo'}> 
                    <GameInfo game={this.props.gamesArray[this.state.index]}/>
                </div>
            </div>
        )
    }

    renderGamesMobile() {
        const mobileArray = [];
        for (let i = 0; i < this.props.gamesArray.length; i ++) {
            mobileArray.push (
                <div>
                    <GamePic i={i} eventHandler={this.showInfo} rowNum={i} game={this.props.gamesArray[i]}/>
                    <GameInfo game={this.props.gamesArray[i]} />
                </div> 
            )
        }
        return mobileArray;
    }


    render() {
        return (
            <div>
                <div onClick={this.hideInfo} id="desktop"> 
                    <h1>{this.props.header}</h1>
                    {this.renderRows()}         
                </div>
                <div onClick={this.hideInfo} id="mobile">
                    <h1>{this.props.header}</h1>
                    {this.renderGamesMobile()}
                </div>
            </div>
        )
    }
}
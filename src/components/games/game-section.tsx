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
    screenSize: string,
}

export default class GamesSection extends React.Component <GamesSectionProps, GamesSectionState> {
    constructor (props) {
        super(props);
        this.state = {
            index: 0,
            screenSize: (window.innerWidth >= 786 ? 'desktop' : 'mobile'),
        }

        this.onWindowResize = this.onWindowResize.bind(this);
        this.showInfo = this.showInfo.bind(this);
        this.hideInfo = this.hideInfo.bind(this);

        // this.onWindowResize(window.innerWidth);

        window.addEventListener('resize', event => {
            this.onWindowResize(window.innerWidth);
        })
    }

    onWindowResize(width: number) {
        if (width >= 786) {
            this.setState({screenSize: 'desktop'});
        } else {
            this.setState({screenSize: 'mobile'})
        }
    }

    showInfo(x: number, sectionRow: string) {
        this.setState({index: x});
        console.log(sectionRow + 'info');

        // Display correct project info
        Array.from(document.getElementsByClassName('desktopInfo')).forEach(element => element.setAttribute('style', 'display: none'));
        Array.from(document.getElementsByClassName('mobileInfo')).forEach(element => element.setAttribute('style', 'display: none'));
        document.getElementById(sectionRow + 'info').setAttribute('style', 'display: block');
        
        // Update image classes
        // Array.from(document.getElementsByClassName('imageUnfocus')).forEach(element => element.setAttribute('class', 'image'));
        Array.from(document.getElementsByClassName('image')).forEach(element => element.setAttribute('class', 'imageUnfocus'));
        Array.from(document.getElementsByClassName('imageFocus')).forEach(element => element.setAttribute('class', 'imageUnfocus'));
        document.getElementById(sectionRow + 'pic' + x).setAttribute('class', `imageFocus`);

         
    }

    hideInfo(e) {
        const classArray = ['image', 'imageFocus', 'imageUnfocus', 'gameInfo']
        if (!classArray.includes(e.target.className)) {
            console.log('hideInfo test');
            Array.from(document.getElementsByClassName('imageFocus')).forEach(element => element.setAttribute('class', 'image'));
            Array.from(document.getElementsByClassName('imageUnfocus')).forEach(element => element.setAttribute('class', 'image'));
            Array.from(document.getElementsByClassName('mobileInfo')).forEach(element => element.setAttribute('style', 'display: none'));
            Array.from(document.getElementsByClassName('desktopInfo')).forEach(element => element.setAttribute('style', 'display: none'));
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
        const pics = row.map((g, i) => <GamePic key={g.title} i={i + (3 * (rowNum))} eventHandler={this.showInfo} rowNum={rowNum} game={row[i]} section={this.props.header} />)

        return (
            <div>
                <div className="gameLibrary">
                    {pics}
                </div> 
                <div id={this.props.header + rowNum + 'info'} className={'desktopInfo'}> 
                    <GameInfo game={this.props.gamesArray[this.state.index]} section={this.props.header} rowNum={rowNum}/>
                </div>
            </div>
        )
    }

    renderGamesMobile() {
        const mobileArray = [];
        for (let i = 0; i < this.props.gamesArray.length; i++) {
            mobileArray.push (
                <div>
                    <GamePic key={this.props.gamesArray[i].title + "mobilePic"} i={i} eventHandler={this.showInfo} rowNum={i} game={this.props.gamesArray[i]} section={this.props.header}/>
                    <div id={this.props.header + i + 'info'} className={'mobileInfo'}> 
                        <GameInfo key={this.props.gamesArray[i].title + "mobileInfo"} game={this.props.gamesArray[i]} section={this.props.header} rowNum={i}/>
                    </div>
                </div> 
            )
        }
        return mobileArray;
    }

    render() {
        if (this.state.screenSize === 'desktop') {
            return (
                <div onClick={this.hideInfo} id="desktop"> 
                    <h1>{this.props.header}</h1>
                    {this.renderRows()}         
                </div>
            )
        } else if (this.state.screenSize === 'mobile') {
            return (
                <div onClick={this.hideInfo} id="mobile">
                    <h1>{this.props.header}</h1>
                    {this.renderGamesMobile()}
                </div>
            )
        }
    }
}
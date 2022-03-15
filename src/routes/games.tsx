import React from 'react';
import { NavBar } from 'components';

type Game = {
    title: string,
    client: string,
    description: string,
    photoURL: string,
}

const games: Game[] = [{
    title: 'Battle Bees',
    client: ' - Eastedge Studios',
    description: "A bee themed battle royal game. laskdfjal; lksdfjalskjd  asldkjfdslfkaj alkdsaflkdjs asdlkfj jfdksalkssdjf  aldskfjsldk.",
    photoURL: './images/battle-bees.jpg'
},{
    title: 'Electioneering',
    client: ' - ??',
    description: 'A strategy game centering around election simulations. lksdjfsalkdj asldkflkj slkdfj aslkdfjslkdfj asldkjfl lsadkfjlsdk asdlkfj.',
    photoURL: './images/electioneering.jpg'
},{
    title: 'Skewerz',
    client: ' - Eastedge Studios',
    description: 'A snake-like arcade game featuring Anoying Orange IP and his friends. lskdafj lskdjfsld lskdfj lskdfjsld lksdfjk lskdfjl lskdjf.',
    photoURL: './images/skewerz.jpg'
},{
    title: 'Trove Ball',
    client: '',
    description: 'And endless runner game where you control the difficulty with the ability to purchase more ememies as you progres! lksdjfr lksd.',
    photoURL: './images/troveball.jpg'
},{
    title: 'Mayor! Mayor!',
    client: '',
    description: 'A dice rolling, city building, chace taking game.  lksdajf laskdjf lsdakjf lksdfj llkdj sadlkfj alskdfj lkjdsfj lkasdjfldk salkdfjd.',
    photoURL: './images/mayormayor.jpg'
},{
    title: 'Procrastityper',
    client: '',
    description: 'A typing game that will put you to the test.  You left your paper to the last minute, can you finish in time while staying on topic??',
    photoURL: './images/procrastityper.jpg'
}]

type GamePicProps = {
    i: number;
    eventHandler: Function;
}

class GamePic extends React.Component <GamePicProps, {}> {
    render() {
        return (
            <img id={'image' + this.props.i} className={"image"} src={games[this.props.i].photoURL} alt={games[this.props.i].title} onClick={() => this.props.eventHandler(this.props.i)}/>
        )
    }
}

type GameInfoProps = {
    i: number;
}

class GameInfo extends React.Component <GameInfoProps, {}> {
    render() {

        return (
            <div className='gameInfo'>
                <h2>{games[this.props.i].title}{games[this.props.i].client}</h2>
                <p>{games[this.props.i].description}</p>
            </div>
        )
    }
}

type GamesSectionProps = {
    rowStart: number,
    header: string
}

type GamesSectionState = {
    index: number,
    infoVisible: boolean,
    first: number,
    second: number,
    third: number
}

class GamesSection extends React.Component <GamesSectionProps, GamesSectionState> {
    constructor (props) {
        super(props);
        this.state = {
            index: this.props.rowStart,
            infoVisible: false,
            first: this.props.rowStart,
            second: this.props.rowStart + 1,
            third: this.props.rowStart + 2,
        }
        this.showInfo = this.showInfo.bind(this);
        this.hideInfo = this.hideInfo.bind(this);
    }

    showInfo(x: number) {
        this.setState({index: x});
        if (x <= 2) {
            document.getElementById('gameInfo0').setAttribute('style', 'display: block');
            document.getElementById('gameInfo3').setAttribute('style', 'display: none');
            document.getElementById('image3').setAttribute('class', 'image');
            document.getElementById('image4').setAttribute('class', 'image'); 
            document.getElementById('image5').setAttribute('class', 'image');  
        } else if (x <= 5) {
            document.getElementById('gameInfo3').setAttribute('style', 'display: block');
            document.getElementById('gameInfo0').setAttribute('style', 'display: none');
            document.getElementById('image0').setAttribute('class', 'image');
            document.getElementById('image1').setAttribute('class', 'image'); 
            document.getElementById('image2').setAttribute('class', 'image');  
        }
        
        
        if (x === this.state.first) {
            document.getElementById('image' + this.state.first).setAttribute('class', 'imageFocus');
            document.getElementById('image' + this.state.second).setAttribute('class', 'imageUnfocus'); 
            document.getElementById('image' + this.state.third).setAttribute('class', 'imageUnfocus');  
        } else if (x === this.state.second) {
            document.getElementById('image' + this.state.first).setAttribute('class', 'imageUnfocus');
            document.getElementById('image' + this.state.second).setAttribute('class', 'imageFocus'); 
            document.getElementById('image' + this.state.third).setAttribute('class', 'imageUnfocus'); 
        } else if (x === this.state.third) {
            document.getElementById('image' + this.state.first).setAttribute('class', 'imageUnfocus');
            document.getElementById('image' + this.state.second).setAttribute('class', 'imageUnfocus'); 
            document.getElementById('image' + this.state.third).setAttribute('class', 'imageFocus'); 
        }   
    }

    hideInfo(e) {
        const classArray = ['image', 'imageFocus', 'imageUnfocus', 'gameInfo']
        if (!classArray.includes(e.target.className)) {
            document.getElementById('gameInfo0').setAttribute('style', 'display: none');
            document.getElementById('gameInfo3').setAttribute('style', 'display: none');
            document.getElementById('image0').setAttribute('class', 'image');
            document.getElementById('image1').setAttribute('class', 'image'); 
            document.getElementById('image2').setAttribute('class', 'image'); 
            document.getElementById('image3').setAttribute('class', 'image');
            document.getElementById('image4').setAttribute('class', 'image'); 
            document.getElementById('image5').setAttribute('class', 'image');
        } else {
            return;
        }      
    }


    render() {
        console.log("gameInfo" + this.state.first);

        return (
            <div onClick={this.hideInfo}> 
                <h1>{this.props.header}</h1>
                <div className="gameLibrary">
                    <GamePic i={this.state.first} eventHandler={this.showInfo}/>
                    <GamePic i={this.state.second} eventHandler={this.showInfo}/>
                    <GamePic i={this.state.third} eventHandler={this.showInfo}/>
                </div>
                <div id={"gameInfo" + this.state.first}> 
                    <GameInfo i={this.state.index}/>
                </div>         
            </div>
            // <div className="underConstruction">
            //     <img src="./images/Grimbar_Interactvive_Logo_Image_Only.png"  alt="logo" />
            //     <h1>Under Construction...</h1>
            // </div>
        )
    }
}

export function Games() {
		return(
			<div>
				<NavBar/>
				<div className="games-page">
						<GamesSection rowStart={0} header='Client Work'/>
						<GamesSection rowStart={3} header='Personal Projects'/>
				</div>
			</div>
		)
}

import React from "react";
import { GamePic, GameInfo } from 'components';
import { Platform } from "config";

export const ROW_LENGTH = 3;

enum Size {
	Desktop = 'desktop',
	Mobile = 'mobile'
}

export type GamePlatform = {
	platform: Platform;
	url: string
}

type GamesSectionProps = {
	gamesArray: GameItemType[],
	header: string,
	selectedSection: string | undefined,
	selectedCallback: Function
}

type GamesSectionState = {
	selectedGameIndex: number | undefined,
	screenSize: Size,
}

export default class GamesSection extends React.Component<GamesSectionProps, GamesSectionState> {
	constructor(props) {
		super(props);
		this.state = {
			selectedGameIndex: undefined,
			screenSize: (window.innerWidth >= 786 ? Size.Desktop : Size.Mobile),
		}

		this.onWindowResize = this.onWindowResize.bind(this);
		this.showInfo = this.showInfo.bind(this);
		this.hideInfo = this.hideInfo.bind(this);

		window.addEventListener('resize', event => {
			this.onWindowResize(window.innerWidth);
		})
	}

	onWindowResize(width: number) {
		this.setState({ screenSize: width >= 786 ? Size.Desktop : Size.Mobile });
	}

	showInfo(x: number) {
		this.setState({ selectedGameIndex: x });
		this.props.selectedCallback(this.props.header);
	}

	hideInfo(e) {
		// Only hide if we clicked on an element that IS NOT specified below.
		const classArray = ['image', 'imageFocus', 'imageUnfocus', 'gameInfo'];
		if (classArray.includes(e.target.className)) return;
		this.setState({ selectedGameIndex: undefined });
		this.props.selectedCallback(undefined);
	}

	renderRows() {
		const desktopArray = [];
		for (let i = 0; i < this.props.gamesArray.length; i += ROW_LENGTH) {
			const row = this.props.gamesArray.slice(i, i + ROW_LENGTH);
			const rowNum = Math.floor(i / ROW_LENGTH);
			desktopArray.push(this.renderRow(row, rowNum));
		}
		return desktopArray;
	}

	renderRow(row: GameItemType[], rowNum: number) {
		const pics = row.map((g, i) => <GamePic key={g.title} i={ROW_LENGTH * rowNum + i} selected={this.props.selectedSection !== this.props.header ? undefined : this.state.selectedGameIndex} eventHandler={this.showInfo} game={row[i]} />)

		const selectedRow = Math.floor(this.state.selectedGameIndex / ROW_LENGTH);

		const info = this.props.selectedSection !== this.props.header || this.state.selectedGameIndex === undefined || selectedRow === undefined || selectedRow !== rowNum ? '' : (
			<GameInfo game={this.props.gamesArray[this.state.selectedGameIndex]} />
		);

		return (
			<div key={`${this.props.header}_${rowNum}`}>
				<div className="gameLibrary">
					{pics}
				</div>
				{info}
			</div>
		)
	}

	renderGamesMobile() {
		const mobileArray = [];

		for (let i = 0; i < this.props.gamesArray.length; i++) {
			const info = this.props.selectedSection !== this.props.header || this.state.selectedGameIndex === undefined || this.state.selectedGameIndex !== i ? '' : (
				<GameInfo game={this.props.gamesArray[i]} />
			);

			mobileArray.push(
				<div key={this.props.gamesArray[i].title}>
					<GamePic i={i} selected={this.props.selectedSection !== this.props.header ? undefined : this.state.selectedGameIndex} eventHandler={this.showInfo} game={this.props.gamesArray[i]} />
					{info}
				</div>
			)
		}
		return mobileArray;
	}

	render() {
		if (this.state.screenSize === Size.Desktop) {
			return (
				<div onClick={this.hideInfo} id={Size.Desktop}>
					<h1>{this.props.header}</h1>
					{this.renderRows()}
				</div>
			)
		} else if (this.state.screenSize === Size.Mobile) {
			return (
				<div onClick={this.hideInfo} id={Size.Mobile}>
					<h1>{this.props.header}</h1>
					{this.renderGamesMobile()}
				</div>
			)
		}
	}
}
import React from "react";
import { PortfolioItemType, PortfolioPic } from ".";

export const ROW_LENGTH = 3;

enum Size {
	Desktop = 'desktop',
	Mobile = 'mobile'
}

type PortfolioSectionProps<T extends keyof PortfolioItemType> = {
	portfolioItemsArray: T[],
	header: string,
	selectedSection: string | undefined,
	selectedCallback: Function
}

type PortfolioSectionState = {
	selectedItemIndex: number | undefined,
	screenSize: Size,
}

export default class PortfolioSection extends React.Component<PortfolioSectionProps, PortfolioSectionState> {
	constructor(props) {
		super(props);
		this.state = {
			selectedItemIndex: undefined,
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
		this.setState({ selectedItemIndex: x });
		this.props.selectedCallback(this.props.header);
	}

	hideInfo(e) {
		// Only hide if we clicked on an element that IS NOT specified below.
		const classArray = ['image', 'imageFocus', 'imageUnfocus', 'portfolioItemInfo'];
		if (classArray.includes(e.target.className)) return;
		this.setState({ selectedItemIndex: undefined });
		this.props.selectedCallback(undefined);
	}

	renderRows() {
		const desktopArray = [];
		for (let i = 0; i < this.props.portfolioItemsArray.length; i += ROW_LENGTH) {
			const row = this.props.portfolioItemsArray.slice(i, i + ROW_LENGTH);
			const rowNum = Math.floor(i / ROW_LENGTH);
			desktopArray.push(this.renderRow(row, rowNum));
		}
		return desktopArray;
	}

	renderRow(row: PortfolioItemType[], rowNum: number) {
		const pics = row.map((g, i) => <PortfolioPic key={g.title} i={ROW_LENGTH * rowNum + i} selected={this.props.selectedSection !== this.props.header ? undefined : this.state.selectedItemIndex} eventHandler={this.showInfo} portfolioItem={row[i]} />)

		const selectedRow = Math.floor(this.state.selectedItemIndex / ROW_LENGTH);

		const info = this.props.selectedSection !== this.props.header || this.state.selectedItemIndex === undefined || selectedRow === undefined || selectedRow !== rowNum ? '' : (
			<PortfolioInfo portfolioItem={this.props.portfolioItemsArray[this.state.selectedItemIndex]} />
		);

		return (
			<div key={`${this.props.header}_${rowNum}`}>
				<div className="portfolioItemLibrary">
					{pics}
				</div>
				{info}
			</div>
		)
	}

	renderPortfolioItemsMobile() {
		const mobileArray = [];

		for (let i = 0; i < this.props.portfolioItemsArray.length; i++) {
			const info = this.props.selectedSection !== this.props.header || this.state.selectedItemIndex === undefined || this.state.selectedItemIndex !== i ? '' : (
				<PortfolioInfo portfolioItem={this.props.portfolioItemsArray[i]} />
			);

			mobileArray.push(
				<div key={this.props.portfolioItemsArray[i].title}>
					<PortfolioPic i={i} selected={this.props.selectedSection !== this.props.header ? undefined : this.state.selectedItemIndex} eventHandler={this.showInfo} portfolioItem={this.props.portfolioItemsArray[i]} />
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
					{this.renderPortfolioItemsMobile()}
				</div>
			)
		}
	}
}
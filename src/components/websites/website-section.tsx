import React from "react";
import { WebsitePic, WebsiteInfo } from 'components';

export const ROW_LENGTH = 3;

enum Size {
	Desktop = 'desktop',
	Mobile = 'mobile'
}

export type WebsiteType = {
	title: string,
	client: string,
	description: string,
	mainURL: string | undefined,
	photoURL: string
}

type WebsitesSectionProps = {
	websitesArray: WebsiteType[],
	header: string,
	selectedSection: string | undefined,
	selectedCallback: Function
}

type WebsitesSectionState = {
	selectedWebsiteIndex: number | undefined,
	screenSize: Size,
}

export default class WebsitesSection extends React.Component<WebsitesSectionProps, WebsitesSectionState> {
	constructor(props) {
		super(props);
		this.state = {
			selectedWebsiteIndex: undefined,
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
		this.setState({ selectedWebsiteIndex: x });
		this.props.selectedCallback(this.props.header);
	}

	hideInfo(e) {
		// Only hide if we clicked on an element that IS NOT specified below.
		const classArray = ['image', 'imageFocus', 'imageUnfocus', 'websiteInfo'];
		if (classArray.includes(e.target.className)) return;
		this.setState({ selectedWebsiteIndex: undefined });
		this.props.selectedCallback(undefined);
	}

	renderRows() {
		const desktopArray = [];
		for (let i = 0; i < this.props.websitesArray.length; i += ROW_LENGTH) {
			const row = this.props.websitesArray.slice(i, i + ROW_LENGTH);
			const rowNum = Math.floor(i / ROW_LENGTH);
			desktopArray.push(this.renderRow(row, rowNum));
		}
		return desktopArray;
	}

	renderRow(row: WebsiteType[], rowNum: number) {
		const pics = row.map((g, i) => <WebsitePic key={g.title} i={ROW_LENGTH * rowNum + i} selected={this.props.selectedSection !== this.props.header ? undefined : this.state.selectedWebsiteIndex} eventHandler={this.showInfo} website={row[i]} />)

		const selectedRow = Math.floor(this.state.selectedWebsiteIndex / ROW_LENGTH);

		const info = this.props.selectedSection !== this.props.header || this.state.selectedWebsiteIndex === undefined || selectedRow === undefined || selectedRow !== rowNum ? '' : (
			<WebsiteInfo website={this.props.websitesArray[this.state.selectedWebsiteIndex]} />
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

	renderWebsitesMobile() {
		const mobileArray = [];

		for (let i = 0; i < this.props.websitesArray.length; i++) {
			const info = this.props.selectedSection !== this.props.header || this.state.selectedWebsiteIndex === undefined || this.state.selectedWebsiteIndex !== i ? '' : (
				<WebsiteInfo website={this.props.websitesArray[i]} />
			);

			mobileArray.push(
				<div key={this.props.websitesArray[i].title}>
					<WebsitePic i={i} selected={this.props.selectedSection !== this.props.header ? undefined : this.state.selectedWebsiteIndex} eventHandler={this.showInfo} website={this.props.websitesArray[i]} />
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
					{this.renderWebsitesMobile()}
				</div>
			)
		}
	}
}
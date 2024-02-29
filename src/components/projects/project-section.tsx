import React from "react";
import { ProjectPic, ProjectInfo } from 'components';
import { Platform } from "config";

export const ROW_LENGTH = 3;

enum Size {
	Desktop = 'desktop',
	Mobile = 'mobile'
}

export type ProjectPlatform = {
	platform: Platform;
	url: string
}

export type ProjectType = {
	title: string,
	client: string,
	description: string,
	mainURL: string | undefined,
	photoURL: string,
	platforms: ProjectPlatform[]
}

type ProjectsSectionProps = {
	projectsArray: ProjectType[],
	header: string,
	selectedSection: string | undefined,
	selectedCallback: Function
}

type ProjectsSectionState = {
	selectedProjectIndex: number | undefined,
	screenSize: Size,
}

export default class ProjectsSection extends React.Component<ProjectsSectionProps, ProjectsSectionState> {
	constructor(props) {
		super(props);
		this.state = {
			selectedProjectIndex: undefined,
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
		this.setState({ selectedProjectIndex: x });
		this.props.selectedCallback(this.props.header);
	}

	hideInfo(e) {
		// Only hide if we clicked on an element that IS NOT specified below.
		const classArray = ['image', 'imageUnfocus', 'projectInfo'];
		if (classArray.includes(e.target.className)) return;
		this.setState({ selectedProjectIndex: undefined });
		this.props.selectedCallback(undefined);
	}

	renderRows() {
		const desktopArray = [];
		for (let i = 0; i < this.props.projectsArray.length; i += ROW_LENGTH) {
			const row = this.props.projectsArray.slice(i, i + ROW_LENGTH);
			const rowNum = Math.floor(i / ROW_LENGTH);
			desktopArray.push(this.renderRow(row, rowNum));
		}
		return desktopArray;
	}

	renderRow(row: ProjectType[], rowNum: number) {
		const pics = row.map((g, i) => <ProjectPic key={g.title} i={ROW_LENGTH * rowNum + i} selected={this.props.selectedSection !== this.props.header ? undefined : this.state.selectedProjectIndex} eventHandler={this.showInfo} project={row[i]} />)

		const selectedRow = Math.floor(this.state.selectedProjectIndex / ROW_LENGTH);

		const info = this.props.selectedSection !== this.props.header || this.state.selectedProjectIndex === undefined || selectedRow === undefined || selectedRow !== rowNum ? '' : (
			<ProjectInfo project={this.props.projectsArray[this.state.selectedProjectIndex]} />
		);

		return (
			<div key={`${this.props.header}_${rowNum}`}>
				<div className="projectLibrary">
					{pics}
				</div>
				{info}
			</div>
		)
	}

	renderProjectsMobile() {
		const mobileArray = [];

		for (let i = 0; i < this.props.projectsArray.length; i++) {
			const info = this.props.selectedSection !== this.props.header || this.state.selectedProjectIndex === undefined || this.state.selectedProjectIndex !== i ? '' : (
				<ProjectInfo project={this.props.projectsArray[i]} />
			);

			mobileArray.push(
				<div key={this.props.projectsArray[i].title}>
					<ProjectPic i={i} selected={this.props.selectedSection !== this.props.header ? undefined : this.state.selectedProjectIndex} eventHandler={this.showInfo} project={this.props.projectsArray[i]} />
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
					<h1 className="bold">{this.props.header}</h1>
					{this.renderRows()}
				</div>
			)
		} else if (this.state.screenSize === Size.Mobile) {
			return (
				<div onClick={this.hideInfo} id={Size.Mobile}>
					<h1 className="bold">{this.props.header}</h1>
					{this.renderProjectsMobile()}
				</div>
			)
		}
	}
}
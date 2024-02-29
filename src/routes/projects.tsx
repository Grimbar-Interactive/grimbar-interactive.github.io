import React from 'react';
import { ProjectsSection } from 'components/projects';
import { games, tools, apps, websites } from 'config';
import 'styles/projects.css';
import 'styles/projects-mobile.css';

type ProjectsState = {
	selectedSection: string | undefined
}

export default class Projects extends React.Component<{}, ProjectsState> {
	constructor(props) {
		super(props);

		this.state = {
			selectedSection: undefined
		}

		this.sectionSelected = this.sectionSelected.bind(this);
	}

	sectionSelected(header: string | undefined) {
		this.setState({
			selectedSection: header
		});
	}

	render() {
		return (
			<div>
				<div className="projects-page">
					<ProjectsSection projectsArray={games} header='Games' selectedSection={this.state.selectedSection} selectedCallback={this.sectionSelected} />
					<ProjectsSection projectsArray={tools} header='Tools' selectedSection={this.state.selectedSection} selectedCallback={this.sectionSelected} />
					<ProjectsSection projectsArray={apps} header='Apps' selectedSection={this.state.selectedSection} selectedCallback={this.sectionSelected} />
					<ProjectsSection projectsArray={websites} header='Websites' selectedSection={this.state.selectedSection} selectedCallback={this.sectionSelected} />
				</div>
			</div>
		)
	}
}
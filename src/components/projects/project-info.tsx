import React from 'react';
import { ProjectType } from 'components';
import { platformInfo } from 'config';

type ProjectInfoProps = {
	project: ProjectType;
}

export default class ProjectInfo extends React.Component<ProjectInfoProps, {}> {
	render() {
		const platforms = this.props.project.platforms.map(p => <a href={p.url} target="blank"><img src={platformInfo.get(p.platform).iconURL} alt={p.platform.toString()} /></a>);
		const website = this.props.project.mainURL !== '' ? <p><a href={this.props.project.mainURL} target="_blank" rel="noreferrer">Website</a></p> : '';

		return (
			<div className='projectInfo'>
				<div className='projectHeader'>
					<h2>{this.props.project.title.toUpperCase()}</h2>
					<div>
						{platforms}
					</div>
				</div>
				<h4>{this.props.project.client !== '' ? `Client:  ${this.props.project.client}` : ''}</h4>
				<p>{this.props.project.description}</p>
				{website}
			</div>
		)
	}
}
import React from 'react';
import { ProjectType } from 'components';
import { platformInfo } from 'config';

type ProjectInfoProps = {
	project: ProjectType;
}

export default class ProjectInfo extends React.Component<ProjectInfoProps, {}> {
	render() {
		const website = this.props.project.mainURL !== '' ? <p><a href={this.props.project.mainURL}>Website</a></p> : '';
		const platforms = this.props.project.platforms.map(p => <a href={p.url} target="blank"><img src={platformInfo.get(p.platform).iconURL} alt={p.platform.toString()} /></a>);

		return (
			<div className='projectInfo'>
				<h2>{this.props.project.title}</h2>
				<h4>{this.props.project.client !== '' ? this.props.project.client : ''}</h4>
				<p>{this.props.project.description}</p>
				{website}
				{platforms}
			</div>
		)
	}
}
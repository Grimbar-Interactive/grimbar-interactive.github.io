import React from 'react';
import { TeamMemberType } from 'components/team';
import './business-card.css';

type BusinessCardProps = {
	member: TeamMemberType
}

export default class BusinessCard extends React.Component<BusinessCardProps, {}> {
	render() {
		const member = this.props.member;
		let linkedIn = (member.linkedIn !== '' ? <a href={member.linkedIn} target="blank"><img src="/images/linkedin-square.png" alt="linkedin" /></a> : '');
		let github = (member.github !== '' ? <a href={member.github} target="blank"><img src="/images/github-square.png" alt="github" /></a> : '');
		let twitter = (member.twitter !== '' ? <a href={member.twitter} target="blank"><img src="/images/twitter-square.png" alt="twitter" /></a> : '');
		let handle = (member.handle !== '' ? <p>@{this.props.member.handle}</p> : '');

		return (
			<div className="businessCard">
				<img className="headshot" src={member.photoURL} alt={member.name} />
				<div>
					<h1>{member.name}</h1>
					<h2>{member.position}</h2>
					<p id="teamEmail"><a href={`mailto:${member.email}`}>{member.email}</a></p>
					{linkedIn}
					{github}
					{twitter}
					{handle}
					<h3><a href="/">GrimbarInteractive.com</a></h3>
				</div>
			</div>
		)
	}
}
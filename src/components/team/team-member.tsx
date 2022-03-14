import React from "react";

export type TeamMemberType = {
  name: string,
  position: string,
  info1: string,
  info2: string,
  photoURL: string,
  photoClass: string,
  textClass: string,
  portfolio: string,
  email: string,
  linkedIn: string,
  twitter: string,
  github: string
}

type TeamMemberProps = {
  member: TeamMemberType,
  evenOdd: string
}

export default class TeamMember extends React.Component<TeamMemberProps, {}> {
  render() {
    const member = this.props.member;
    let linkedIn = (member.linkedIn !== '' ? <a href={member.linkedIn} target="blank"><img src="./images/linkedin-square.png" alt="linkedin" /></a> : '');
    let github = (member.github !== '' ? <a href={member.github} target="blank"><img src="./images/github-square.png" alt="github" /></a> : '');
    let twitter = (member.twitter !== '' ? <a href={member.twitter} target="blank"><img src="./images/twitter-square.png" alt="twitter" /></a> : '');

    return (
      <div className={this.props.evenOdd}>
        <div id='teamMemberInfo'>
          <h1>{member.name}</h1>
          <h2>{member.position}</h2>
          <p>{member.info1}</p>
          <p>{member.info2}</p>
          <p id="teamEmail">{member.email}</p>
          {/* <p>{member.portfolio}</p> */}
          {linkedIn}
          {github}
          {twitter}
        </div>
        <img className="headshot" src={member.photoURL} alt={member.name} />
      </div>
    )
  }
}
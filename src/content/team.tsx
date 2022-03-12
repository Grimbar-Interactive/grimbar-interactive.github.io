import React from 'react';

type teamMember = {
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

const team: teamMember[] = [{
        name: 'Jacob Dunbar',
        position: 'Unity Engineer & Consultant',
        info1: ('Jacob began working in Unity in 2014 working on passion projects and games.  In the last 8 years, his expertise has grown to include largers scale games with a variety of clients as well as non-games related user interface projects.'),
        info2: ('Since graduating from Purdue University in 2017 with a B.S. in Computer Science, Jacob has been freelancing as a Software Devloper and Unity Engineer.'),
        photoURL: './images/Jacob_Headshot.jpg', 
        photoClass: 'photo0',
        textClass: 'text0', 
        portfolio: 'jacobfdunbar.com',
        email: 'jacob@grimbar.dev',
        linkedIn: 'https://www.linkedin.com/in/jacob-dunbar-b6b5b2bb/',
        twitter: 'https://twitter.com/JacobFDunbar',
        github: 'https://github.com/jacobfdunbar'
    },{
        name: 'Amanda Grimm',
        position: 'Full-Stack Engineer & Consultant',
        info1: 'Amanda graduated from Purdue University in 2018 with a B.S.E in Multidisciplinary Engineering and a B.A. in Theatre Design and Production, and has always loved the finding the intersection between the technical and creative aspects of work.',
        info2: 'After a few years working in the themed entertainment buisness as a Technical Designer and Engineer, Amanda is excited to join the world of Web and Software Development.',
        photoURL: './images/Amanda_Headshot.jpg',
        photoClass: 'photo1',
        textClass: 'text1',
        portfolio: 'amandagrimm.com',
        email: 'amanda@grimbar.dev',
        linkedIn: 'https://www.linkedin.com/in/amanda-grimm-69228680/',
        twitter: '',
        github: 'https://github.com/amandagrimm95'
    },{
        name: 'Luna',
        position: 'Head of Office Morale',
        info1: 'Luna joined the team in 2018 and takes her role of maintaining office morale very seriously!',
        info2: 'From keeping a close eye on our monitors to make sure all of our work is up to par, to helping out with typing every once in a while, she is never too far from the action!',
        photoURL: './images/Luna_Headshot.jpg',
        photoClass: 'photo2',
        textClass: 'text2',
        portfolio: '',
        email: '',
        linkedIn: '',
        twitter: '',
        github: ''
    }    
    ]

type TeamMemberProps = {
    i: number,
    evenOdd: string
}

class TeamMember extends React.Component <TeamMemberProps, {}> {
    render() {
        let linkedIn = (team[this.props.i].linkedIn !== '' ? <a href={team[this.props.i].linkedIn} target="blank"><img src="./images/linkedin-square.png" alt="linkedin"/></a> : '');
        let github = (team[this.props.i].github !== '' ? <a href={team[this.props.i].github} target="blank"><img src="./images/github-square.png" alt="github"/></a> : '');
        let twitter = (team[this.props.i].twitter !== '' ? <a href={team[this.props.i].twitter} target="blank"><img src="./images/twitter-square.png" alt="twitter"/></a> : '');
        

        return (
            <div className={this.props.evenOdd}>
                <div id='teamMemberInfo'>
                    <h1>{team[this.props.i].name}</h1> 
                    <h2>{team[this.props.i].position}</h2>
                    <p>{team[this.props.i].info1}</p>
                    <p>{team[this.props.i].info2}</p>
                    <p id="teamEmail">{team[this.props.i].email}</p>
                    {/* <p>{team[this.props.i].portfolio}</p> */}
                    {linkedIn}
                    {github}
                    {twitter}
                </div>
                <img className="headshot" src={team[this.props.i].photoURL} alt={team[this.props.i].name} />
            </div>
        )
    }
}

export class Team extends React.Component {
    render() {
        return (
            <div className="team-page">
                <TeamMember i={0} evenOdd='teamEven'/>
                <TeamMember i={1} evenOdd='teamOdd'/>
                <TeamMember i={2} evenOdd='teamEven'/>
            </div>
            
        );
    }
}
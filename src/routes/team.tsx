import React from 'react';
import { NavBar, TeamMember } from 'components';
import { teamMembers } from 'config';
import "styles/team.css";
import "styles/team-mobile.css";

export function Team() {
  const members = teamMembers.map((m, i) => <TeamMember key={m.name} member={m} evenOdd={i % 2 === 0 ? 'teamEven' : 'teamOdd'}/>);

  return (
    <div>
		<NavBar/>
    <div className="team-page">
      {members}
    </div>
    </div>
  );
}
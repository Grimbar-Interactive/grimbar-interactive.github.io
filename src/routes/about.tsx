import React from 'react';
import { TeamMember } from 'components';
import { teamMembers } from 'config';
import "styles/about.css";
import "styles/about-mobile.css";

export function About() {
  const members = teamMembers.map((m, i) => <TeamMember key={m.name} member={m} evenOdd={i % 2 === 0 ? 'teamEven' : 'teamOdd'} />);

  return (
    <div>
      <div className="team-page">
        <div className="about-intro">
          <h2>A New Journey Begins...</h2>
          <p>Grimbar Interactive is a for hire software design, development, and consulting studio specializing in game, tool, app, and web development.  We utilize our diverse set of tools and experience to bring our clients' vision to life!</p>
        </div>
        {members}
      </div>
    </div>
  );
}
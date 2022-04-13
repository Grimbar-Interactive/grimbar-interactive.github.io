import React from 'react';
import { QuestStats, QuestStory } from 'components/quest';
import 'styles/quest.css';

type questState = {
    stats: number[],
}

export default class Quest extends React.Component <{}, questState> {
    constructor(props) {
        super(props);
        this.state = {
            stats: [0,0,0,0,0,0]
        }
        this.setStats = this.setStats.bind(this);
    }

    setStats(newStats: number[]) {
        this.setState({stats: newStats})
    }

    render() {    
        return (
            <div>
                <div className="questPage">
                    <h1>CGF 2022 Grimbar Quest!</h1>
                    <p>
                        Meet our friend Fred!  Today he will be going on a darring quest, but the problem is he is a bit indecisive... So it is up to you to help him out!
                        Each hour, Fred's next choice will be put to a vote.  So make sure you check back in over the course of the 
                        day to help Fred decide what to do next and get a recap of his journey so far!
                    </p>
                    <div className='questGrid'>
                        <img src='./images/quest/fred.jpg' alt='Fred - The Indecisive Adventurer'/>
                        <QuestStats stats={this.state.stats} eventHandeler={this.setStats}/>
                        <QuestStory stats={this.state.stats}/>
                    </div>
                </div>
            </div>
        );
    }
}

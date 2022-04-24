import React from 'react';
import { QuestStats, QuestStory } from 'components/quest';
import { serverURL } from 'config';
import 'styles/quest.css';
import 'styles/quest-mobile.css';

type questState = {
    stats: {},
    currentStep: string,
}



export default class Quest extends React.Component <{}, questState> {
    constructor(props) {
        super(props);
        this.state = {
            stats: {
                Strength: 0,
                Dextarity: 0,
                Constitution: 0,
                Wisdom: 0,
                Intelligence: 0,
                Charisma: 0,
            },
            currentStep: '',
            
        }

        this.checkStep = this.checkStep.bind(this);
        this.updateStats = this.updateStats.bind(this);
    }

    componentDidMount() {

        this.checkStep();
        this.updateStats();

    }

    checkStep() {
        fetch(`${serverURL}step`)
        .then(response => response.json())
        .then(data => {
            this.setState({currentStep: data.StepID})
            console.log('Current Step:' + data.StepID);
        });
    }

    updateStats() {
        fetch(`${serverURL}stats`)
        .then(response => response.json())
        .then(data => {
            const statsObject = data;
            this.setState({stats: statsObject})
        })
    }

    render() {    
        return (
            <div>
                <div className="questPage">
                    <h1>CGF 2022 -  Grimbar Quest!</h1>
                    <p>
                        Meet our friend Fred!  Today he will be going on a daring quest, but the problem is he is a bit indecisive... So it is up to you to help him out!
                        Each hour, Fred's next choice will be put to a vote.  So make sure you check back in over the course of the 
                        day to help Fred decide what to do next and get a recap of his journey so far!
                    </p>
                    <div className='questGrid'>
                        <img src='./images/quest/fred.jpg' alt='Fred - The Indecisive Adventurer'/>
                        <QuestStats stats={this.state.stats} eventHandeler={this.updateStats}/>
                        <QuestStory stats={this.state.stats} currentStep={this.state.currentStep}/>
                    </div>
                </div>
            </div>
        );
    }
}

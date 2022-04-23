import React from 'react';
import { serverURL } from 'config';

type questStoryProps = {
    stats: {}
    currentStep: string,
}

type questStoryState = {
    story: string[],
    score: number,
    lastStepVoted: string,
    currentStep: {
        stepID: number,
        prompt: string,
        buttonText0: string,
        buttonText1: string,
    },
    voteCount: {},
    tickTime: number
}

export default class QuestStory extends React.Component <questStoryProps, questStoryState> {
    constructor(props) {
        super(props);
        this.state = {
            story: [],
            score: 0,
            lastStepVoted: localStorage.getItem('last step voted') || '',
            currentStep: {
                stepID: 0,
                prompt: '',
                buttonText0: '',
                buttonText1: '',
            },
            voteCount: {
                "0": 0,
                "1": 0,
            },
            tickTime: 0
        };

        this.checkTime = this.checkTime.bind(this);
        this.updateVoteCount = this.updateVoteCount.bind(this);
        this.castVote = this.castVote.bind(this);
        this.retrieveStory = this.retrieveStory.bind(this);
        this.writeStory = this.writeStory.bind(this);
        this.renderOptions = this.renderOptions.bind(this);

        console.log('Last Step Voted: ' + this.state.lastStepVoted);
        
    }

    componentDidMount() {
        this.updateVoteCount();
        this.retrieveStory();
        this.retrieveTime();

        setInterval(this.checkTime, 10000);
    }

    checkTime() {
        if (Date.now() >= this.state.tickTime) {
            this.retrieveStory();
            this.updateVoteCount();
            this.retrieveTime();
        } 
    }

    retrieveTime() {
        fetch(`${serverURL}time`)
        .then(response => response.json())
        .then(data => {
            this.setState({tickTime: data});
        })
    }


    updateVoteCount() {
        fetch(`${serverURL}votes`)
        .then(response => response.json())
        .then(data => {
            this.setState({voteCount: data});
        })
    }

    retrieveStory() {
        fetch(`${serverURL}story`)
        .then(response => response.json())
        .then(data => {
            this.setState({story: data});
            console.log('Current Story Array: ' + JSON.stringify(data));
        }) 

        fetch(`${serverURL}story/step`)
        .then(response => response.json())
        .then(data => {
            this.setState({currentStep: data});
            console.log('Current Step Object: ' + JSON.stringify(data))
        }) 
    }

    castVote(choice: number) {
        let objectChoice = {
            choice: choice
        }
        fetch(`${serverURL}votes/cast`, {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(objectChoice),
        }).then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        }).then(response => {
            this.setState({lastStepVoted: this.state.currentStep.stepID.toString()});
            localStorage.setItem('last step voted', this.state.currentStep.stepID.toString());
            console.log('Last Step Voted Update: ' + this.state.lastStepVoted);
        }).then(response => {
            this.updateVoteCount();
        }).catch(error => {
            console.error(error);
        });

        
    }

    writeStory() {
        let storyArray = [];
        this.state.story.forEach(line => storyArray.push(<p key={storyArray.length}>{line}</p>));
        return storyArray;
    }

    renderOptions() {
        const voteCount: {} = this.state.voteCount;
        const voteCount0: number = voteCount["0"];
        const voteCount1: number = voteCount["1"];
        const totalVote:number = voteCount0 + voteCount1;
        if (Number(this.state.lastStepVoted) === this.state.currentStep.stepID) {
            return (
                <div>
                    <h3>Thanks for voting this hour! Check back next hour to find out what happens!</h3>
                    <table className="currentStandings">
                        <thead>
                            <tr>
                                <th colSpan={2}>Current Vote Standings</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>{this.state.currentStep.buttonText0}</th>
                                <th>{this.state.currentStep.buttonText1}</th>
                            </tr>
                            <tr>
                                <td>{Math.round(voteCount0 / totalVote * 100)}%</td>
                                <td>{Math.round(voteCount1 / totalVote * 100)}%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            )
        } else if (this.state.currentStep.buttonText0 !== '') {
            return (
                <div className="buttonContainer">
                    <h3>{this.state.currentStep.prompt}</h3>
                    <button onClick={() => this.castVote(0)}>{this.state.currentStep.buttonText0}</button>
                    <button onClick={() => this.castVote(1)}>{this.state.currentStep.buttonText1}</button>
                </div>
            )
        } else {
            return <h3>That is the end of our story today, thank you for joining Fred on his journey!</h3>
        }
    }

    render() {
        return (
            <div className='story'>
                <h2>{this.state.story.length > 0 ? 'Here is our story so far...' : ''}</h2>
                {this.writeStory()}
                {this.renderOptions()}
                {/* <h2>Total Points: {this.state.score}</h2> */}
            </div>
        );
    }
}

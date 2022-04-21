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
    voteCount: {}
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
            }
        };

        this.updateVoteCount = this.updateVoteCount.bind(this);
        this.castVote = this.castVote.bind(this);
        this.retrieveStory = this.retrieveStory.bind(this);
        this.writeStory = this.writeStory.bind(this);
        this.renderOptions = this.renderOptions.bind(this);
    }

    componentDidMount() {
        this.updateVoteCount();
        this.retrieveStory();
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
            console.log('Current Story Array: ' + data);
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
            this.setState({lastStepVoted: this.props.currentStep});
            localStorage.setItem('last step voted', this.props.currentStep);
        }).then(response => {
            this.updateVoteCount();
        }).catch(error => {
            console.error(error);
        });

        
    }

    // determineWinner(winnerNum) {
    //     let storyStep = storyOptions[this.state.story.length];
    //     let trait = storyStep['trait' + winnerNum];
    //     console.log(trait);
    //     let storyResult = '';
    //     let pointResult = 0;
    //     if (this.props.stats[trait] >= 10) {
    //         storyResult = storyStep['pass' + winnerNum];
    //         pointResult = storyStep.points;
    //     } else {
    //         storyResult = storyStep['fail' + winnerNum];
    //         pointResult = -storyStep.points;
    //     }   
    //     this.appendStory(storyResult);
    //     this.setState({score: this.state.score + pointResult})
    // }

    // appendStory(addition: string) {
    //     let currentStory: string[] = this.state.story;
    //     currentStory.push(addition);
    //     this.setState({ story: currentStory })
    // }

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
                    <table>
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
                <h2>Total Points: {this.state.score}</h2>
            </div>
        );
    }
}

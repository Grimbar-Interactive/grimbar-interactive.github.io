import React from 'react';
import { storyOptions } from 'config';

type questStoryProps = {
    stats: {}
}

type questStoryState = {
    story: string[],
    score: number,
}

export default class QuestStory extends React.Component <questStoryProps, questStoryState> {
    constructor(props) {
        super(props);
        this.state = {
            story: [],
            score: 0,
        };
        this.appendStory = this.appendStory.bind(this);
        this.writeStory = this.writeStory.bind(this);
        this.renderOptions = this.renderOptions.bind(this);
    }

    determineVote(winnerNum) {
        let storyStep = storyOptions[this.state.story.length];
        let trait = storyStep['trait' + winnerNum];
        console.log(trait);
        let storyResult = '';
        let pointResult = 0;
        if (this.props.stats[trait] >= 10) {
            storyResult = storyStep['pass' + winnerNum];
            pointResult = storyStep.points;
        } else {
            storyResult = storyStep['fail' + winnerNum];
            pointResult = -storyStep.points;
        }   
        this.appendStory(storyResult);
        this.setState({score: this.state.score + pointResult})
    }

    appendStory(addition: string) {
        let currentStory: string[] = this.state.story;
        currentStory.push(addition);
        this.setState({ story: currentStory })
    }

    writeStory() {
        let storyArray = [];
        this.state.story.forEach(line => storyArray.push(<p key={storyArray.length}>{line}</p>));
        return storyArray;
    }

    renderOptions() {
        if (this.state.story.length < storyOptions.length) {
            return (
                <div className="buttonContainer">
                    <h3>{storyOptions[this.state.story.length].prompt}</h3>
                    <button onClick={() => this.determineVote(1)}>{storyOptions[this.state.story.length].buttonText1}</button>
                    <button onClick={() => this.determineVote(2)}>{storyOptions[this.state.story.length].buttonText2}</button>
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

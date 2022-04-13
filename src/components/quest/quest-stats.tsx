import React from 'react';

type questStatsProp = {
    stats: number[],
    eventHandeler: Function,
}




export default class QuestStats extends React.Component <questStatsProp, {}> {
    constructor(props) {
        super(props);
        this.randomizeStats = this.randomizeStats.bind(this);
    }

    componentDidMount() {
        this.randomizeStats();
    }

    randomizeStats() {
        let newStats = [];
        for(let i = 0; i < this.props.stats.length; i++) {
            newStats.push(Math.floor(Math.random() * 16))
        };
        this.props.eventHandeler(newStats);
        
    }

    render() {

        return (
            <div>
                <table>
                    <caption>These are Fred's stats, they will help determine the results his quest.  Stop by our booth to adjust these values and help ensure Fred's success!</caption>
                    <tbody>
                        <tr>
                            <th>Stat</th>
                            <td>Strength</td>
                            <td>Dexterity</td>
                            <td>Constitution</td>
                            <td>Wisdom</td>
                            <td>Intelegence</td>
                            <td>Charisma</td>
                        </tr>
                        <tr>
                            <th>Value</th>
                            <td>{this.props.stats[0]}</td>
                            <td>{this.props.stats[1]}</td>
                            <td>{this.props.stats[2]}</td>
                            <td>{this.props.stats[3]}</td>
                            <td>{this.props.stats[4]}</td>
                            <td>{this.props.stats[5]}</td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={this.randomizeStats}>Click here to randomize stats!</button>
            </div>
        );
    }
}

import React from 'react';
import validator from 'validator';


type questStatsProp = {
    stats: {},
    eventHandler: Function,
}

type questStatsState = {
    emailError: string,
    emailThanks: string,
    emailSubmitted: boolean,
    statsSubmitted: boolean,
    statsChange: {},
    changeCount: number,
    startingArray: any[],
    newStats: {},
    statError: string,
}


export default class QuestStats extends React.Component <questStatsProp, questStatsState> {
    constructor(props) {
        super(props);
        this.state = {
            emailError: '',
            emailThanks: '',
            emailSubmitted: false,
            statsSubmitted: false,
            statsChange: {
                Strength: 0,
                Dextarity: 0,
                Constitution: 0,
                Wisdom: 0,
                Intellegence: 0,
                Charisma: 0
            },
            changeCount: 0,
            startingArray: [],
            newStats: this.props.stats,
            statError: '',
        }
        this.emailSubmit = this.emailSubmit.bind(this);
        this.modifyStat = this.modifyStat.bind(this);
        this.renderOptions = this.renderOptions.bind(this);
        this.renderStats = this.renderStats.bind(this);
        this.statSubmit = this.statSubmit.bind(this);

        Object.values(this.props.stats).forEach((x, i) => this.state.startingArray.push(<td key={i}>{x}</td>))
    }


    emailSubmit() {
        var email = (document.getElementById('email') as HTMLInputElement).value;
        if (validator.isEmail(email)) {
            this.setState({
                emailError: '',
                emailSubmitted: true,
                emailThanks: 'Thank you for joining our email list!'
            })
        } else {
            this.setState({
                emailError: 'Please enter a valid email'
            })
        }
    }

    modifyStat(statName: string, value: number) {
        let newStats = this.props.stats;
        let statsChange = this.state.statsChange;
        let changeCount = this.state.changeCount;
        if (statName in statsChange) {
            statsChange[statName] += value;
        } else {
            statsChange[statName] = value;
        }
        
        if (statsChange[statName] === 0) {
            delete statsChange[statName];
        }

        changeCount ++;

        newStats[statName] += value;

        this.setState({
            statsChange: statsChange,
            changeCount: changeCount,
            newStats: newStats,
        })   
    }

    statSubmit() {
        const sumChange = Object.values(this.state.statsChange).reduce((a: number, b: number) => a + b);
        if (sumChange === 0 && this.state.changeCount >= 2) {
            this.setState({statsSubmitted: true});
        } else {
            this.setState({statError: "You aren't done editing the stats yet! Make sure you have increased and decreased the stats evenly."})
        }
        
        this.props.eventHandler(this.state.newStats);
    } 

    renderStats(newStats) {
        let statsArray = [];
        let changeArray = Object.values(this.state.statsChange);
        let incDis: boolean = (changeArray.filter(x => x > 0).length > 1 || changeArray.includes(2) ? true : false);
        let decDis: boolean = (changeArray.filter(x => x < 0).length > 1 || changeArray.includes(-2)? true : false);
        if (this.state.emailSubmitted && !this.state.statsSubmitted) {
            Object.keys(newStats).forEach((key) => statsArray.push(<td key={key}><button onClick={() => this.modifyStat(key, -1)} className="decStats" disabled={decDis}>-</button>{newStats[key]}<button onClick={() => this.modifyStat(key, 1)} className="incStats" disabled={incDis}>+</button></td>))
        } else {
            Object.keys(newStats).forEach((key) => statsArray.push(<td key={key}>{newStats[key]}</td>))
        }

        if (this.state.emailSubmitted && !this.state.statsSubmitted) {
            return (
                <tbody>
                    <tr>
                        <th>Original Values</th>
                        {this.state.startingArray}
                    </tr>
                    <tr>
                        <th>New Values</th>
                        {statsArray}
                    </tr>
                </tbody>
            )
        } else {
            return (
                <tbody>
                    <tr>
                        <th>Value</th>
                        {statsArray}
                    </tr>
                </tbody>
                
            )
        }
        
    }


    renderOptions() {
        if (this.state.emailSubmitted === false) {
            return (
                <div className='buttonContainer'>
                    <input type="email" id="email" placeholder="Enter Your Email Here" size={40} required></input>
                    <button type="submit" onClick={this.emailSubmit}>Join Our Email List</button>
                    <p className="error">{this.state.emailError}</p>
                </div>
            )
        } else if (this.state.emailSubmitted === true && this.state.statsSubmitted === false){
            return (
                <div>
                    <p id="emailThanks">Thank you for joining our email list! You can now use the buttons above to realocate two of Freds points. Once you are done, please hit the submit button below.</p>
                    <button type="submit" onClick={() => this.statSubmit()} className="submitStat">Submit Your Stat Adjustments</button>
                    <p className="error">{this.state.statError}</p>
                </div>
                
            )
        } else {
            return (
                <div>
                    <p id="emailThanks">Great Job! Now make sure to vote every hour on Fred's next move.</p>
                </div>
            )
        }
    }
  

    render() {

        return (
            <div>
                <table>
                    <caption>These are Fred's stats, they will help determine the results his quest.  Join our email list below adjust these values and help ensure Fred's success!</caption>
                    <thead>
                        <tr>
                            <th>Stat</th>
                            <td>Strength</td>
                            <td>Dexterity</td>
                            <td>Constitution</td>
                            <td>Wisdom</td>
                            <td>Intelegence</td>
                            <td>Charisma</td>
                        </tr>
                    </thead>
                    {this.renderStats(this.state.newStats)}
                </table>
                {this.renderOptions()}
            </div>
        );
    }
}

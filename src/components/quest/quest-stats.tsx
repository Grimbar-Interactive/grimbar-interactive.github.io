import React from 'react';
import validator from 'validator';
import { serverURL } from 'config';


type questStatsProp = {
    stats: {},
    eventHandeler: Function,
}

type questStatsState = {
    emailError: string,
    submitted: string,
}


export default class QuestStats extends React.Component <questStatsProp, questStatsState> {
    constructor(props) {
        super(props);
        this.state = {
            emailError: '',
            submitted: localStorage.getItem('email') || '',
        }
        this.emailSubmit = this.emailSubmit.bind(this);
        this.renderOptions = this.renderOptions.bind(this);
        this.renderStats = this.renderStats.bind(this);


    }


    emailSubmit() {
        var email = (document.getElementById('email') as HTMLInputElement).value;
        var stat = (document.getElementById('stat') as HTMLInputElement).value;
        var body: {} = {
            email: email,
            statToIncrease: stat,
        }
        if (validator.isEmail(email)) {
            this.setState({
                emailError: '',
                submitted: email,
            })
            //THIS IS WHERE IT WILL POST 
            fetch(`${serverURL}stats/increase`, {
                method: 'post',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            }).then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            }).then(response => {
                this.props.eventHandeler();
            }).catch(error => {
                console.error(error);
            });
            console.log(body);

        } else {
            this.setState({
                emailError: 'Please enter a valid email'
            })
        }

        localStorage.setItem("email", email);
    }


    renderStats() {
        let statsArray = [];
        Object.keys(this.props.stats).forEach((key) => statsArray.push(<td key={key}>{this.props.stats[key]}</td>));

        return (
                <tr>
                    <th>Value</th>
                    {statsArray}
                </tr>
        )
    }
        



    renderOptions() {
        if (this.state.submitted === '') {
            return (
                <div className='buttonContainer'>
                    <div className="inputContainer">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" required></input>
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="stat">Choose one of Fred's stats to increase:</label>
                        <select name="stat" id="stat">
                            <option value="Strength">Strength</option>
                            <option value="Dexterity">Dexterity</option>
                            <option value="Constitution">Constitution</option>
                            <option value="Wisdom">Wisdom</option>
                            <option value="Intelligence">Intelligence</option>
                            <option value="Charisma">Charisma</option>
                        </select>
                    </div>
                    <button type="submit" onClick={this.emailSubmit}>Join Our Email List</button>
                    <p className="error">{this.state.emailError}</p>
                </div>
            )
        } else {
            return (
                <div>
                    <p id="emailThanks">Thank you for joining our email list and helping Fred out! Make sure you vote below and come back every hour to help Fred with his next choice!</p>
                </div>
                
            )
        } 
    }
  

    render() {

        return (
            <div>
                <h2 className='caption'>These are Fred's stats, they will help determine the results his quest.  Join our email list below adjust these values and help ensure Fred's success!</h2>
                <table className='currentStats'>
                    <tbody>
                        <tr>
                            <th>Stat</th>
                            <td>Strength</td>
                            <td>Dexterity</td>
                            <td>Constitution</td>
                            <td>Wisdom</td>
                            <td>Intelligence</td>
                            <td>Charisma</td>
                        </tr>
                    {this.renderStats()}
                    </tbody>
                </table>
                {this.renderOptions()}
            </div>
        );
    }
}

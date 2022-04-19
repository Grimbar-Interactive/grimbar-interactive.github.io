import React from 'react';
import validator from 'validator';


type questStatsProp = {
    stats: {},
    eventHandler: Function,
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
        if (validator.isEmail(email)) {
            this.setState({
                emailError: '',
                submitted: email,
            })
            //THIS IS WHERE IT WILL POST 
        } else {
            this.setState({
                emailError: ''
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
                        <input type="email" id="email" size={40} required></input>
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="stat">Choose one of Fred's stats to increase:</label>
                        <select name="stat" id="stat">
                            <option value="strength">Strength</option>
                            <option value="dexterity">Dexterity</option>
                            <option value="constitution">Constitution</option>
                            <option value="wisdom">Wisdom</option>
                            <option value="intelegence">Intelegence</option>
                            <option value="charisma">Charisma</option>
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
                <table>
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
                    {this.renderStats()}
                    </tbody>
                </table>
                {this.renderOptions()}
            </div>
        );
    }
}

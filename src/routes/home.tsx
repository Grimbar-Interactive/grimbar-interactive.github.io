import React from 'react';
import validator from 'validator';
import 'styles/home.css';
import 'styles/home-mobile.css';
import { Link } from 'react-router-dom';
import { serverURL } from 'config';

type homeState = {
	emailError: string,
	submitted: string,
}

export class Home extends React.Component <{}, homeState> {
	constructor(props) {
		super(props);
		this.state = {
			emailError: '',
			submitted: localStorage.getItem('email') || '',
		}

		this.emailSubmit = this.emailSubmit.bind(this);
		this.renderEmail = this.renderEmail.bind(this);
	}

	emailSubmit() {
		const statsArray = ['Strength', 'Dexterity', 'Constitution', 'Wisdom', 'Intelligence', 'Charisma'];
		const index = Math.floor(Math.random() * 6);
		var email = (document.getElementById('email') as HTMLInputElement).value;
        var body: {} = {
            email: email,
            statToIncrease: statsArray[index],
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
            }).catch(error => {
                console.error(error);
            });
        } else {
            this.setState({
                emailError: 'Please enter a valid email'
            })
        }

        localStorage.setItem("email", email);
    }


	renderEmail() {
		if (this.state.submitted === '') {
			return(
				<div id="emailForm"> 
					<h2>Join our Email List!</h2>
					<p>
						Enter your email below to stay up to date one any news or announcements from us! 
					</p>
					<div className="inputContainer">
						<label htmlFor="email">Email:</label>
						<input type="email" id="email" required></input>
					</div>
					<button type="submit" onClick={this.emailSubmit}>Submit</button>
					<p className="error">{this.state.emailError}</p>
				</div>
			)
		// } else {
		// 	return (
		// 		<div id="emailForm">
		// 			<h2>Thank you for joining our email list!</h2>
		// 			<p>
		// 				Keep an eye out for exciting announcements and updates.
		// 			</p>
		// 		</div>
		// 	)
		}
	}

	render() {
		return (
			<div className="home-page" >
				<div className="text-box">
					<h1>A New Journey Begins...</h1>
					<h2>Site under construction.  Check back soon to see our new and improved website!</h2>
					{/* <h2>
						Grimbar Interactive is a software development and consulting
						studio specializing in game and web development. We utilize 
						our diverse set of tools and experience to bring our clients' visions to life!
					</h2> */}
				</div>
				{/* <div className="infoContainter">
					<div id="cgf">
						<h2>Welcome to CGF 2022!</h2>
						<p>
							We invite you to join us on a "create your own adventure" today, we are calling it <span className='bold'>Grimbar Quest</span>.
							Click the link below or visit our booth to learn more about it!
						</p>
						<Link to="/quest"><button>Grimbar Quest</button></Link>
					</div>
					{this.renderEmail()}
				</div> */}
			</div>
		);
	}
}
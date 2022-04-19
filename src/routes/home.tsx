import React from 'react';
import validator from 'validator';
import 'styles/home.css';
import 'styles/home-mobile.css';
import { Link } from 'react-router-dom';

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


	renderEmail() {
		if (this.state.submitted === '') {
			return(
				<div id="emailForm"> 
					<h2>Join our Email List!</h2>
					<p>
						Enter your email below to stay up to date one any news or announcements from us! 
						<span className='bold'> OR</span> if you are planning on checking out <span className='bold'>Grimbar Quest</span>, enter your
						email there to earn an extra way to help our adventurer!
					</p>
					<div className="inputContainer">
						<label htmlFor="email">Email:</label>
						<input type="email" id="email" required></input>
					</div>
					<button type="submit" onClick={this.emailSubmit}>Join Our Email List</button>
					<p className="error">{this.state.emailError}</p>
				</div>
			)
		} else {
			return (
				<div id="emailForm">
					<h2>Thank you for joining our email list!</h2>
					<p>
						Keep an eye out for exciting announcements and updates.  And if you haven't already, 
						make sure to check out our booth as well as our GCF "create your own adventure" <span className='bold'>Grimbar Quest</span>.
					</p>
				</div>
			)
		}
	}

	render() {
		return (
			<div className="home-page" >
				<div className="text-box">
					<h1>A New Journey Begins...</h1>
					<p>
						Grimbar Interactive is a software development and consulting
						studio specializing in game and web development. We utilize 
						our diverse set of tools and experience to bring our clients' visions to life!
					</p>
				</div>
				<div className="infoContainter">
					<div id="cgf">
						<h2>Welcome to CGF 2022!</h2>
						<p>
							We invite you to join us on a "create your own adventure" today, we are calling it <span className='bold'>Grimbar Quest</span>.
							Click the link below or visit our booth to learn more about it!
						</p>
						<Link to="/quest"><button>Grimbar Quest</button></Link>
					</div>
					{this.renderEmail()}
				</div>
			</div>
		);
	}
}
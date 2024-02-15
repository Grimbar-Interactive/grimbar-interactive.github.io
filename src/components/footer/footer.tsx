import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import './footer-mobile.css';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <p>Grimbar Interactive LLC est. 2022</p>
                <Link className="footer-link" key="Privacy Policy" to="/privacypolicy">Privacy Policy</Link>
                <div className="image-container">
                    <a href="https://www.linkedin.com/company/grimbar-interactive/" target="blank"><img src="./images/linkedin-square.png" alt="linkedin"/></a>   
                    <a href="https://github.com/Grimbar-Interactive" target="blank"><img src="./images/github-square.png" alt="github"/></a>   
                    <a href="https://twitter.com/GrimbarInt" target="blank"><img src="./images/twitter-square.png" alt="twitter"/></a>
                </div>
            </div>
        )
    }
}
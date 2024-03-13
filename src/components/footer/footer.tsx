import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import './footer-mobile.css';

export default class Footer extends React.Component {

    returnUp() {
		window.scroll(
			{
				top: 0,
				left: 0,
				behavior: 'smooth'
			}
		);
	}

    render() {
        return (
            <div className="footer">
                <div className='site-map-container'>
                    <p><b><u>Site Map</u></b></p>
                    <div className='site-map'>
                        <Link to='/' onClick={this.returnUp}><p>Home</p></Link>
                        <Link to='/services' onClick={this.returnUp}><p>Services</p></Link>
                        <Link to='/projects' onClick={this.returnUp}><p>Projects</p></Link>
                        <Link to='/about' onClick={this.returnUp}><p>About</p></Link>
                        {/* <Link to='/business-card/jacob-dunbar' onClick={this.returnUp}><p>Jacob Dunbar</p></Link>
                        <Link to='/business-card/amanda-dunbar' onClick={this.returnUp}><p>Amanda Dunbar</p></Link> */}
                        <Link to='/gdc-calendar-tool' onClick={this.returnUp}><p>GDC Calendar Tool</p></Link>
                        {/* <Link to='/gdc-calendar-tool/privacy-policy' onClick={this.returnUp}><p>Privacy Policy</p></Link> */}
                    </div>
                </div>
                <p>Grimbar Interactive LLC est. 2022</p>
                <div className="image-container">
                    <a href="https://www.linkedin.com/company/grimbar-interactive/" target="blank"><img src="./images/linkedin-square.png" alt="linkedin"/></a>   
                    <a href="https://github.com/Grimbar-Interactive" target="blank"><img src="./images/github-square.png" alt="github"/></a>   
                    <a href="https://twitter.com/GrimbarInt" target="blank"><img src="./images/twitter-square.png" alt="twitter"/></a>
                </div>
            </div>
        )
    }
}
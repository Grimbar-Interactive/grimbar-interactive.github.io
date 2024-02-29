import React from 'react';
import 'styles/home.css';
import 'styles/home-mobile.css';


const changingTitles = ['GAME', 'GAME', 'GAME', 'GAME', 'GAME', 'GAME', 'GAM', 'GA', 'G', '', 'W', 'WE', 'WEB', 'WEB', 'WEB', 'WEB', 'WEB', 'WEB', 'WE', 'W', '', 'A', 'AP', 'APP', 'APP', 'APP', 'APP', 'APP', 'AP', 'A', '', 'G', 'GA', 'GAM'];
let displayIndex = 0;
let heroTitle = document.getElementById('changing-title');

function titleAnimation() {
	setInterval(() => {
		if (heroTitle) {
			heroTitle.innerHTML = changingTitles[displayIndex];
		}

		displayIndex ++;
		
		if (displayIndex >= changingTitles.length) {
			displayIndex = 0;
		}
	}, 300);
}


export function Home() {

	return (
		<div className="home-page" >
			<div className="hero">
				<div className="text-box">
					<h1 id="changing-title" className="bold">GAME</h1>
					<h2>DEVELOPMENT & DESIGN<br/>STUDIO FOR HIRE</h2>
					<br/><br/>
					<h3>Do you have an idea?<br/>Let us help you make it a reality!</h3>	
				</div>
				<img id="large-logo" alt="Grimbar Interactive" src="./images/Grimbar_Interactive_Logo_Image_Only.png"/>
			</div>
			<div className="feature-banner dark" style={{backgroundImage: 'url("./images/games/turboTrials.png")'}}>
				<div className="feature-banner-contents">
					<h2>Turbo Trials</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
						ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
						eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
						deserunt mollit anim id est laborum.
					</p>
					<div>
						<button className="button">View on Steam</button>
						<button className="button">Join our Discord</button>
					</div>
				</div>	
			</div>
			<div className="card-banner">
				<div className="card">
					<img alt="Battle Bees" src="./images/games/battle-bees.jpg"/>
					<h3>Games</h3>
					<p>We develop games in Unity blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.</p>
				</div>
				<div className="card">
					<img alt="Pretzel Hunt" src="./images/pretzel-hunt.png" className="png"/>
					<h3>Apps</h3>
					<p>Have an app idea?  We can help you with any step of the design and development process from initial UI/UX design to publishing your app!</p>
				</div>
				<div className="card">
					<img alt="CBL Consulting" src="./images/websites/committedtobettering.jpg"/>
					<h3>Websites</h3>
					<p>Does your current website need a refresh?  Does your new business need a website?  Either way we are ready to help you design and build the perfect website for your needs!</p>
				</div>

			</div>
			<div className="feature-banner light" style={{backgroundImage: 'url("./images/StitchSculptorBackground.png")'}}>
				<div className="feature-banner-contents">
					<h2>Stitch Sculptor</h2>
					<p>
					Stitch Sculptor app is a tool for crocheters to create, edit, and share patterns with the assistance of immediate visual feedback.  
					Designing or editing a crochet pattern can be a long process, with a lot of guess work and trial and error.  
					This app provides a visual simulation of the finished product that adjusts in real time as you edit the pattern, allowing the 
					user to see how adjustments will effect the overall project without needing to physically crochet the different options and 
					saving significant time in the pattern design and editing process.  It also includes a variety of other features that will help 
					improve the process for crocheters at every level!
					<br/><br/>
					This project is currently in progress, continue to check back for updates!
					</p>
					
					<div>
						{/* <button className="button">View on Steam</button>
						<button className="button">Join our Discord</button> */}
					</div>
				</div>
				<img alt="Stitch Sculptor" src="./images/apps/stitchSculptor.png"/>
			</div>

		</div>
	);
}
import React, { useEffect, useRef, useState } from 'react';
import 'styles/home.css';
import 'styles/home-mobile.css';


const carouselText = ["GAMES", "TOOLS", "APPS", "WEB"]


async function typeSentence(sentence, delay = 200) {
	const letters = sentence.split("");
	console.log(letters);
	let i = 0;
	while(i < letters.length) {
		await waitForMs(delay);
		console.log("adding " + letters[i]);
		if (document.getElementById("feature-text"))
		document.getElementById("feature-text").innerHTML += letters[i];
		i++
	}
	return;
}

async function deleteSentence() {
	const sentence = document.getElementById("feature-text").innerHTML;
	const letters = sentence.split("");
	while(letters.length > 0) {
		await waitForMs(200);
		letters.pop();
		document.getElementById("feature-text").innerHTML = letters.join("");
	}
}

async function carousel(carouselList) {
	var i = 0;
	while(true) {
		await typeSentence(carouselList[i]);
		await waitForMs(1500);
		await deleteSentence();
		await waitForMs(500);
		i++
		if(i >= carouselList.length) {i = 0;}
	}
}

function waitForMs(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}

export function Home() {

	useEffect(() => {
		carousel(carouselText);
	})

	const [status, setStatus] = useState("Submit");
    const serverURL: string = "https://portfolio-site-server-aeg.herokuapp.com";

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("Sending...");
		const { name, email, message } = e.target.elements;
		let details = {
		  name: name.value,
		  email: email.value,
		  message: message.value,
		};
		let response = await fetch(`${serverURL}/contact`, {
		  method: "POST",
		  headers: {
			"Content-Type": "application/json;charset=utf-8",
		  },
		  body: JSON.stringify(details),
		});
		setStatus("Submit");
		let result = await response.json();
		alert(result.status);
	  };

	const myRef = useRef(null);

	const scrollToContact = () => {
		myRef.current.scrollIntoView();
	}

	return (
		<div className="home-page" >
			<div className="hero">
				<div className="page-content">
					<div className="hero-content">
						<div className="text-box">
							<div className="typing-container">
								<h1 id="feature-text" className="bold"> </h1>
								<span className="cursor"/>
							</div>
							<br/>
							<p>
							Grimbar Interactive is a for hire software design, development, and consulting studio 
							specializing in game, app, and web development. We utilize our 
							diverse set of tools and experience to bring a vision to life!	 
							</p>
							<br/>
							<h3>Do you have an idea?<br/>Let us help you <u className="text-link" onClick={scrollToContact}>make it a reality!</u></h3>
						</div>
						<img id="large-logo" alt="Grimbar Interactive" src="./images/HeroLogo.png"/>
					</div>
				</div>
			</div>
			<div className="page-content">
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
							{/* <button className="button">View on Steam</button>
							<button className="button">Join our Discord</button> */}
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
						Stitch Sculptor app is a tool for crocheters to create, edit, and share patterns.  
						Designing or editing a crochet pattern can be a long process, with a lot of guess work and trial and error.  
						This app provides a visual simulation of the finished product that adjusts in real time as you edit the pattern, 
						saving significant time in the pattern design and editing process. 
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
				<div className="contactContainer light" ref={myRef}>
				<img alt="projectCollage" src="./images/projectCollage.png"/>
				<div>
					<h2 className="bold">Ready to get started on that project?</h2>
					<p>We would love to discus it with you!  Fill out the form below and we will be in touch shortly.</p>
					<form onSubmit={handleSubmit}>
						<div>
							<input type="text" id="name" placeholder='Name' required />
						</div>
						<div>
							<input type="email" id="email" placeholder='Email' required />
						</div>
						<div>
							<textarea id="message" rows={5} placeholder='Message' required />
						</div>
						<button className="button" type="submit">{status}</button>
					</form>
				</div>
				
			</div>
			</div>

		</div>
	);
}
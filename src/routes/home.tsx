import React from 'react';
import { NavBar } from '../components/navigation';

export function Home() {
	return (
		<div>
		<NavBar contentType="Home" changeStateMethod={null}/>
		<div className="home-page" >
			<div className="text-box">
				<h1>A New Journey Begins...</h1>
				<p>
					Grimbar Interactive is a software development and consulting
					company specializing in game and web development.  Our goal
					is to use a diverse set of development tools and skills to create
					unique products.  From fun and interactive games, to a new website
					helping your business or product reach customers, to specialized
					tools that streamline those pesky repetative tasks, we
					are here to help make your dreams and ideas a reality!
				</p>
			</div>
		</div>
		</div>
	);
}
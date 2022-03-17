import React from 'react';
import 'styles/home.css';
import 'styles/home-mobile.css';

export function Home() {
	return (
		<div>
			<div className="home-page" >
				<div className="text-box">
					<h1 className="typewriter">We are...</h1>
					<p>
						Grimbar Interactive is a software development and consulting
						company specializing in game and web development. Our goal
						is to use a diverse set of development tools and skills to create
						unique products.  From fun and interactive games, to a new website
						helping your business or product reach customers, to specialized
						tools that streamline those pesky repetitive tasks, we
						are here to help make your dreams and ideas a reality!
					</p>
				</div>
			</div>
		</div>
	);
}
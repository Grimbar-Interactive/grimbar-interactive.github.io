import React from 'react';
import { NavBar } from '../components/navigation';

export function Games() {
	return (
		<div>
			<NavBar contentType="Home" changeStateMethod={null} />
			<div className="underConstruction">
				<img src="./images/Grimbar_Interactvive_Logo_Image_Only.png" alt="logo" />
				<h1>Under Construction...</h1>
			</div>
		</div>
	)
}
import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar, Footer } from 'components';

export function App() {
	return (
		<div>
			<NavBar />
			<Outlet />
			<Footer />
		</div>
	)
}
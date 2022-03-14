import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer } from 'components';
import { Home, Games, WebDevelopment, Team } from 'routes';

export default class App extends React.Component {
	render() {
		return (
      <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="games" element={<Games/>}/>
        <Route path="webdevelopment" element={<WebDevelopment/>}/>
        <Route path="team" element={<Team/>}/>
      </Routes>
      <Footer />
      </div>
		)
	}
}
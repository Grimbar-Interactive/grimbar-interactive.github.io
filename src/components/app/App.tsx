import React from 'react';
import { Footer } from '../footer';
import { Route, Routes } from 'react-router-dom';
import { Home, Games, WebDevelopment, Team } from '../../routes';

export class App extends React.Component {
	// state: AppState = {
  //   contentState: ContentType.Types[0],
  // };

  // changeContentState = (state: ContentType) => {
  //   this.setState({
  //     contentState: state,
  //   });
  // }

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


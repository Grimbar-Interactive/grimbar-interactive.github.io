import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import 'styles/index.css';
import { App, Home, WebDevelopment, Team, Error } from 'routes';
import { Games, BusinessCard } from 'components';
import { teamMembers } from 'config';
import reportWebVitals from './reportWebVitals';

const businessCards = teamMembers.map(m => <Route key={m.name} path={`/business-card/${m.name.toLowerCase().replace(' ', '-')}`} element={<BusinessCard member={m} />} />);

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="games" element={<Games />} />
          {/* <Route path="webdevelopment" element={<WebDevelopment />} /> */}
          <Route path="team" element={<Team />} />
          <Route path="*" element={<Error />} />
        </Route>

        {businessCards}

      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
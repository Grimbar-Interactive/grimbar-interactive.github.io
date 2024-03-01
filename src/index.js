import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import validator from 'validator';
import { Routes, Route, HashRouter } from 'react-router-dom';
import 'styles/index.css';
import { App, Home, About, Error, Projects, Services } from 'routes';
import { BusinessCard, GDCCalendarTool, GDCCTPrivacyPolicy, } from 'components';
import { teamMembers } from 'config';
import reportWebVitals from './reportWebVitals';

const businessCards = teamMembers.map(m => <Route key={m.name} path={`/business-card/${m.name.toLowerCase().replace(' ', '-')}`} element={<BusinessCard member={m} />} />);

ReactDOM.render(
  <HashRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          {/* <Route path="quest" element={<Quest />} /> */}
          <Route path="*" element={<Error />} />
        </Route>

        <Route path="gdc-calendar-tool/">
          <Route path="" element={<GDCCalendarTool />} />
          <Route path="privacy-policy" element={<GDCCTPrivacyPolicy />} />
          <Route path="*" element={<GDCCalendarTool />} />
        </Route>

        {businessCards}

      </Routes>
    </React.StrictMode>
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export const Validator = () => {
  
  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email!')
    }
  }
  
  return (
    <div style={{
      margin: 'auto',
      marginLeft: '300px',
    }}>
      <pre>
        <h2>Validating Email in ReactJS</h2>
        <span>Enter Email: </span><input type="text" id="userEmail" 
        onChange={(e) => validateEmail(e)}></input> <br />
        <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{emailError}</span>
      </pre>
    </div>
  );
}
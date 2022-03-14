import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../components/navigation/navbar.css';
import '../components/navigation/navbar-mobile.css';
import '../components/content/content.css';
import '../components/content/content-mobile.css';
import '../components/footer/footer.css';
import '../components/footer/footer-mobile.css';
import { App } from '../components/app';
import reportWebVitals from '../reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
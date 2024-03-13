import React from 'react';
import 'styles/home.css';
import 'styles/home-mobile.css';
import 'styles/gdc-calendar-tool.css';
import NavBarSimple from 'components/navigation/navbar-simple';
import { Footer } from 'components/footer';
import { Link } from 'react-router-dom';

export default class GDCCalendarTool extends React.Component<{}, {}> {
	render() {
		return (
      <div>
      {/* <NavBarSimple/> */}
      <div className="home-page" id="gdc-calendar-tool">
        <div className="text-box">
          <h1>GDC Calendar Tool</h1>
          <a href="https://chromewebstore.google.com/detail/gdc-calendar-tool/pcegnhfgcahkoihgmecbplanamokaede">
          <div className="circle">
            <img src="/images/gdc-calendar-tool-icon.png" alt="GDC Calendar Tool Icon"/>
          </div>
          </a>
          <br/>
          <br/>
          <p>
            The GDC Calendar Tool is a simple Chrome-based extension that allows users to quickly add events from the <a href="https://schedule.gdconf.com/"> GDC Conference Schedule website</a> to their personal Google calendars.
          </p>
          <br/>
          <p>You can download the extension from the <a href="https://chromewebstore.google.com/detail/gdc-calendar-tool/pcegnhfgcahkoihgmecbplanamokaede">Chrome Web Store</a>.</p>
          <br/>
          <p>For more information or to view the source code, visit the <a href="https://github.com/Grimbar-Interactive/gdc-calendar-tool">GitHub page</a>.</p>
          <br/>
          <br/>
          <Link className="footer-link" key="Privacy Policy" to="/gdc-calendar-tool/privacy-policy">GDC Calendar Tool Privacy Policy</Link>
        </div>
      </div>
      {/* <Footer/> */}
      </div>
		)
	}
}
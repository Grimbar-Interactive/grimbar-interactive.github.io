import React from 'react';
import { NavBar } from '../navigation';
import { ContentContainer, ContentType, TempLandingPage } from '../content';

type AppState = {
	contentState: ContentType;
}

export class App extends React.Component {
	state: AppState = {
    contentState: ContentType.Types[0]
  };

  changeContentState = (state: ContentType) => {
    this.setState({
      contentState: state
    });
  }

	render() {
		return (
			<TempLandingPage/>
		)
	}
}

//<NavBar contentType={this.state.contentState} changeStateMethod={this.changeContentState}/>
//<ContentContainer contentType={this.state.contentState}/>
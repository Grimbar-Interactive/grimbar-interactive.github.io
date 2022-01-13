import React from 'react';
import { NavBar } from '../navigation';
import { ContentContainer, ContentType } from '../content';

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
			<div>
				<NavBar contentType={this.state.contentState} changeStateMethod={this.changeContentState}/>
				<ContentContainer contentType={this.state.contentState}/>
			</div>
		)
	}
}
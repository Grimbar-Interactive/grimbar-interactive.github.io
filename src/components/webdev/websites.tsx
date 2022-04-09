import React from 'react';
import { GamesSection } from 'components/games';
import { clientGames, ourGames } from 'config';
import 'styles/games.css';
import 'styles/games-mobile.css';

type WebsitesState = {
	selectedSection: string | undefined
}

export default class Websites extends React.Component<{}, WebsitesState> {
	constructor(props) {
		super(props);

		this.state = {
			selectedSection: undefined
		}

		this.sectionSelected = this.sectionSelected.bind(this);
	}

	sectionSelected(header: string | undefined) {
		this.setState({
			selectedSection: header
		});
	}

	render() {
		return (
			<div>
				<div className="games-page">
					<GamesSection gamesArray={clientGames} header='Client Projects' selectedSection={this.state.selectedSection} selectedCallback={this.sectionSelected} />
					<GamesSection gamesArray={ourGames} header='Our Projects' selectedSection={this.state.selectedSection} selectedCallback={this.sectionSelected} />
				</div>
			</div>
		)
	}
}
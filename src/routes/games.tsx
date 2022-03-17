import React from 'react';
import {GamesSection} from 'components/games';
import { clientGames, ourGames } from 'config';
import 'styles/games.css';
import 'styles/games-mobile.css';

export function Games() {
		return(
			<div>
				<div className="games-page">
						<GamesSection gamesArray={clientGames} header='Client Projects'/>
						<GamesSection gamesArray={ourGames} header='Our Projects'/>
				</div>
			</div>
		)
}

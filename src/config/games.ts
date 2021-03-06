import { GameType } from 'components';

export const enum Platform {
	Android,
	iOS,
	Steam,
	Itch
}

export const clientGames: GameType[] = [{
    title: 'Battle Bees Royale',
    client: 'Eastedge Studios',
    description: 'Battle Bees Royale is a multiplayer, mobile, top-down, battle royale game where bee blimps battle against each other in a post-human world! We were contracted by Eastedge Studios to develop the Unity game client and PlayFab integration.',
    mainURL: 'https://www.battlebees.com/',
    photoURL: '/images/games/battle-bees.jpg',
    platforms: [
        { platform: Platform.Android, url: 'https://play.google.com/store/apps/details?id=com.eastedgestudios.ehbeeroyale' },
        { platform: Platform.iOS, url: 'https://apps.apple.com/us/app/battle-bees-royale/id1455237724' },
        { platform: Platform.Steam, url: 'https://store.steampowered.com/app/1792000/Battle_Bees_Royale/' }
    ]
}, {
    title: 'Electioneering',
    client: 'Cosmo\'s Tuxedo',
    description: 'Electioneering puts the 2020 election in the hands of the player, allowing them to hack information, sway voters, and interact with special agents in this turn-based, data-driven strategy game. For this project we built nearly all of the UI implementation and agent interactions, including a full dialogue system with a custom Unity editor tool.',
    mainURL: 'https://electioneering-game.com/',
    photoURL: '/images/games/electioneering.jpg',
    platforms: [
        { platform: Platform.Steam, url: 'https://store.steampowered.com/app/1377280/Electioneering/' }
    ]
}, {
    title: 'Skewerz',
    client: 'Eastedge Studios',
    description: 'A Snake-like arcade game featuring the Annoying Orange IP. Developed using Unity, this project features 60 levels including six intense boss fights. We helped develop the game\'s core gameplay as well as the PlayFab store/inventory integration and UI implementation.',
    mainURL: undefined,
    photoURL: '/images/games/skewerz.jpg',
    platforms: [
        { platform: Platform.Android, url: 'https://play.google.com/store/apps/details?id=com.eastedgestudios.skewerz' },
        { platform: Platform.iOS, url: 'https://apps.apple.com/us/app/skewerz/id1448406135' }
    ]
}, {
    title: 'Idioma',
    client: 'Intensive Services',
    description: 'Idioma is a fun word puzzle game all about finding and learning idioms. This project involved the development of the mobile game client and an custom admin website for generating and automatically updating game content.',
    mainURL: undefined,
    photoURL: '/images/games/idioma.png',
    platforms: [
        { platform: Platform.Android, url: 'https://play.google.com/store/apps/details?id=com.intensiveservices.idioma' }
    ]
}];

export const ourGames: GameType[] = [{
    title: 'Trove Ball',
    client: '',
    description: 'And endless runner game where you control the difficulty with the ability to purchase more enemies as you progress. The more challenging the game, the higher you score!',
    mainURL: 'https://www.jacobfdunbar.com/troveball.html',
    photoURL: '/images/games/troveball.jpg',
    platforms: [
        { platform: Platform.Android, url: 'https://play.google.com/store/apps/details?id=com.JacobDunbarGames.TroveBall' }
    ]
}, {
    title: 'Mayor! Mayor!',
    client: '',
    description: 'Mayor! Mayor! is a city-builder, dice-rolling, idle-simulation game. If you like watching virtual cities earn virtual money then this is the game for you. Plan out cities around the globe to make money and keep people happy!',
    mainURL: 'https://www.jacobfdunbar.com/mayormayor.html',
    photoURL: '/images/games/mayormayor.jpg',
    platforms: [
        { platform: Platform.Android, url: 'https://play.google.com/store/apps/details?id=com.JacobDunbarGames.MayorMayor' },
        { platform: Platform.iOS, url: 'https://apps.apple.com/us/app/mayor-mayor-lite/id1369631726' }
    ]
}, {
    title: 'ProcrastiTyper',
    client: '',
    description: 'A typing game that will put you to the test. You left your paper to the last minute, can you finish it in time while staying on topic?',
    mainURL: undefined,
    photoURL: '/images/games/procrastityper.jpg',
    platforms: [
        { platform: Platform.Itch, url: 'https://jacobfdunbar.itch.io/procrastityper' }
    ]
}];

export type PlatformInfo = {
    iconURL: string
}

type PlatformInfoMap = Map<Platform, PlatformInfo>;

export const platformInfo: PlatformInfoMap = new Map();
platformInfo.set(Platform.Android, { iconURL: '/images/platforms/google-play.svg' });
platformInfo.set(Platform.iOS, { iconURL: '/images/platforms/app-store.svg' });
platformInfo.set(Platform.Steam, { iconURL: '/images/platforms/steam.svg' });
platformInfo.set(Platform.Itch, { iconURL: '/images/platforms/itch.svg' });
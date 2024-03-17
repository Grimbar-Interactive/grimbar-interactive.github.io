import { ProjectType } from 'components';

export const enum Platform {
	Android,
	iOS,
	Steam,
	Itch,
    Web
}

export const games: ProjectType[] = [{
    title: 'Grumpy Goats',
    client: 'Verge Games',
    description: 'Grumpy Goats is a physics-based tower destruction mobile game based on the original Grumpy Goats Flash game. We were brought in to complete a ground-up rebuild of the app\'s core gameplay and interface, as well as implement advertising and in-app purchases.',
    mainURL: '',
    photoURL: '/images/games/grumpyGoats.png',
    platforms: [
        { platform: Platform.Web, url: 'https://grumpygoats.com/' },
        { platform: Platform.Android, url: 'https://play.google.com/store/apps/details?id=com.VergeGames.GrumpyGoats' },
        { platform: Platform.iOS, url: 'https://apps.apple.com/us/app/grumpy-goats/id1589498167' },
    ]
},{
    title: 'Battle Bees Royale',
    client: 'Eastedge Studios',
    description: 'Battle Bees Royale is a multiplayer, battle royale mobile game where bee blimps battle against each other in a post-human world! We were contracted by Eastedge Studios to develop the Unity game client and PlayFab integration.',
    mainURL: '',
    photoURL: '/images/games/battle-bees.jpg',
    platforms: [
        { platform: Platform.Web, url: 'https://www.battlebees.com/' },
        { platform: Platform.Android, url: 'https://play.google.com/store/apps/details?id=com.eastedgestudios.ehbeeroyale' },
        { platform: Platform.iOS, url: 'https://apps.apple.com/us/app/battle-bees-royale/id1455237724' },
        { platform: Platform.Steam, url: 'https://store.steampowered.com/app/1792000/Battle_Bees_Royale/' }
    ]
},
{
    title: 'Samurai Rising',
    client: 'Samurai Legends Team',
    description: 'Samurai Rising was a multiplayer card battler WebGL game built using Unity. We helped develop the core gameplay and deck selection mechanics and completed a full redevelopment of the game\'s server logic to improve security.',
    mainURL: '',
    photoURL: '/images/games/samurai-rising.jpg',
    platforms: [
    ]
}, 
{
    title: 'Skewerz',
    client: 'Eastedge Studios',
    description: 'A Snake-like arcade game featuring the Annoying Orange IP. Developed using Unity, this project features 60 levels including six intense boss fights. We helped develop the game\'s core gameplay as well as the PlayFab store/inventory integration and UI implementation.',
    mainURL: '',
    photoURL: '/images/games/skewerz.jpg',
    platforms: [
        { platform: Platform.Web, url: 'https://www.youtube.com/watch?v=QYc37TY-yiU' },
        { platform: Platform.Android, url: 'https://play.google.com/store/apps/details?id=com.eastedgestudios.skewerz' },
        { platform: Platform.iOS, url: 'https://apps.apple.com/us/app/skewerz/id1448406135' }
    ]
}, {
    title: 'Electioneering',
    client: 'Cosmo\'s Tuxedo',
    description: 'Electioneering puts the 2020 election in the hands of the player, allowing them to hack information, sway voters, and interact with special agents in this turn-based, data-driven strategy game. For this project we built nearly all of the UI implementation and agent interactions, including a full dialogue system with a custom Unity editor tool.',
    mainURL: '',
    photoURL: '/images/games/electioneering.jpg',
    platforms: [
        { platform: Platform.Web, url: 'https://electioneering-game.com/' },
        { platform: Platform.Steam, url: 'https://store.steampowered.com/app/1377280/Electioneering/' }
    ]
}, {
    title: 'Idioma',
    client: 'Intensive Services',
    description: 'Idioma was a fun word puzzle game all about finding and learning idioms. This project involved the development of the mobile game client and an custom admin website for generating and automatically updating game content.',
    mainURL: '',
    photoURL: '/images/games/idioma.png',
    platforms: [
    ]
},{
    title: 'Trove Ball',
    client: '',
    description: 'And endless runner game where you control the difficulty with the ability to purchase more enemies as you progress. The more challenging the game, the higher you score!',
    mainURL: '',
    photoURL: '/images/games/troveball.jpg',
    platforms: [
        { platform: Platform.Web, url: 'https://www.jacobfdunbar.com/troveball.html' },
        { platform: Platform.Android, url: 'https://play.google.com/store/apps/details?id=com.JacobDunbarGames.TroveBall' }
    ]
}, {
    title: 'Mayor! Mayor!',
    client: '',
    description: 'Mayor! Mayor! is a city-builder, dice-rolling, idle-simulation game. If you like watching virtual cities earn virtual money then this is the game for you. Plan out cities around the globe to make money and keep people happy!',
    mainURL: '',
    photoURL: '/images/games/mayormayor.jpg',
    platforms: [
        { platform: Platform.Web, url: 'https://www.jacobfdunbar.com/mayormayor.html' },
        { platform: Platform.Android, url: 'https://play.google.com/store/apps/details?id=com.JacobDunbarGames.MayorMayor' },
        { platform: Platform.iOS, url: 'https://apps.apple.com/us/app/mayor-mayor-lite/id1369631726' }
    ]
}, {
    title: 'ProcrastiTyper',
    client: '',
    description: 'A short typing game that will put your focus to the test. You left your paper to the last minute, can you finish it in time while staying on topic?',
    mainURL: '',
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
platformInfo.set(Platform.Web, { iconURL: '/images/platforms/web.png' });
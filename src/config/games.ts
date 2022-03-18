import { GameType, Platform } from 'components';

export const clientGames: GameType[] = [{
    title: 'Battle Bees',
    client: ' - Eastedge Studios',
    description: "A bee themed battle royal game. laskdfjal; lksdfjalskjd  asldkjfdslfkaj alkdsaflkdjs asdlkfj jfdksalkssdjf  aldskfjsldk.",
    photoURL: './images/battle-bees.jpg',
    platforms: [
        { platform: Platform.Android, url: '' },
        { platform: Platform.iOS, url: '' },
        { platform: Platform.Steam, url: '' }
    ]
}, {
    title: 'Electioneering',
    client: ' - ??',
    description: 'A strategy game centering around election simulations. lksdjfsalkdj asldkflkj slkdfj aslkdfjslkdfj asldkjfl lsadkfjlsdk asdlkfj.',
    photoURL: './images/electioneering.jpg',
    platforms: [
        { platform: Platform.Steam, url: '' }
    ]
}, {
    title: 'Skewerz',
    client: ' - Eastedge Studios',
    description: 'A snake-like arcade game featuring Anoying Orange IP and his friends. lskdafj lskdjfsld lskdfj lskdfjsld lksdfjk lskdfjl lskdjf.',
    photoURL: './images/skewerz.jpg',
    platforms: [
        { platform: Platform.Android, url: '' },
        { platform: Platform.iOS, url: '' }
    ]
}];

export const ourGames: GameType[] = [{
    title: 'Trove Ball',
    client: '',
    description: 'And endless runner game where you control the difficulty with the ability to purchase more ememies as you progres! lksdjfr lksd.',
    photoURL: './images/troveball.jpg',
    platforms: [
        { platform: Platform.Android, url: '' },
        { platform: Platform.iOS, url: '' }
    ]
}, {
    title: 'Mayor! Mayor!',
    client: '',
    description: 'A dice rolling, city building, chace taking game.  lksdajf laskdjf lsdakjf lksdfj llkdj sadlkfj alskdfj lkjdsfj lkasdjfldk salkdfjd.',
    photoURL: './images/mayormayor.jpg',
    platforms: [
        { platform: Platform.Android, url: '' },
        { platform: Platform.iOS, url: '' }
    ]
}, {
    title: 'Procrastityper',
    client: '',
    description: 'A typing game that will put you to the test.  You left your paper to the last minute, can you finish in time while staying on topic??',
    photoURL: './images/procrastityper.jpg',
    platforms: [
        { platform: Platform.Itch, url: '' }
    ]
}];

export type PlatformInfo = {
    iconURL: string
}

type PlatformInfoMap = Map<Platform, PlatformInfo>;

const platformInfo: PlatformInfoMap = new Map();
platformInfo.set(Platform.Android, { iconURL: '' });
platformInfo.set(Platform.iOS, { iconURL: '' });
platformInfo.set(Platform.Steam, { iconURL: '' });
platformInfo.set(Platform.Itch, { iconURL: '' });
export { platformInfo };

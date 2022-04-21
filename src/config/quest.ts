type storyOptionsType = {
    prompt: string,
    pass1: string,
    fail1: string,
    pass2: string,
    fail2: string,
    trait1: string,
    trait2: string,
    points: number,
    buttonText1: string,
    buttonText2: string,
}


export const storyOptions: storyOptionsType[] = [{
    prompt: 'Fred is about to start his adventure! First things first, he needs help deciding which direction to go...',
    pass1: 'Fred embarks on his journey heading towards the mountains.  His sense of direction proves strong, and his adventure is off to a good start!',
    fail1: 'Fred tries to head towards the mountains, but gets a little lost due to his lack of direction... As a result he heads off towards the forrest instead.  No worries though, there is still much adventuring to be had!',
    pass2: 'Fred embarks on his journey heading towards the forrest.  His sense of direction proves strong, and his adventure is off to a good start!',
    fail2: 'Fred tries to head towards the forrest, but gets a little lost due to his lack of direction... As a result he heads off towards the mountains instead.  No worries though, there is still much adventuring to be had!',
    trait1: 'Wisdom',
    trait2: 'Wisdom',
    points: 10,
    buttonText1: 'Head west towards the mountains (Wisdom)',
    buttonText2: 'Head east toawrds the forrest (Wisdom)'
},{
    prompt: 'Shortly after starting is journey Fred has a run in with some bandits.  What should he do?',
    pass1: 'As Fred continues along his journey, he comes across some bandits.  He attempts to negotiate with the bandits and suceeds!  The bandits let him pass and Fred is on his way.',
    fail1: 'As Fred continues along his journey, he comes across some bandits.  He attempts to negotiate with the bandits but fails miserably...  A deal is struck (very much in the favor of the bandits) and Fred continues on, a poorer man than before.',
    pass2: 'As Fred continues along his journey, he comes across some bandits.  He attempts to fight his way past bandits and suceeds!  With the bandits defeated, Fred continues on his way.',
    fail2: 'As Fred continues along his journey, he comes across some bandits.  He attempts to fight his way past the bandits and fails miserably...  After being beaten by the bandits, Fred stumbles on, ego and body bruised.',
    trait1: 'Charisma',
    trait2: 'Strength',
    points: 10,
    buttonText1: 'Negotiate with the bandits (Charisma)',
    buttonText2: 'Fight the bandits (Strength)'
},{
    prompt: 'Not long after leaving the bandits behind, Fred finds his path blocked.  It looks like this area used to be a temple of some kind.  Fred knows he needs to get around, but how should he do it?',
    pass1: 'Next up, Fred comes along a path blocked by rubble from an old temple and decides to break his way through.  Fred suceeds in getting through, and lucky for him was fast enough to get out before the rest of the area started to rumble and colapse!',
    fail1: 'Next up, Fred comes along a path blocked by rubble from an old temple and decides to break his way through.  Unfortunatly, Fred just is not strong enough.  As he atempts to break through, the ground starts to rumble, he seems to have upset something in the ruined temple...',
    pass2: 'Next up, Fred comes along a path blocked by rubble from an old temple and decides to sneak his way through.  Fred suceeds in getting through safely!  And while he is not sure why, he feels like he narrowly escaped some real danger.',
    fail2: 'Next up, Fred comes along a path blocked by rubble from an old temple and decides to sneak his way through.  Unfortunatly, Fred just is not sneaky enough, and knocks over some rubble in his attempt.  The ground starts to rumble, he seems to have upset something in the ruined temple...',
    trait1: 'Strength',
    trait2: 'Dexterity',
    points: 10,
    buttonText1: 'Break a path through the rubble (Strength)',
    buttonText2: 'Carefully sneak through the rubble (Dexterity)'
}, ];


import React from 'react';

export class Games extends React.Component {
    render() {
        return (
            <Game title='Trove Ball'/>
        )
    }
}

type GameProps = {
    title: string
}

const Game = ({ title }: GameProps) => <aside>
    <h2>{ title }</h2>
</aside>
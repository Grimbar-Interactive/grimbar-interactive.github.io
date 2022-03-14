import React from 'react';

export class Games extends React.Component {
    render() {
        return (
            <div className="underConstruction">
                <img src="./images/Grimbar_Interactvive_Logo_Image_Only.png"  alt="logo" />
                <h1>Under Construction...</h1>
            </div>
        )
    }
}

type GameProps = {
    title: string
}

const Game = ({ title }: GameProps) => <aside>
    <h2>{ title }</h2>
</aside>
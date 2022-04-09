import React from 'react';
import { PortfolioItemType } from 'components';

type PortfolioPicProps = {
    i: number;
    selected: number | undefined;
    eventHandler: Function;
    portfolioItem: PortfolioItemType;
}

export default class PortfolioPic extends React.Component <PortfolioPicProps, {}> {
    render() {
        const imageClass = this.props.selected === undefined ? 'image' : this.props.i === this.props.selected ? 'imageFocus' : 'imageUnfocus';

        return (
            <div key={this.props.i}>
                <img className={imageClass} src={this.props.portfolioItem.photoURL} alt={this.props.portfolioItem.title} onClick={() => this.props.eventHandler(this.props.i)}/>
            </div>
        )
    }
}
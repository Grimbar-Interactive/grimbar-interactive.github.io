import React from 'react';
import { WebsiteType } from 'components';

type WebsitePicProps = {
    i: number;
    selected: number | undefined;
    eventHandler: Function;
    website: WebsiteType;
}

export default class WebsitePic extends React.Component <WebsitePicProps, {}> {
    render() {
        const imageClass = this.props.selected === undefined ? 'image' : this.props.i === this.props.selected ? 'imageFocus' : 'imageUnfocus';

        return (
            <div key={this.props.i}>
                <img className={imageClass} src={this.props.website.photoURL} alt={this.props.website.title} onClick={() => this.props.eventHandler(this.props.i)}/>
            </div>
        )
    }
}
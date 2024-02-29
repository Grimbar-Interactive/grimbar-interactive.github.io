import React from 'react';
import { ProjectType } from 'components';

type ProjectPicProps = {
    i: number;
    selected: number | undefined;
    eventHandler: Function;
    project: ProjectType;
}

export default class ProjectPic extends React.Component <ProjectPicProps, {}> {
    render() {
        const imageClass = this.props.selected === undefined ? 'image' : this.props.i === this.props.selected ? 'imageFocus' : 'imageUnfocus';

        return (
            <div key={this.props.i}>
                <img className={imageClass} src={this.props.project.photoURL} alt={this.props.project.title} onClick={() => this.props.eventHandler(this.props.i)}/>
            </div>
        )
    }
}
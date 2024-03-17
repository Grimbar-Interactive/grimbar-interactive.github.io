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
            // <div key={this.props.i}>
                <div className={imageClass} style={{backgroundImage: `linear-gradient(40deg, #0000 40%, #fff2 60%, #0000 80%), url('${this.props.project.photoURL}')`}} onClick={() => this.props.eventHandler(this.props.i)}>
                    {/* <div className='glare' onClick={() => this.props.eventHandler(this.props.i)}></div> */}
                </div>
            // </div>
        )
    }
}
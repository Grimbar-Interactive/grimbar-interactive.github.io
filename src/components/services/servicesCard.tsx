import React from "react";

export type ServicesCardType = {
    title: string,
    photoUrl: string,
}

type ServicesCardProps = {
    service: ServicesCardType
}

export default class ServicesCard extends React.Component<ServicesCardProps, {}> {
    render() {
        let service = this.props.service;
        let logo = (service.photoUrl !== '' ? <img alt={service.title} src={service.photoUrl}/> : '');
        let title = (service.title !== '' ? <p className="bold">{service.title}</p> : '');

        return (
            <div className="serviceCard">
                {logo}
                {title}
            </div>
        )
    }
}
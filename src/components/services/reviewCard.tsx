import React from "react";

export type ReviewCardType = {
    client: string,
    reviewMessage: string,
    photoUrl: string,
}

type ReviewCardProps = {
    review: ReviewCardType
}

export default class ReviewCard extends React.Component<ReviewCardProps, {}> {
    render() {
        let review = this.props.review;
        let avatar = (review.photoUrl !== '' ? <img alt={review.client} src={review.photoUrl}/> : '');
        let clientName = (review.client !== '' ? <p className="bold">~ {review.client}</p> : '');

        return (
            <div className="reviewCard">
                {avatar}
                <p>"{review.reviewMessage}"</p>
                {clientName}
            </div>
        )
    }
}
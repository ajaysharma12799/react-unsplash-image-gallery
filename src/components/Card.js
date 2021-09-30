import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Card = ({image}) => {
    const {alt_description, urls: {small}} = image;

    return (
        <div className="card">
            <div className="image">
                <LazyLoadImage src={small} alt={alt_description} />
            </div>
        </div>
    )
}

export default Card

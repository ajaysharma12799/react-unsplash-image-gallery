import React from 'react'

const Card = ({image}) => {
    const {alt_description, urls: {small}} = image;

    return (
        <div className="card">
            <div className="image">
                <img src={small} alt={alt_description} />
            </div>
        </div>
    )
}

export default Card

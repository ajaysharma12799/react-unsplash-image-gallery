import React, {useContext} from 'react'
import { UnsplashContext } from '../context/Unsplash';
import Card from './Card';

const ImageSection = () => {
    const {response} = useContext(UnsplashContext);
    return (
        <div className="image-section">
            {
                response.length > 0 ? (
                    response.map((image) => (
                        <Card image={image} key={image.id} />
                    ))
                 ) : (<h4>No Image</h4>)
            }
        </div>
    )
}

export default ImageSection

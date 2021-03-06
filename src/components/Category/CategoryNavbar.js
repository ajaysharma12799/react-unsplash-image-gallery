import React, {useContext} from 'react'
import { UnsplashContext } from '../../context/Unsplash';
import CategoryItem from './CategoryItem';

const CategoryNavbar = () => {
    const {categories} = useContext(UnsplashContext);
    return (
        <div className="category-navbar">
            {
                categories.length > 0 ? (
                    categories.map((category) => (
                        <CategoryItem category={category} key={category.id}  />
                    ))
                ) : (<h4>Categories Loading...</h4>)
            }
        </div>
    )
}

export default CategoryNavbar

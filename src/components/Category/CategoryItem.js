import React from 'react'

const CategoryItem = ({category}) => {
    const {title} = category;

    return (
        <div className="category">
            {title}
        </div>
    )
}

export default CategoryItem

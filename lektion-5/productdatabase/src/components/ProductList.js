import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({items}) => {
    return (
        <ul className="list-group">
            {
                items.map(product => (<ProductItem item={product} />))
            }    
        </ul>
    )
}

export default ProductList

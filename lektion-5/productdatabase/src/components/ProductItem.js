import React from 'react'

const ProductItem = ({item}) => {
    return (
        <li className="list-group-item">
            <input class="form-check-input me-3" type="checkbox" value={item.id} aria-label="..." />
            {item.name}
        </li>
    )
}

export default ProductItem

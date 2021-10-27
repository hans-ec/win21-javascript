import React, { useState, useEffect } from 'react'
import Card from './Card'
import {Link} from 'react-router-dom'

const CardGrid = ({products}) => {



    return (
        <div className="row row-cols-1 row-cols-md-4 g-4">
            {
                products.map(product => (  
                    <div className="col">
                        <Link to={`products/product/${product.id}`} style={{ textDecoration: 'none'}} ><Card key={product.id} item={product} /></Link>
                    </div>
                ))
            }
        </div>
    )
}

export default CardGrid

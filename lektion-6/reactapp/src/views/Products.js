import React from 'react'
import CardGrid from '../components/cards/CardGrid';

// Components
import Navbar from '../components/navbar/Navbar';

const Products = ({products}) => {
    return (
        <>
            <Navbar />
            
            <div class="container my-5">
                <CardGrid products={products} />
            </div>
        </>
    )
}

export default Products

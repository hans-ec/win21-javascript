import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// Components
import Navbar from '../components/navbar/Navbar';

const ProductDetails = ({products}) => {

    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://localhost:44363/api/products/${id}`)
            const data = await res.json()
            
            setProduct(data)
          }
          fetchData();
    },[])


    return (
        <>
            <Navbar />
            
            <div className="container my-5">
               <div>
                    <h2>{product.name}</h2>
                    <div className="text-muted">
                        <span className="me-2">{product.vendor}</span>
                        <span className="me-5">{product.vendorArticleNumber}</span>
                        <span className="me-2">Artikelnummer. {product.id}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-between mt-5 align-items-center">
                            <div >
                                <ul>
                                    {/* {
                                        product.shortDescription.split(',').map(li => ( <li>{li}</li> ))     
                                    } */}
                                </ul>
                            </div>
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div>
                            adfadf
                        </div>
                    </div>
                    <div>
                        {product.description}
                    </div>

               </div>
            </div>
        </>
    )
}

export default ProductDetails

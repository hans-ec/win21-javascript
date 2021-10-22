import React, { useState } from 'react'
import uuid from 'react-uuid'

const Form = ({items, setItems}) => {
    const [productName, setProductName] = useState('')
    const [productDescription, setProductDescription] = useState('')

    const productNameHandler = (e) => { setProductName(e.target.value) }
    const productDescriptionHandler = (e) => { setProductDescription(e.target.value) }

    const submitHandler = (e) => {
        e.preventDefault()

        const product = { id: uuid(), name: productName, description: productDescription } 
        setItems([...items, product])

        setProductName('')
        setProductDescription('')
    }


/*
    const items = []
    const productName = document.getElementById('productName')
    const productDescription = document.getElementById('productDescription')

    const submitHandler = (e) => {
        e.preventDefault()

        const product = { id: uuid(), name: e.target[0].value, description: e.target[1].value}
        items = [...items, product]

        productName.value = ''
        productDescription.value = ''
    }
*/


    return (
        <form onSubmit={submitHandler}>
            <div className="mb-3">
                <label for="productName" className="form-label">Product Name</label>
                <input type="text" className="form-control" id="productName" value={productName} onChange={productNameHandler} />
            </div>
            <div className="mb-3">
                <label for="productDescription" className="form-label">Product Description</label>
                <textarea className="form-control" id="productDescription" rows="3" value={productDescription} onChange={productDescriptionHandler}></textarea>
            </div>

            <div class="d-grid gap-2">
                <button onClick={submitHandler} className="btn btn-secondary" type="submit">Add Product</button>
            </div>
        </form>
    )
}

export default Form

import React, { useState } from 'react'
import './App.css';
import Form from './components/Form';
import ProductList from './components/ProductList';

function App() {

  const [products, setProducts] = useState([])


  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-center">
        <div className="col-6 mb-5">
          <Form items={products} setItems={setProducts} />
        </div>
      </div>
      
      <ProductList items={products} />
    </div>
  );
}

export default App;

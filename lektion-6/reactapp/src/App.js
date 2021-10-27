import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react'

// Routes
import Products from './views/Products';
import Home from './views/Home';
import NotFound from './views/NotFound';
import SignIn from './views/SignIn';
import ProductDetails from './views/ProductDetails';



function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
      async function fetchData() {
          const res = await fetch("https://localhost:44363/api/products")
          const data = await res.json()
          
          setProducts(data)
        }
        fetchData();
  },[])




  return (
    <BrowserRouter>
      <Switch>
        <Route path="/products" exact>
          <Products products={products} />
        </Route>
        <Route path="/products/product/:id" exact>
          <ProductDetails products={products} />
        </Route>
        <Route path="/signin" exact component={SignIn} />
        <Route path="/" exact component={Home} />
        <Route path="*" exact component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

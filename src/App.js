import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Product from './components/products/Product';
import ProductSingle from './components/products/ProductSingle';
import './assets/style.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
     <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="products" element={<Product />} />
        <Route path="products/:id" element={<ProductSingle />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <h2>There's nothing here!</h2>
              <h3 style={{color: 'red'}}>Page Not Found</h3>
              <Link to='/' style={{textDecoration: 'none', color: 'blue'}}>Back to home</Link>
            </main>
          }
        />
      </Routes>
      {/* <div>
        <p className='text-center'>
          &copy;2022 all rights reserved,
        </p>
      </div> */}
    </div>
  );
}

export default App;
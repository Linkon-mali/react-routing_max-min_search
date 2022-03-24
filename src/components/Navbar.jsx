import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <ul className='navbar'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Product</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact"> Contact</Link></li>
        <li><Link to="/404"> 404</Link></li>
      </ul>
  )
}

export default Navbar
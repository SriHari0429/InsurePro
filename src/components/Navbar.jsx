// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
        <>
        <div className='fullnav'>
    <nav className='navbar'>

      <div className='logo'>
        <h1>insure<lable>Pro</lable></h1>
        </div>

        <div className='services'>
          <Link to="/" className='link'>Home</Link>
          <Link to="/about" className='link'>About</Link>
          <Link to="/whyus" className='link'>Why Us</Link>
          <Link to="/services" className='link'>Services</Link>
          <Link to="/contact" className='link'>Contact</Link>
        </div>

        <div className='login'>
        <Link to="/login" className='link'><button>login</button></Link> 
        <Link to="/signup" className='link'><button>Sign up</button></Link>
      </div>

    </nav>
    </div>
    </>
  );
};

export default Navbar;

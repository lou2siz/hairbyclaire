import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Hair by Claire</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="/book">Book Now</Link></li>
      </ul>
      <div className="social-icons">
        <a href="https://instagram.com/hairbyclairestl"><FaInstagram /></a>
        <a href="https://facebook.com/hairbyclairestl"><FaFacebook /></a>
        <a href="https://tiktok.com/@hairbyclairestl"><FaTiktok /></a>
      </div>
    </nav>
  );
}

export default Navbar;

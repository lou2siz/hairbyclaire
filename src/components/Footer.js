import React from 'react';
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 Hair by Claire | All Rights Reserved</p>
      <div className="social-icons">
        <a href="https://instagram.com/hairbyclairestl"><FaInstagram /></a>
        <a href="https://facebook.com/hairbyclairestl"><FaFacebook /></a>
        <a href="https://tiktok.com/@hairbyclairestl"><FaTiktok /></a>
      </div>
    </footer>
  );
}

export default Footer;

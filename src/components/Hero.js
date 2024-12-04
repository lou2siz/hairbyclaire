import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="hero">
      <h1>Welcome to Hair by Claire</h1>
      <p>Majestic beauty starts with Claire's touch.</p>
      <div className="cta-buttons">
        <Link to="/book" className="btn-primary">Book Now</Link>
        <Link to="/book" className="btn-secondary">Schedule a Consultation</Link>
      </div>
    </div>
  );
}

export default Hero;

import React from 'react';
import { Link } from 'react-router-dom';

function ServicesPage() {
  const services = [
    {
      title: "Signature Haircuts & Styling",
      description: "Personalized cuts and styles tailored to enhance your natural beauty and lifestyle.",
      price: "Starting at $45",
    },
    {
      title: "Color Transformation",
      description: "From subtle highlights to bold fashion colors, experience our premium color services.",
      price: "Starting at $120",
    },
    {
      title: "Extensions",
      description: "Premium quality hair extensions for length and volume, customized to match your hair.",
      price: "Custom pricing",
    },
    {
      title: "Waxing Services",
      description: "Professional body waxing services for smooth, long-lasting results.",
      price: "Starting at $25",
    },
    {
      title: "Bridal & Special Occasion",
      description: "Complete styling services to make your special day unforgettable.",
      price: "Custom pricing",
    }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        <h1 style={styles.heading}>Luxury Hair Services</h1>
        <div style={styles.decorativeLine}></div>
        <p style={styles.subtitle}>
          Elevate your look with our premium beauty services
        </p>
        
        <div style={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} style={styles.serviceCard}>
              <h3 style={styles.serviceTitle}>{service.title}</h3>
              <p style={styles.serviceDescription}>{service.description}</p>
              <p style={styles.servicePrice}>{service.price}</p>
              <Link to="/book" style={styles.bookButton}>
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #fef6f9 0%, #fff5f7 100%)',
    padding: '80px 20px',
  },
  contentWrapper: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  heading: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '3.5rem',
    color: '#1a0f0f',
    textAlign: 'center',
    marginBottom: '20px',
  },
  decorativeLine: {
    width: '80px',
    height: '3px',
    background: 'linear-gradient(90deg, #ff86a7, #ffdce5)',
    margin: '0 auto 30px',
  },
  subtitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '1.2rem',
    color: '#4a4a4a',
    textAlign: 'center',
    maxWidth: '700px',
    margin: '0 auto 60px',
    lineHeight: '1.6',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    padding: '20px',
  },
  serviceCard: {
    background: 'white',
    borderRadius: '20px',
    padding: '40px 30px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    '&:hover': {
      transform: 'translateY(-5px)',
    },
  },
  serviceTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.8rem',
    color: '#1a0f0f',
    marginBottom: '20px',
  },
  serviceDescription: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '1.1rem',
    color: '#4a4a4a',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  servicePrice: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.3rem',
    color: '#ff86a7',
    marginBottom: '30px',
    fontWeight: '600',
  },
  bookButton: {
    background: 'linear-gradient(90deg, #ff86a7, #ffdce5)',
    color: 'white',
    padding: '12px 30px',
    borderRadius: '25px',
    fontFamily: "'Poppins', sans-serif",
    fontWeight: '500',
    textDecoration: 'none',
    transition: 'transform 0.2s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
};

export default ServicesPage;

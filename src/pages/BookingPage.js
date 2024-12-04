import React from 'react';

function BookingPage() {
  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        <section style={styles.section}>
          <h1 style={styles.heading}>Your Journey to Beauty Begins Here</h1>
          <div style={styles.decorativeLine}></div>
          <p style={styles.description}>
            Experience the art of transformation with Claire's expert styling. 
            Select your preferred service and time, and let us create your perfect look.
          </p>
          <div style={styles.bookingWrapper}>
            <div style={styles.iframeContainer}>
              <iframe
                src="https://calendly.com/hairbyclaire"
                title="Book an Appointment"
                style={styles.iframe}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #fef6f9 0%, #fff5f7 100%)',
  },
  contentWrapper: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '60px 20px',
  },
  section: {
    textAlign: 'center',
    color: '#2c1810',
  },
  heading: {
    fontSize: '3.5rem',
    marginBottom: '20px',
    fontFamily: `'Playfair Display', serif`,
    fontWeight: '700',
    color: '#1a0f0f',
  },
  decorativeLine: {
    width: '80px',
    height: '3px',
    background: 'linear-gradient(90deg, #ff86a7, #ffdce5)',
    margin: '0 auto 30px',
  },
  description: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    maxWidth: '700px',
    margin: '0 auto 40px',
    fontFamily: `'Poppins', sans-serif`,
    color: '#4a4a4a',
  },
  bookingWrapper: {
    background: 'white',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
    padding: '30px',
    margin: '40px auto',
    maxWidth: '900px',
  },
  iframeContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iframe: {
    border: 'none',
    width: '100%',
    height: '700px',
    borderRadius: '10px',
  },
};

export default BookingPage;

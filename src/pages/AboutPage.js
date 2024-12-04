import React from 'react';
import theme from '../styles/theme';

function AboutPage() {
  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        <h1 style={styles.heading}>Meet Claire</h1>
        <div style={styles.decorativeLine}></div>
        
        <div style={styles.content}>
          <div style={styles.imageSection}>
            <img 
              src="/claire-profile.jpg" 
              alt="Claire styling hair"
              style={styles.profileImage}
            />
          </div>
          
          <div style={styles.textSection}>
            <h2 style={styles.subheading}>Master Stylist & Color Specialist</h2>
            <p style={styles.text}>
              With over a decade of experience in the beauty industry, Claire has established herself as one of St. Louis's premier hair stylists. Specializing in color transformations and cutting-edge styling techniques, she brings a perfect blend of artistic vision and technical expertise to every client's experience.
            </p>
            <p style={styles.text}>
              Claire's approach combines classical training with contemporary trends, ensuring each client receives a personalized style that enhances their natural beauty while reflecting their individual personality.
            </p>
            <div style={styles.credentials}>
              <h3 style={styles.credentialsTitle}>Certifications & Training</h3>
              <ul style={styles.credentialsList}>
                <li>Vidal Sassoon Advanced Cutting</li>
                <li>Balayage & Color Specialist</li>
                <li>Extension Master Certification</li>
                <li>Continuing Education Leader</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: theme.colors.background,
    minHeight: '100vh',
    padding: '80px 20px'
  },
  contentWrapper: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  heading: {
    fontFamily: theme.fonts.heading,
    fontSize: '3.5rem',
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: '20px'
  },
  decorativeLine: {
    width: '80px',
    height: '3px',
    background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
    margin: '0 auto 60px'
  },
  content: {
    display: 'flex',
    gap: '60px',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  },
  imageSection: {
    flex: '1 1 400px'
  },
  profileImage: {
    width: '100%',
    borderRadius: '20px',
    boxShadow: theme.shadows.medium
  },
  textSection: {
    flex: '1 1 500px'
  },
  subheading: {
    fontFamily: theme.fonts.heading,
    fontSize: '2rem',
    color: theme.colors.text,
    marginBottom: '30px'
  },
  text: {
    fontFamily: theme.fonts.body,
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: theme.colors.textLight,
    marginBottom: '25px'
  },
  credentials: {
    background: theme.colors.white,
    padding: '30px',
    borderRadius: '15px',
    boxShadow: theme.shadows.soft,
    marginTop: '40px'
  },
  credentialsTitle: {
    fontFamily: theme.fonts.heading,
    fontSize: '1.5rem',
    color: theme.colors.text,
    marginBottom: '20px'
  },
  credentialsList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    fontFamily: theme.fonts.body,
    '& li': {
      marginBottom: '15px',
      paddingLeft: '25px',
      position: 'relative',
      '&:before': {
        content: '"✓"',
        position: 'absolute',
        left: 0,
        color: theme.colors.primary
      }
    }
  }
};

export default AboutPage;


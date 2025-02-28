import React from 'react';
import { Link } from 'react-router-dom';

const MedAlign = () => {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: 0,
        backgroundImage: 'url("/images/doctors_group.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '60vh',
      }}
    >
      <main
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '200px 30px',
          backgroundColor: 'rgba(226, 232, 240, 0.8)',
        }}
      >
        <div style={{ maxWidth: '600px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
            Book Appointment With Trusted Doctors
          </h2>
          <p style={{ fontSize: '1rem', marginBottom: '20px' }}>
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </p>
          <Link to="/book-appointment">
            <button
              style={{
                padding: '10px 20px',
                backgroundColor: '#5a67d8',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Book appointment
            </button>
          </Link>
        </div>
      </main>

      {/* Footer Section */}
      <footer
        style={{
          backgroundColor: '#2d3748',
          color: 'white',
          textAlign: 'center',
          padding: '20px',
          position: 'relative',
          bottom: 0,
          width: '100%',
        }}
      >
        <p style={{ margin: 0 }}>© 2024 MedAlign. All rights reserved.</p>
        <p>
          <Link to="/privacy-policy" style={{ color: 'white', textDecoration: 'none' }}>
            Privacy Policy
          </Link>{' '}
          |{' '}
          <Link to="/terms-of-service" style={{ color: 'white', textDecoration: 'none' }}>
            Terms of Service
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default MedAlign;

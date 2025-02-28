import React from 'react';

const About = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Main Content */}
      <main
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '50px 20px',
          backgroundColor: 'rgba(226, 232, 240, 0.8)',
        }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>About MedAlign</h1>
        <p style={{ fontSize: '1.2rem', textAlign: 'center', maxWidth: '800px' }}>
          MedAlign is dedicated to bringing together a wide range of trusted medical professionals,
          making it easier for you to find, book, and consult with doctors. We understand the
          importance of healthcare, and we strive to make the process of booking appointments as
          seamless and hassle-free as possible. Whether you're looking for a specialist or a general
          practitioner, MedAlign connects you with the right doctors who meet your health needs.
        </p>

        <div style={{ marginTop: '40px', textAlign: 'center', maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Our Mission</h2>
          <p style={{ fontSize: '1rem' }}>
            Our mission is to ensure that everyone has easy access to quality healthcare at their
            fingertips. With MedAlign, patients can browse, select, and book appointments with the
            best doctors across various specialties, all while ensuring safety and convenience. We
            aim to simplify the healthcare journey and provide a platform that builds trust between
            patients and doctors.
          </p>
        </div>

        <div style={{ marginTop: '40px', textAlign: 'center', maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Why Choose Us?</h2>
          <ul style={{ fontSize: '1rem', listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <strong>Trusted Professionals:</strong> We only list doctors with excellent
              qualifications and proven experience.
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Easy Appointment Booking:</strong> Book appointments quickly, without the
              hassle of waiting.
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Wide Range of Specialties:</strong> Access a broad selection of healthcare
              professionals from various fields.
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Convenient & Safe:</strong> Secure online platform for a seamless user
              experience.
            </li>
          </ul>
        </div>
      </main>

      {/* Footer */}
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
          <a href="/privacy-policy" style={{ color: 'white', textDecoration: 'none' }}>
            Privacy Policy
          </a>{' '}
          |{' '}
          <a href="/terms-of-service" style={{ color: 'white', textDecoration: 'none' }}>
            Terms of Service
          </a>
        </p>
      </footer>
    </div>
  );
};

export default About;

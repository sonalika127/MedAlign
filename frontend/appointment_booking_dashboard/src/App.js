import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';  // Ensure correct path
import MedAlign from './Components/PatientDashboard';  // Ensure correct path
import BookAppointment from './Components/AppointmentForm';  // Ensure correct path
import AllDoctors from './Components/AllDoctors';  // Ensure correct path
import DoctorProfile from './Components/DoctorProfile'; // Import DoctorProfile component
import About from './Components/About';  // Import About component
import ContactUs from './Components/ContactUs';
import AuthPage from './Components/AuthPage';
import { AuthProvider } from './Components/AuthContext';

const App = () => {
  return (
    <AuthProvider>
    <Router>
      <Layout>  {/* Wrap routes with Layout component */}
        <Routes>
          {/* Route to Patient Dashboard */}
          <Route path="/" element={<MedAlign />} />
          
          {/* Route to Book Appointment */}
          <Route path="/book-appointment" element={<BookAppointment />} />
          
          {/* Route to All Doctors */}
          <Route path="/all-doctors" element={<AllDoctors />} />
          
          {/* Route to Doctor Profile */}
          <Route path="/doctor/:id" element={<DoctorProfile />} />
          
          {/* Route to About page */}
          <Route path="/about" element={<About />} />

          {/* Route to Contact Us page */}
          <Route path="/contact-us" element={<ContactUs />} />

          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </Layout>
    </Router>
    </AuthProvider>
  );
};

export default App;

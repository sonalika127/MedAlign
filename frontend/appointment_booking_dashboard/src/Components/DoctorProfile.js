import React from 'react';
import { useParams } from 'react-router-dom';

const DoctorProfile = () => {
  const { id } = useParams();

  // Full dataset for doctors
  const doctors = [
    { id: 1, name: 'Dr. John Doe', specialization: 'Cardiologist', experience: '10 years', profilePicture: '/images/d1.jpeg' },
    { id: 2, name: 'Dr. Jane Smith', specialization: 'Dermatologist', experience: '8 years', profilePicture: '/images/d2.jpeg' },
    { id: 3, name: 'Dr. Mike Johnson', specialization: 'Orthopedic', experience: '12 years', profilePicture: '/images/d3.jpeg' },
    { id: 4, name: 'Dr. Emily Davis', specialization: 'Pediatrician', experience: '7 years', profilePicture: '/images/d4.jpeg' },
    { id: 5, name: 'Dr. Sarah Brown', specialization: 'Neurologist', experience: '15 years', profilePicture: '/images/d5.jpeg' },
    { id: 6, name: 'Dr. Chris Wilson', specialization: 'Dentist', experience: '5 years', profilePicture: '/images/d6.jpeg' },
    { id: 7, name: 'Dr. Anna Taylor', specialization: 'Gynecologist', experience: '9 years', profilePicture: '/images/d7.jpeg' },
    { id: 8, name: 'Dr. Robert Miller', specialization: 'Oncologist', experience: '14 years', profilePicture: '/images/d8.jpeg' },
    { id: 9, name: 'Dr. Laura Wilson', specialization: 'Psychiatrist', experience: '6 years', profilePicture: '/images/d9.jpeg' },
    { id: 10, name: 'Dr. Daniel Moore', specialization: 'General Physician', experience: '11 years', profilePicture: '/images/d10.jpeg' },
    { id: 11, name: 'Dr. Olivia Harris', specialization: 'Endocrinologist', experience: '13 years', profilePicture: '/images/d5.jpeg' },
    { id: 12, name: 'Dr. Lucas Carter', specialization: 'Gastroenterologist', experience: '10 years', profilePicture: '/images/d2.jpeg' },
    { id: 13, name: 'Dr. Sophia Wilson', specialization: 'Rheumatologist', experience: '9 years', profilePicture: '/images/d3.jpeg' },
    { id: 14, name: 'Dr. James Taylor', specialization: 'Urologist', experience: '15 years', profilePicture: '/images/d1.jpeg' },
    { id: 15, name: 'Dr. Mia Jackson', specialization: 'Hematologist', experience: '8 years', profilePicture: '/images/d4.jpeg' },
    { id: 16, name: 'Dr. William Lee', specialization: 'Nephrologist', experience: '7 years', profilePicture: '/images/d6.jpeg' },
    { id: 17, name: 'Dr. Ava Martinez', specialization: 'Ophthalmologist', experience: '11 years', profilePicture: '/images/d10.jpeg' },
    { id: 18, name: 'Dr. Ethan White', specialization: 'Allergist', experience: '6 years', profilePicture: '/images/d8.jpeg' },
    { id: 19, name: 'Dr. Isabella Perez', specialization: 'Geriatrician', experience: '14 years', profilePicture: '/images/d7.jpeg' },
    { id: 20, name: 'Dr. Alexander Moore', specialization: 'Plastic Surgeon', experience: '12 years', profilePicture: '/images/d9.jpeg' },
  ];

  // Find the doctor by ID
  const doctor = doctors.find((doctor) => doctor.id === parseInt(id));

  // Return error message if doctor not found
  if (!doctor) {
    return (
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f7fafc', textAlign: 'center' }}>
        <h2 style={{ color: '#e53e3e' }}>Doctor not found</h2>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f7fafc', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ textAlign: 'center', maxWidth: '400px', backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '100%' }}>
        <h1 style={{ marginBottom: '20px', fontSize: '2rem', color: '#2d3748', wordWrap: 'break-word' }}>{doctor.name}'s Profile</h1>
        <img src={doctor.profilePicture} alt={doctor.name} onError={(e) => (e.target.src = '/images/doctor_placeholder.jpg')} style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '20px' }} />
        <h2>{doctor.specialization}</h2>
        <p>Experience: {doctor.experience}</p>
      </div>
    </div>
  );
};

export default DoctorProfile;
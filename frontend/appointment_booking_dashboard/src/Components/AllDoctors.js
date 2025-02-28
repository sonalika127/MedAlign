import React from 'react';
import { Link } from 'react-router-dom';

const AllDoctors = () => {
  // Mock dataset of 20 doctors (10 added)
  const doctors = [
    {
      id: 1,
      name: 'Dr. John Doe',
      specialization: 'Cardiologist',
      experience: '10 years',
      profilePicture: '/images/d1.jpeg',
    },
    {
      id: 2,
      name: 'Dr. Jane Smith',
      specialization: 'Dermatologist',
      experience: '8 years',
      profilePicture: '/images/d2.jpeg',
    },
    {
      id: 3,
      name: 'Dr. Mike Johnson',
      specialization: 'Orthopedic',
      experience: '12 years',
      profilePicture: '/images/d3.jpeg',
    },
    {
      id: 4,
      name: 'Dr. Emily Davis',
      specialization: 'Pediatrician',
      experience: '7 years',
      profilePicture: '/images/d4.jpeg',
    },
    {
      id: 5,
      name: 'Dr. Sarah Brown',
      specialization: 'Neurologist',
      experience: '15 years',
      profilePicture: '/images/d5.jpeg',
    },
    {
      id: 6,
      name: 'Dr. Chris Wilson',
      specialization: 'Dentist',
      experience: '5 years',
      profilePicture: '/images/d6.jpeg',
    },
    {
      id: 7,
      name: 'Dr. Anna Taylor',
      specialization: 'Gynecologist',
      experience: '9 years',
      profilePicture: '/images/d7.jpeg',
    },
    {
      id: 8,
      name: 'Dr. Robert Miller',
      specialization: 'Oncologist',
      experience: '14 years',
      profilePicture: '/images/d8.jpeg',
    },
    {
      id: 9,
      name: 'Dr. Laura Wilson',
      specialization: 'Psychiatrist',
      experience: '6 years',
      profilePicture: '/images/d9.jpeg',
    },
    {
      id: 10,
      name: 'Dr. Daniel Moore',
      specialization: 'General Physician',
      experience: '11 years',
      profilePicture: '/images/d10.jpeg',
    },
    // New 10 doctors added below
    {
      id: 11,
      name: 'Dr. Olivia Harris',
      specialization: 'Endocrinologist',
      experience: '13 years',
      profilePicture: '/images/d5.jpeg',
    },
    {
      id: 12,
      name: 'Dr. Lucas Carter',
      specialization: 'Gastroenterologist',
      experience: '10 years',
      profilePicture: '/images/d2.jpeg',
    },
    {
      id: 13,
      name: 'Dr. Sophia Wilson',
      specialization: 'Rheumatologist',
      experience: '9 years',
      profilePicture: '/images/d3.jpeg',
    },
    {
      id: 14,
      name: 'Dr. James Taylor',
      specialization: 'Urologist',
      experience: '15 years',
      profilePicture: '/images/d1.jpeg',
    },
    {
      id: 15,
      name: 'Dr. Mia Jackson',
      specialization: 'Hematologist',
      experience: '8 years',
      profilePicture: '/images/d4.jpeg',
    },
    {
      id: 16,
      name: 'Dr. William Lee',
      specialization: 'Nephrologist',
      experience: '7 years',
      profilePicture: '/images/d6.jpeg',
    },
    {
      id: 17,
      name: 'Dr. Ava Martinez',
      specialization: 'Ophthalmologist',
      experience: '11 years',
      profilePicture: '/images/d10.jpeg',
    },
    {
      id: 18,
      name: 'Dr. Ethan White',
      specialization: 'Allergist',
      experience: '6 years',
      profilePicture: '/images/d8.jpeg',
    },
    {
      id: 19,
      name: 'Dr. Isabella Perez',
      specialization: 'Geriatrician',
      experience: '14 years',
      profilePicture: '/images/d7.jpeg',
    },
    {
      id: 20,
      name: 'Dr. Alexander Moore',
      specialization: 'Plastic Surgeon',
      experience: '12 years',
      profilePicture: '/images/d9.jpeg',
    },
  ];

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        backgroundColor: '#f7fafc',
        minHeight: '100vh',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          marginBottom: '20px',
          fontSize: '2.5rem',
          color: '#2d3748',
        }}
      >
        Our Doctors
      </h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
        }}
      >
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
            }}
          >
            <img
              src={doctor.profilePicture}
              alt={doctor.name}
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                marginBottom: '15px',
              }}
            />
            <h3 style={{ margin: '10px 0', color: '#2d3748' }}>{doctor.name}</h3>
            <p style={{ margin: '5px 0', color: '#718096' }}>
              {doctor.specialization}
            </p>
            <p style={{ margin: '5px 0', fontSize: '0.9rem', color: '#4a5568' }}>
              Experience: {doctor.experience}
            </p>
            <Link to={`/doctor/${doctor.id}`}>
              <button
                style={{
                  marginTop: '10px',
                  padding: '10px 15px',
                  backgroundColor: '#5a67d8',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                View Profile
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllDoctors;

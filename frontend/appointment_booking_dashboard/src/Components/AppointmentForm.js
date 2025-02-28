import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate hook
import "../css/AppointmentForm.css";

const AppointmentForm = () => {
  const navigate = useNavigate();  // Create the navigate function
  const [appointmentData, setAppointmentData] = useState({
    patientId: '',
    doctorId: '',
    appointmentDate: '',
    appointmentTime: '',
    visitType: '',
    specialization: '',
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission (appointment booking)
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
      });

      if (response.ok) {
        alert('Appointment booked successfully!');
        navigate('/'); // Redirect to home page after successful booking
      } else {
        alert('Error booking appointment. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error booking appointment. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Book Appointment</h2>
      <form className="appointment-form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label>Patient ID:</label>
          <input
            type="number"
            name="patientId"
            value={appointmentData.patientId}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Doctor ID:</label>
          <input
            type="number"
            name="doctorId"
            value={appointmentData.doctorId}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Appointment Date:</label>
          <input
            type="date"
            name="appointmentDate"
            value={appointmentData.appointmentDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Appointment Time:</label>
          <input
            type="time"
            name="appointmentTime"
            value={appointmentData.appointmentTime}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Visit Type:</label>
          <select
            name="visitType"
            value={appointmentData.visitType}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>Select Visit Type</option>
            <option value="Initial Consultation">Initial Consultation</option>
            <option value="Follow-up">Follow-up</option>
            <option value="Routine Checkup">Routine Checkup</option>
          </select>
        </div>
        <div className="form-group">
          <label>Specialization:</label>
          <select
            name="specialization"
            value={appointmentData.specialization}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>Select Specialization</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Dermatology">Dermatology</option>
            <option value="Neurology">Neurology</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="Orthopedics">Orthopedics</option>
          </select>
        </div>
        <div className="form-submit">
          <button type="submit" className="submit-btn">
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;

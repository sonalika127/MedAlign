import React, { useState, useEffect } from "react";
import { Calendar, Plus, X } from "lucide-react";
import "./styling/Appointments.css";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedDateAppointments, setSelectedDateAppointments] = useState([]);

  // Form state
  const [formData, setFormData] = useState({
    patientId: "",
    doctorId: 1,
    appointmentDate: "",
    appointmentTime: "",
    visitType: "",
    specialization: "",
  });

  const visitTypes = [
    "Initial Consultation",
    "Follow-Up",
    "Emergency",
    "Annual Check-up",
    "Specialist Consultation",
  ];

  const specializations = [
    "Cardiology",
    "Dermatology",
    "Neurology",
    "Pediatrics",
    "Gynecology",
  ];

  const generateCalendarDates = () => {
    const today = new Date();
    const dates = [];
    const year = today.getFullYear();
    const month = today.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    // Add previous month's days
    for (let i = 0; i < firstDay.getDay(); i++) {
      const date = new Date(year, month, -i);
      dates.unshift(date);
    }

    // Add current month's days
    for (let i = 1; i <= lastDay.getDate(); i++) {
      dates.push(new Date(year, month, i));
    }

    // Add next month's days
    const remainingDays = 42 - dates.length;
    for (let i = 1; i <= remainingDays; i++) {
      dates.push(new Date(year, month + 1, i));
    }

    return dates;
  };

  const handleDateSelect = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    setSelectedDate(date);
    const dateAppointments = appointments.filter(
      (app) => app.appointmentDate === formattedDate
    );
    setSelectedDateAppointments(dateAppointments);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setAppointments((prev) => [...prev, data]);
        setShowModal(false);
        setFormData({
          patientId: "",
          doctorId: 1,
          appointmentDate: "",
          appointmentTime: "",
          visitType: "",
          specialization: "",
        });
      }
    } catch (error) {
      console.error("Error creating appointment:", error);
    }
  };

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/appointments/doctor/1"
        );
        if (response.ok) {
          const data = await response.json();
          setAppointments(data);
        }
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  const hasAppointmentsOnDate = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    return appointments.some((app) => app.appointmentDate === formattedDate);
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <div className="calendar-title">
          <Calendar className="calendar-icon" />
          <h2>Doctor's Calendar</h2>
        </div>
        <button className="add-button" onClick={() => setShowModal(true)}>
          <Plus />
          Add Appointment
        </button>
      </div>

      <div className="calendar-grid">
        <div className="calendar-section">
          <div className="weekdays-header">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="weekday">
                {day}
              </div>
            ))}
          </div>
          <div className="dates-grid">
            {generateCalendarDates().map((date, index) => {
              const isSelected =
                selectedDate &&
                date.toDateString() === selectedDate.toDateString();
              const hasAppointments = hasAppointmentsOnDate(date);
              const isCurrentMonth = date.getMonth() === new Date().getMonth();

              return (
                <button
                  key={index}
                  onClick={() => handleDateSelect(date)}
                  className={`date-cell ${isSelected ? "selected" : ""} 
                    ${hasAppointments ? "has-appointments" : ""} 
                    ${isCurrentMonth ? "current-month" : "other-month"}`}
                >
                  {date.getDate()}
                  {hasAppointments && <span className="appointment-dot" />}
                </button>
              );
            })}
          </div>
        </div>

        <div className="appointments-section">
          <h3>
            {selectedDate
              ? selectedDate.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "Select a date to view appointments"}
          </h3>
          <div className="appointments-list">
            {selectedDateAppointments.map((appointment, index) => (
              <div key={index} className="appointment-card">
                <div className="appointment-info">
                  <p className="patient-id">
                    Patient ID: {appointment.patientId}
                  </p>
                  <p className="appointment-time">
                    {new Date(
                      `2000-01-01T${appointment.appointmentTime}`
                    ).toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </p>
                  <p className="visit-type">{appointment.visitType}</p>
                  <p className="specialization">{appointment.specialization}</p>
                </div>
                <span className="status-badge">
                  {appointment.status || "Upcoming"}
                </span>
              </div>
            ))}
            {selectedDateAppointments.length === 0 && (
              <p className="no-appointments">
                {selectedDate
                  ? "No appointments scheduled for this date."
                  : "Select a date to view appointments"}
              </p>
            )}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>Schedule New Appointment</h3>
              <button
                className="close-button"
                onClick={() => setShowModal(false)}
              >
                <X />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="appointment-form">
              <div className="form-group">
                <label>Patient ID</label>
                <input
                  type="number"
                  name="patientId"
                  value={formData.patientId}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Date</label>
                <input
                  type="date"
                  name="appointmentDate"
                  value={formData.appointmentDate}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Time</label>
                <input
                  type="time"
                  name="appointmentTime"
                  value={formData.appointmentTime}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Visit Type</label>
                <select
                  name="visitType"
                  value={formData.visitType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Visit Type</option>
                  {visitTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Specialization</label>
                <select
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Specialization</option>
                  {specializations.map((spec) => (
                    <option key={spec} value={spec}>
                      {spec}
                    </option>
                  ))}
                </select>
              </div>

              <button type="submit" className="submit-button">
                Schedule Appointment
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointments;

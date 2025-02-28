import React, { useState } from "react";
import "./styling/PatientList.css"; // Style file to match the messages layout

const PatientList = ({ patients, onSelectPatient }) => {
  return (
    <div className="patient-list">
      {patients.map((patient, index) => (
        <div
          key={index}
          className="patient-item"
          onClick={() => onSelectPatient(patient)}
        >
          <h4>{patient.name}</h4>
          <p>{patient.appointment}</p>
        </div>
      ))}
    </div>
  );
};

export default PatientList;

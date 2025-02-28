import React from "react";
import "./styling/PatientDetails.css"; // Style to match the details section

const PatientDetails = ({ selectedPatient }) => {
  if (!selectedPatient) {
    return (
      <div className="patient-details">Select a patient to view details</div>
    );
  }

  return (
    <div className="patient-details">
      <h2>{selectedPatient.name}</h2>
      <p>{selectedPatient.location}</p>
      <p>SEX: {selectedPatient.sex}</p>
      <p>AGE: {selectedPatient.age}</p>
      <p>HEIGHT: {selectedPatient.height}</p>
      <p>WEIGHT: {selectedPatient.weight}</p>
      <p>ETHNICITY: {selectedPatient.ethnicity}</p>
      <p>BODY TYPE: {selectedPatient.bodyType}</p>
      <p>SMOKING: {selectedPatient.smoking}</p>
      <p>ALCOHOL: {selectedPatient.alcohol}</p>
      <p>DRUGS: {selectedPatient.drugs}</p>

      {/* Stats section */}
      <div className="stats-section">
        <div className="stat">WEIGHT: {selectedPatient.weight} kg</div>
        <div className="stat">HEART RATE: {selectedPatient.heartRate} bpm</div>
        <div className="stat">
          BLOOD PRESSURE: {selectedPatient.bloodPressure}
        </div>
        <div className="stat">
          BODY TEMP: {selectedPatient.bodyTemperature} °C
        </div>
        <div className="stat">SLEEP TIME: {selectedPatient.sleepTime} hr</div>
        <div className="stat">
          ACTIVITIES: {selectedPatient.activities} kcal
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;

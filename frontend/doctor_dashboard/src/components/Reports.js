import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaSave,
  FaTimes,
  FaThermometerHalf,
  FaUserMd,
  FaHospital,
} from "react-icons/fa";
import "./styling/Reports.css";

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [patientId, setPatientId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_BASE_URL = "http://localhost:8762/api/health-records";

  const initialReportState = {
    patientId: "",
    doctorName: "",
    doctorSpeciality: "",
    clinicAddress: "",
    provisionalDiagnosis: "",
    bloodPressure: "",
    temperature: 0,
    spo2: 0,
    roomAir: "",
    chiefComplaint: "",
    generalExamination: "",
    systemicExamination: "",
    dietAdvice: "",
    medicationDetails: "",
    investigationOrder: "",
    visitDate: new Date().toISOString().split("T")[0],
  };

  const [updatedReport, setUpdatedReport] = useState(initialReportState);
  const [newReport, setNewReport] = useState(initialReportState);

  useEffect(() => {
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["Accept"] = "application/json";
  }, []);

  useEffect(() => {
    if (patientId.trim()) {
      fetchReports(patientId);
    } else {
      setReports([]);
      setSelectedReport(null);
    }
  }, [patientId]);

  const fetchReports = async (patientId) => {
    setLoading(true);
    setError(null);
    try {
      const formattedPatientId = patientId.toUpperCase();
      const response = await axios.get(
        `${API_BASE_URL}/patient/${formattedPatientId}`
      );

      if (response.status === 200) {
        const reportsData = Array.isArray(response.data)
          ? response.data
          : [response.data];
        setReports(reportsData);
        setError(null);
      }
    } catch (err) {
      console.error("Error fetching reports:", err);
      setError(
        err.response?.data?.message ||
          "Failed to fetch reports. Please try again."
      );
      setReports([]);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateReport = async () => {
    setLoading(true);
    setError(null);
    try {
      const reportData = {
        ...newReport,
        patientId: patientId.toUpperCase(),
        visitDate: new Date(newReport.visitDate).toISOString(),
        temperature: parseFloat(newReport.temperature),
        spo2: parseInt(newReport.spo2, 10),
      };

      const response = await axios.post(API_BASE_URL, reportData);

      if (response.status === 200 || response.status === 201) {
        setReports([...reports, response.data]);
        setIsAdding(false);
        setNewReport(initialReportState);
        setError(null);
      }
    } catch (err) {
      console.error("Error creating report:", err);
      setError(
        err.response?.data?.message ||
          "Failed to create report. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateReport = async () => {
    setLoading(true);
    setError(null);
    try {
      const reportData = {
        ...updatedReport,
        patientId: selectedReport.patientId,
        visitDate: new Date(updatedReport.visitDate).toISOString(),
        temperature: parseFloat(updatedReport.temperature),
        spo2: parseInt(updatedReport.spo2, 10),
      };

      const response = await axios.put(
        `${API_BASE_URL}/${selectedReport.id}`,
        reportData
      );

      if (response.status === 200) {
        setReports(
          reports.map((report) =>
            report.id === selectedReport.id ? response.data : report
          )
        );
        setSelectedReport(response.data);
        setIsEditing(false);
        setError(null);
      }
    } catch (err) {
      console.error("Error updating report:", err);
      setError(
        err.response?.data?.message ||
          "Failed to update report. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteReport = async (reportId) => {
    if (window.confirm("Are you sure you want to delete this report?")) {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.delete(`${API_BASE_URL}/${reportId}`);

        if (response.status === 200 || response.status === 204) {
          setReports(reports.filter((report) => report.id !== reportId));
          setSelectedReport(null);
          setError(null);
        }
      } catch (err) {
        console.error("Error deleting report:", err);
        setError(
          err.response?.data?.message ||
            "Failed to delete report. Please try again."
        );
      } finally {
        setLoading(false);
      }
    }
  };

  const renderForm = (data, setData, submitHandler, mode) => (
    <div className="medical-form">
      <div className="form-section">
        <h3>
          <FaUserMd /> Patient Information
        </h3>
        <div className="form-row">
          <div className="form-group">
            <label>Patient ID</label>
            <input
              type="text"
              value={mode === "add" ? patientId : data.patientId}
              disabled={true}
            />
          </div>
          <div className="form-group">
            <label>Visit Date</label>
            <input
              type="date"
              value={data.visitDate}
              onChange={(e) => setData({ ...data, visitDate: e.target.value })}
            />
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3>
          <FaThermometerHalf /> Vital Signs
        </h3>
        <div className="form-row">
          <div className="form-group">
            <label>Blood Pressure</label>
            <input
              type="text"
              value={data.bloodPressure}
              onChange={(e) =>
                setData({ ...data, bloodPressure: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Temperature (°C)</label>
            <input
              type="number"
              step="0.1"
              value={data.temperature}
              onChange={(e) =>
                setData({ ...data, temperature: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>SPO2 (%)</label>
            <input
              type="number"
              value={data.spo2}
              onChange={(e) => setData({ ...data, spo2: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Room Air</label>
            <input
              type="text"
              value={data.roomAir}
              onChange={(e) => setData({ ...data, roomAir: e.target.value })}
            />
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3>
          <FaHospital /> Clinical Information
        </h3>
        <div className="form-group">
          <label>Chief Complaint</label>
          <textarea
            value={data.chiefComplaint}
            onChange={(e) =>
              setData({ ...data, chiefComplaint: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label>Provisional Diagnosis</label>
          <textarea
            value={data.provisionalDiagnosis}
            onChange={(e) =>
              setData({ ...data, provisionalDiagnosis: e.target.value })
            }
          />
        </div>
      </div>

      <div className="form-section">
        <h3>Examination Details</h3>
        <div className="form-group">
          <label>General Examination</label>
          <textarea
            value={data.generalExamination}
            onChange={(e) =>
              setData({ ...data, generalExamination: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label>Systemic Examination</label>
          <textarea
            value={data.systemicExamination}
            onChange={(e) =>
              setData({ ...data, systemicExamination: e.target.value })
            }
          />
        </div>
      </div>

      <div className="form-section">
        <h3>Treatment & Advice</h3>
        <div className="form-group">
          <label>Medication Details</label>
          <textarea
            value={data.medicationDetails}
            onChange={(e) =>
              setData({ ...data, medicationDetails: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label>Diet Advice</label>
          <textarea
            value={data.dietAdvice}
            onChange={(e) => setData({ ...data, dietAdvice: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Investigation Order</label>
          <textarea
            value={data.investigationOrder}
            onChange={(e) =>
              setData({ ...data, investigationOrder: e.target.value })
            }
          />
        </div>
      </div>

      <div className="form-section">
        <h3>Doctor Information</h3>
        <div className="form-row">
          <div className="form-group">
            <label>Doctor Name</label>
            <input
              type="text"
              value={data.doctorName}
              onChange={(e) => setData({ ...data, doctorName: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Speciality</label>
            <input
              type="text"
              value={data.doctorSpeciality}
              onChange={(e) =>
                setData({ ...data, doctorSpeciality: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Clinic Address</label>
            <input
              type="text"
              value={data.clinicAddress}
              onChange={(e) =>
                setData({ ...data, clinicAddress: e.target.value })
              }
            />
          </div>
        </div>
      </div>

      <div className="form-buttons">
        <button className="btn save-btn" onClick={submitHandler}>
          <FaSave /> {mode === "edit" ? "Save Changes" : "Create Report"}
        </button>
        <button
          className="btn cancel-btn"
          onClick={() =>
            mode === "edit" ? setIsEditing(false) : setIsAdding(false)
          }
        >
          <FaTimes /> Cancel
        </button>
      </div>
    </div>
  );

  return (
    <div className="reports-container">
      <div className="reports-sidebar">
        <h2>Medical Records</h2>
        <div className="patient-search">
          <input
            type="text"
            placeholder="Enter Patient ID (e.g., P12345)"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
            className={error ? "error" : ""}
          />
          <button
            className="add-report-btn"
            onClick={() => {
              setNewReport({
                ...initialReportState,
                patientId: patientId.toUpperCase(),
              });
              setIsAdding(true);
            }}
            disabled={!patientId.trim() || loading}
          >
            <FaPlus /> New Record
          </button>
        </div>

        {loading && <div className="loading">Loading reports...</div>}
        {error && <div className="error-message">{error}</div>}

        <div className="reports-list">
          {reports.length === 0 && !loading && patientId.trim() && !error && (
            <div className="no-reports">No reports found for this patient.</div>
          )}
          {reports.map((report) => (
            <div
              key={report.id}
              className={`report-card ${
                selectedReport?.id === report.id ? "active" : ""
              }`}
              onClick={() => setSelectedReport(report)}
            >
              <div className="report-card-header">
                <span className="visit-date">
                  {new Date(report.visitDate).toLocaleDateString()}
                </span>
                <span className="doctor-name">{report.doctorName}</span>
              </div>
              <div className="report-card-body">
                <p className="diagnosis">{report.provisionalDiagnosis}</p>
              </div>
              <div className="report-card-footer">
                <span className="vitals">
                  BP: {report.bloodPressure} | Temp: {report.temperature}°C
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="report-details">
        {isAdding ? (
          renderForm(newReport, setNewReport, handleCreateReport, "add")
        ) : selectedReport ? (
          isEditing ? (
            renderForm(
              updatedReport,
              setUpdatedReport,
              handleUpdateReport,
              "edit"
            )
          ) : (
            <div className="report-view">
              <div className="report-header">
                <div className="patient-info">
                  <h2>Medical Report</h2>
                  <p>Patient ID: {selectedReport.patientId}</p>
                  <p>
                    Visit Date:{" "}
                    {new Date(selectedReport.visitDate).toLocaleDateString()}
                  </p>
                </div>
                <div className="report-actions">
                  <button
                    className="btn edit-btn"
                    onClick={() => {
                      setUpdatedReport(selectedReport);
                      setIsEditing(true);
                    }}
                  >
                    <FaEdit /> Edit
                  </button>
                  <button
                    className="btn delete-btn"
                    onClick={() => handleDeleteReport(selectedReport.id)}
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              </div>

              <div className="vital-signs">
                <div className="vital-item">
                  <label>Blood Pressure</label>
                  <span>{selectedReport.bloodPressure}</span>
                </div>
                <div className="vital-item">
                  <label>Temperature</label>
                  <span>{selectedReport.temperature}°C</span>
                </div>
                <div className="vital-item">
                  <label>SPO2</label>
                  <span>{selectedReport.spo2}%</span>
                </div>
                <div className="vital-item">
                  <label>Room Air</label>
                  <span>{selectedReport.roomAir}</span>
                </div>
              </div>

              <div className="report-section">
                <h3>Clinical Information</h3>
                <div className="info-group">
                  <label>Chief Complaint</label>
                  <p>{selectedReport.chiefComplaint}</p>
                </div>
                <div className="info-group">
                  <label>Provisional Diagnosis</label>
                  <p>{selectedReport.provisionalDiagnosis}</p>
                </div>
              </div>

              <div className="report-section">
                <h3>Examination</h3>
                <div className="info-group">
                  <label>General Examination</label>
                  <p>{selectedReport.generalExamination}</p>
                </div>
                <div className="info-group">
                  <label>Systemic Examination</label>
                  <p>{selectedReport.systemicExamination}</p>
                </div>
              </div>

              <div className="report-section">
                <h3>Treatment & Advice</h3>
                <div className="info-group">
                  <label>Medication Details</label>
                  <p>{selectedReport.medicationDetails}</p>
                </div>
                <div className="info-group">
                  <label>Diet Advice</label>
                  <p>{selectedReport.dietAdvice}</p>
                </div>
                <div className="info-group">
                  <label>Investigation Order</label>
                  <p>{selectedReport.investigationOrder}</p>
                </div>
              </div>

              <div className="report-footer">
                <div className="doctor-info">
                  <h3>Doctor Information</h3>
                  <div className="info-group">
                    <label>Doctor Name</label>
                    <p>Dr. {selectedReport.doctorName}</p>
                  </div>
                  <div className="info-group">
                    <label>Speciality</label>
                    <p>{selectedReport.doctorSpeciality}</p>
                  </div>
                  <div className="info-group">
                    <label>Clinic Address</label>
                    <p>{selectedReport.clinicAddress}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        ) : (
          <div className="no-report-selected">
            <h3>No Report Selected</h3>
            <p>Please select a report from the sidebar or create a new one.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reports;

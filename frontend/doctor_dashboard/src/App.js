import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/SideBar";
import DoctorDashboard from "./pages/DoctorDashboard";
import PatientList from "./components/PatientList";
import PatientDetails from "./components/PatientDetails";
import Patient from "./components/Patients";
import Messages from "./components/Messages";
import Appointments from "./components/Appointments";
import Assignments from "./components/Assignments";
import Reports from "./components/Reports";
import AuthPage from "./components/AuthPage";
import "./App.css";

// Patient Dummy Data
const patients = [
  {
    id: 1,
    name: "John Smith",
    location: "New York City, NY, USA",
    photo: "https://via.placeholder.com/150",
    demographics: {
      sex: "Male",
      age: 38,
      height: 180,
      weight: 125,
      ethnicity: "White",
      bodyType: "Endomorph",
    },
    lifestyle: {
      smoking: "Yes",
      alcohol: "Moderate",
      drugs: "No",
    },
    contactInfo: {
      phone: "(102) 123-4567",
      email: "hello@johnsmith.com",
    },
    stats: {
      weight: {
        value: 125,
        unit: "kg",
        lastUpdate: "12 hours ago",
      },
      heartRate: {
        value: 80,
        unit: "bpm",
        lastUpdate: "1 min ago",
      },
      bloodPressure: {
        value: "120/80",
        unit: "mm Hg",
        lastUpdate: "12 hours ago",
      },
      bodyTemperature: {
        value: 36.93,
        unit: "°C",
        lastUpdate: "12 hours ago",
      },
      sleepTime: {
        value: 6.43,
        unit: "hr",
        lastUpdate: "30 min ago",
      },
      activities: {
        value: 386,
        unit: "kcal",
        lastUpdate: "30 min ago",
      },
    },
  },
  {
    id: 2,
    name: "Emily Johnson",
    location: "San Francisco, CA, USA",
    photo: "https://via.placeholder.com/150",
    demographics: {
      sex: "Female",
      age: 29,
      height: 165,
      weight: 58,
      ethnicity: "Asian",
      bodyType: "Ectomorph",
    },
    lifestyle: {
      smoking: "No",
      alcohol: "Occasional",
      drugs: "No",
    },
    contactInfo: {
      phone: "(415) 987-6543",
      email: "emily.johnson@email.com",
    },
    stats: {
      weight: {
        value: 58,
        unit: "kg",
        lastUpdate: "1 day ago",
      },
      heartRate: {
        value: 72,
        unit: "bpm",
        lastUpdate: "3 hours ago",
      },
      bloodPressure: {
        value: "110/70",
        unit: "mm Hg",
        lastUpdate: "1 day ago",
      },
      bodyTemperature: {
        value: 37.02,
        unit: "°C",
        lastUpdate: "6 hours ago",
      },
      sleepTime: {
        value: 7.5,
        unit: "hr",
        lastUpdate: "1 day ago",
      },
      activities: {
        value: 450,
        unit: "kcal",
        lastUpdate: "2 hours ago",
      },
    },
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    location: "Chicago, IL, USA",
    photo: "https://via.placeholder.com/150",
    demographics: {
      sex: "Male",
      age: 45,
      height: 175,
      weight: 90,
      ethnicity: "Hispanic",
      bodyType: "Mesomorph",
    },
    lifestyle: {
      smoking: "No",
      alcohol: "Rarely",
      drugs: "No",
    },
    contactInfo: {
      phone: "(312) 456-7890",
      email: "michael.rodriguez@email.com",
    },
    stats: {
      weight: {
        value: 90,
        unit: "kg",
        lastUpdate: "3 days ago",
      },
      heartRate: {
        value: 75,
        unit: "bpm",
        lastUpdate: "5 hours ago",
      },
      bloodPressure: {
        value: "130/85",
        unit: "mm Hg",
        lastUpdate: "1 day ago",
      },
      bodyTemperature: {
        value: 36.7,
        unit: "°C",
        lastUpdate: "12 hours ago",
      },
      sleepTime: {
        value: 6.8,
        unit: "hr",
        lastUpdate: "1 day ago",
      },
      activities: {
        value: 320,
        unit: "kcal",
        lastUpdate: "4 hours ago",
      },
    },
  },
];
// Retain the ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("jwtToken");
  return isAuthenticated ? children : <Navigate to="/auth" />;
};

function App() {
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleSectionChange = (section) => {
    setActiveSection(section);
    setSelectedPatient(null);
  };

  const renderDashboardContent = () => {
    switch (activeSection) {
      case "Dashboard":
        return <DoctorDashboard />;
      case "Patients":
        return (
          <div className="patient-management-container">
            <div className="patient-list-wrapper">
              <PatientList
                patients={patients}
                onSelectPatient={setSelectedPatient}
                className="patient-list"
              />
            </div>
            {selectedPatient && (
              <div className="patient-details-wrapper">
                {/* Replace PatientDetails with our new Patient component */}
                <Patient
                  patient={selectedPatient}
                  className="patient-details"
                />
              </div>
            )}
          </div>
        );
      case "Messages":
        return <Messages />;
      case "Appointments":
        return <Appointments />;
      case "Assignments":
        return <Assignments />;
      case "Reports":
        return <Reports />;
      default:
        return <DoctorDashboard />;
    }
  };

  const DashboardLayout = () => (
    <div className="dashboard-container">
      <Sidebar
        handleSectionChange={handleSectionChange}
        activeSection={activeSection}
      />
      <main className="dashboard-content">{renderDashboardContent()}</main>
    </div>
  );

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Navigate to="/auth" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

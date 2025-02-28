import React from "react";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";

const DoctorDashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flexGrow: 1 }}>
        <Header />
        <Dashboard />
      </div>
    </div>
  );
};

export default DoctorDashboard;

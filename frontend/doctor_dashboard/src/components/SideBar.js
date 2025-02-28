import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import MessageIcon from "@mui/icons-material/Message";
import EventIcon from "@mui/icons-material/Event";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { BarChart2Icon } from "lucide-react";

const Sidebar = ({ handleSectionChange }) => {
  return (
    <div
      style={{
        width: "250px",
        background: "#f8f9fa",
        height: "100vh",
        padding: "20px",
      }}
    >
      {/* Updated Logo Section */}
      <div
        className="mb-8"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img
          src="/medalign-logo.png"
          alt="Logo"
          style={{
            width: "300px", // Adjust width as needed
            height: "64px", // Adjust height as needed
            // Ensures the logo doesn't get distorted
          }}
        />
      </div>
    <div
      style={{
        width: "250px",
        background: "#f8f9fa",

        padding: "20px",
      }}
    ></div>
      <List>
        <ListItem button onClick={() => handleSectionChange("Dashboard")}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => handleSectionChange("Patients")}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Patients" />
        </ListItem>
        <ListItem button onClick={() => handleSectionChange("Messages")}>
          <ListItemIcon>
            <MessageIcon />
          </ListItemIcon>
          <ListItemText primary="Messages" />
        </ListItem>
        <ListItem button onClick={() => handleSectionChange("Appointments")}>
          <ListItemIcon>
            <EventIcon />
          </ListItemIcon>
          <ListItemText primary="Appointments" />
        </ListItem>
        <ListItem button onClick={() => handleSectionChange("Assignments")}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Assignments" />
        </ListItem>
        <ListItem button onClick={() => handleSectionChange("Reports")}>
          <ListItemIcon>
            <BarChart2Icon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;

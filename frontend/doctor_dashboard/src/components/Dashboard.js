import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
  Checkbox,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  Tooltip,
  IconButton,
} from "@mui/material";
import {
  CalendarToday as CalendarIcon,
  CheckCircleOutline as CheckIcon,
  MoreHoriz as DetailsIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import "./styling/Dashboard.css";

const Dashboard = () => {
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleTaskToggle = (taskIndex) => {
    setCompletedTasks((prev) =>
      prev.includes(taskIndex)
        ? prev.filter((index) => index !== taskIndex)
        : [...prev, taskIndex]
    );
  };

  const appointments = [
    {
      time: "9:00 AM",
      name: "John Smith",
      type: "Regular Visit",
      details: "General Checkup",
      color: "#3182ce",
    },
    {
      time: "10:30 AM",
      name: "Annabelle Evans",
      type: "Procedure",
      details: "Surgical Procedure",
      color: "#ED8936",
    },
    {
      time: "2:00 PM",
      name: "Charlyon Bonimy",
      type: "First Time Visit",
      details: "Initial Consultation",
      color: "#48BB78",
    },
    {
      time: "4:30 PM",
      name: "Ashly Anderson",
      type: "Consultation",
      details: "Follow-up",
      color: "#9F7AEA",
    },
  ];

  const tasks = [
    {
      title: "Review John Smith Results",
      deadline: "Due today by 3:00 PM",
    },
    {
      title: "Complete Prescription for Melanie Thompson",
      deadline: "Due today by 5:00 PM",
    },
    {
      title: "Send Lab Results to All Participants",
      deadline: "Ongoing Task",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="dashboard-container"
    >
      <Grid container spacing={4}>
        {/* Today's Appointments */}
        <Grid item xs={12} md={8}>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="appointments-card">
              <CardContent>
                <div className="section-header">
                  <CalendarIcon className="section-icon" />
                  <Typography variant="h6">Today's Appointments</Typography>
                </div>
                <Divider sx={{ my: 2 }} />
                <List>
                  {appointments.map((appointment, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <ListItem
                        className="appointment"
                        style={{ borderLeftColor: appointment.color }}
                      >
                        <Avatar
                          sx={{
                            bgcolor: `${appointment.color}15`,
                            color: appointment.color,
                            mr: 2,
                          }}
                        >
                          {appointment.name[0]}
                        </Avatar>
                        <ListItemText
                          primary={`${appointment.time} - ${appointment.name} · ${appointment.type}`}
                          secondary={appointment.details}
                        />
                        <Tooltip title="More Details">
                          <IconButton size="small">
                            <DetailsIcon />
                          </IconButton>
                        </Tooltip>
                      </ListItem>
                    </motion.div>
                  ))}
                </List>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* Tasks Section */}
        <Grid item xs={12} md={4}>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="tasks-card">
              <CardContent>
                <div className="section-header">
                  <CheckIcon className="section-icon" />
                  <Typography variant="h6">Tasks</Typography>
                </div>
                <Divider sx={{ my: 2 }} />
                <List>
                  {tasks.map((task, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <ListItem className="task">
                        <ListItemIcon>
                          <Checkbox
                            checked={completedTasks.includes(index)}
                            onChange={() => handleTaskToggle(index)}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={task.title}
                          secondary={task.deadline}
                          sx={{
                            textDecoration: completedTasks.includes(index)
                              ? "line-through"
                              : "none",
                          }}
                        />
                        <Typography className="details">Details</Typography>
                      </ListItem>
                    </motion.div>
                  ))}
                </List>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default Dashboard;

import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Grid,
  Button,
  Divider,
} from "@mui/material";
import {
  AssignmentInd as ProfileIcon,
  MessageOutlined as MessageIcon,
  CalendarTodayOutlined as AppointmentIcon,
  FavoriteOutlined as HeartIcon,
  DeviceThermostatOutlined as TemperatureIcon,
  DirectionsRunOutlined as ActivityIcon,
  BedOutlined as SleepIcon,
  MonitorHeartOutlined as BloodPressureIcon,
} from "@mui/icons-material";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const Patient = ({ patient }) => {
  if (!patient) return null;

  const mockHealthData = [
    {
      name: "Day 1",
      heartRate: 75,
      weight: patient.stats.weight.value,
      bloodPressure: 118,
    },
    {
      name: "Day 2",
      heartRate: 80,
      weight: patient.stats.weight.value - 1,
      bloodPressure: 122,
    },
    {
      name: "Day 3",
      heartRate: 78,
      weight: patient.stats.weight.value - 2,
      bloodPressure: 120,
    },
    {
      name: "Day 4",
      heartRate: 82,
      weight: patient.stats.weight.value + 1,
      bloodPressure: 119,
    },
    {
      name: "Day 5",
      heartRate: 76,
      weight: patient.stats.weight.value,
      bloodPressure: 121,
    },
  ];

  const healthStats = [
    {
      icon: <HeartIcon color="secondary" />,
      label: "Heart Rate",
      value: `${patient.stats.heartRate.value} ${patient.stats.heartRate.unit}`,
      color: "secondary.main",
    },
    {
      icon: <BloodPressureIcon color="error" />,
      label: "Blood Pressure",
      value: `${patient.stats.bloodPressure.value} ${patient.stats.bloodPressure.unit}`,
      color: "error.main",
    },
    {
      icon: <TemperatureIcon color="info" />,
      label: "Body Temp",
      value: `${patient.stats.bodyTemperature.value} ${patient.stats.bodyTemperature.unit}`,
      color: "info.main",
    },
    {
      icon: <ActivityIcon color="success" />,
      label: "Activities",
      value: `${patient.stats.activities.value} ${patient.stats.activities.unit}`,
      color: "success.main",
    },
    {
      icon: <SleepIcon color="warning" />,
      label: "Sleep Time",
      value: `${patient.stats.sleepTime.value} ${patient.stats.sleepTime.unit}`,
      color: "warning.main",
    },
  ];

  const demographicDetails = [
    { label: "Age", value: `${patient.demographics.age}` },
    { label: "Height", value: `${patient.demographics.height} cm` },
    { label: "Weight", value: `${patient.demographics.weight} kg` },
    { label: "Body Type", value: patient.demographics.bodyType },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #f0f2f5 50%, #e6e9ef 100%)",
        minHeight: "100vh",
        p: 4,
      }}
    >
      <Grid container spacing={4}>
        {/* Patient Profile Section */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: "0 10px 24px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease",
              "&:hover": { transform: "scale(1.02)" },
            }}
          >
            <CardContent sx={{ textAlign: "center", p: 3 }}>
              <Avatar
                src={patient.photo}
                sx={{
                  width: 120,
                  height: 120,
                  margin: "0 auto 15px",
                  border: "4px solid #3182ce",
                }}
              />
              <Typography variant="h5" fontWeight="bold" color="primary">
                {patient.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {patient.location}
              </Typography>

              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                <Button
                  variant="outlined"
                  startIcon={<ProfileIcon />}
                  color="primary"
                >
                  Profile
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<MessageIcon />}
                  color="secondary"
                >
                  Message
                </Button>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Grid container spacing={2} sx={{ textAlign: "left" }}>
                {demographicDetails.map((detail, index) => (
                  <Grid item xs={6} key={index}>
                    <Typography variant="body2" color="textSecondary">
                      {detail.label}
                    </Typography>
                    <Typography variant="subtitle2">{detail.value}</Typography>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Health Stats Section */}
        <Grid item xs={12} md={8}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
              height: "100%",
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" color="primary" gutterBottom>
                Health Overview
              </Typography>
              <Grid container spacing={3}>
                {healthStats.map((stat, index) => (
                  <Grid item xs={12} sm={4} key={index}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        p: 2,
                        borderRadius: 2,
                        background: "linear-gradient(145deg, #f0f5fc, #e6eaf3)",
                        boxShadow:
                          "4px 4px 10px #d1d9e6, -4px -4px 10px #ffffff",
                      }}
                    >
                      {React.cloneElement(stat.icon, {
                        sx: { fontSize: 40, mb: 1 },
                      })}
                      <Typography variant="body2" color="textSecondary">
                        {stat.label}
                      </Typography>
                      <Typography variant="h6" color={stat.color}>
                        {stat.value}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ height: 200, mt: 3 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockHealthData}>
                    <Line
                      type="monotone"
                      dataKey="heartRate"
                      stroke="#3182ce"
                      strokeWidth={3}
                    />
                    <Line
                      type="monotone"
                      dataKey="weight"
                      stroke="#48BB78"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Patient;

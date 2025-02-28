import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  IconButton,
  LinearProgress,
  Pagination,
  Box,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./styling/Assignments.css";

const assignmentsData = [
  {
    name: "Annual Check",
    assigned: "12.15.2019, 09:08 AM",
    participants: 350,
    progress: 25,
  },
  {
    name: "Quarterly Update",
    assigned: "12.10.2019, 03:59 PM",
    participants: 221,
    progress: 25,
  },
  {
    name: "Update General Information",
    assigned: "12.05.2019, 08:10 AM",
    participants: 350,
    progress: 100,
  },
  {
    name: "Screening Form Stage 4",
    assigned: "11.29.2019, 08:45 AM",
    participants: 350,
    progress: 31,
  },
  {
    name: "Female Screening",
    assigned: "11.25.2019, 11:40 AM",
    participants: 190,
    progress: 75,
  },
  {
    name: "Screening Form Stage 2",
    assigned: "11.08.2019, 12:30 PM",
    participants: 350,
    progress: 50,
  },
  {
    name: "Cancer Check",
    assigned: "10.29.2019, 09:15 AM",
    participants: 240,
    progress: 100,
  },
  {
    name: "Diabetes Check",
    assigned: "10.29.2019, 09:05 AM",
    participants: 240,
    progress: 90,
  },
  {
    name: "Screening Form Stage 1",
    assigned: "10.20.2019, 07:00 PM",
    participants: 350,
    progress: 100,
  },
  {
    name: "Preliminary Questionnaire",
    assigned: "09.09.2019, 12:30 PM",
    participants: 350,
    progress: 100,
  },
];

const Assignments = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="assignments-container">
      <div className="header">
        <Typography variant="h6">1–10 of 12 Assignments</Typography>
        <Button variant="contained" color="primary">
          Create Assignment
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Assigned</TableCell>
              <TableCell>Participants</TableCell>
              <TableCell>Progress</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assignmentsData.map((assignment, index) => (
              <TableRow key={index}>
                <TableCell>{assignment.name}</TableCell>
                <TableCell>{assignment.assigned}</TableCell>
                <TableCell>{assignment.participants}</TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <LinearProgress
                      variant="determinate"
                      value={assignment.progress}
                      style={{ width: "100%", marginRight: "10px" }}
                    />
                    <Typography>{`${assignment.progress}%`}</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="footer">
        <Typography variant="body2">Items per Page: 10</Typography>
        <Pagination
          count={2}
          page={page}
          onChange={handlePageChange}
          color="primary"
          shape="rounded"
          className="pagination"
        />
      </div>
    </div>
  );
};

export default Assignments;

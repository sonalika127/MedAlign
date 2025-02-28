import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import "./styling/Dashboard.css";
const Header = () => {
  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "#fff", color: "#000" }}
    >
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <div
          style={{
            position: "relative",
            borderRadius: "4px",
            backgroundColor: "#f0f0f0",
            marginRight: "20px",
            padding: "0 10px",
          }}
        >
          <SearchIcon />
          <InputBase placeholder="Search…" />
        </div>
        <Typography style={{ marginRight: "20px" }}>
          Monday, December 23, 2019, 8:20:00 AM
        </Typography>
        <IconButton>
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

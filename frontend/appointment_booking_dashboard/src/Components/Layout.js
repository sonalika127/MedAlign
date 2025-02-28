import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Layout = ({ children }) => {
  const { isLoggedIn, logout } = useAuth(); // Access login status and logout function
  const [showDropdown, setShowDropdown] = useState(false); // Manage dropdown visibility
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Call the logout function to update the auth state
    navigate("/auth"); // Redirect to the login page
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          borderBottom: "1px solid #ccc",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          height: "50px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/images/logo.jpg"
            alt="MedAlign Logo"
            style={{
              marginRight: "10px",
              width: "100px",
              height: "100px",
              objectFit: "contain",
            }}
          />
        </div>

        <nav>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
          <Link to="/all-doctors" style={linkStyle}>
            All Doctors
          </Link>
          <Link to="/about" style={linkStyle}>
            About
          </Link>
          <Link to="/contact-us" style={linkStyle}>
            Contact
          </Link>
        </nav>

        {/* Conditionally render Profile or Create Account */}
        {isLoggedIn ? (
          <div
            style={{
              position: "relative",
              display: "inline-block",
            }}
          >
            <button
              onClick={() => setShowDropdown((prev) => !prev)}
              style={{
                padding: "10px 20px",
                backgroundColor: "#5a67d8",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Profile
            </button>
            {showDropdown && (
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  marginTop: "5px",
                  backgroundColor: "white",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "5px",
                  zIndex: 1,
                }}
              >
                <button
                  onClick={handleLogout}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "white",
                    color: "#333",
                    border: "none",
                    textAlign: "left",
                    width: "100%",
                    cursor: "pointer",
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/auth"
            style={{
              padding: "10px 20px",
              backgroundColor: "#5a67d8",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Create account
          </Link>
        )}
      </header>

      {/* Main content */}
      <main>{children}</main>
    </div>
  );
};

// Shared style for links
const linkStyle = {
  margin: "0 15px",
  textDecoration: "none",
  color: "#2d3748", // Match color of Home and All Doctors
};

export default Layout;

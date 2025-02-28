import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styling/AuthPage.css";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "ROLE_PATIENT",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    let backendRole;
    switch (selectedRole) {
      case "Patient":
        backendRole = "ROLE_PATIENT";
        break;
      case "Doctor":
        backendRole = "ROLE_DOCTOR";
        break;
      case "Staff":
        backendRole = "ROLE_ADMIN";
        break;
      default:
        backendRole = "ROLE_PATIENT";
    }
    setFormData((prevData) => ({
      ...prevData,
      role: backendRole,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin
      ? "http://localhost:8761/auth/login"
      : "http://localhost:8761/auth/register";
    try {
      const response = await axios.post(url, formData);
      if (isLogin) {
        const jwtToken = response.data.token;
        localStorage.setItem("jwtToken", jwtToken);
        alert("Login Successful!");
        navigate("/dashboard");
      } else {
        alert("Registration Successful! You can now login.");
        setIsLogin(true);
      }
    } catch (err) {
      setErrorMessage(err.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="logo-section">
          <h1 className="title">MedAlign</h1>
          <p className="subtitle">Your Healthcare Partner</p>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <h2>{isLogin ? "Login" : "Sign Up"}</h2>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          {!isLogin && (
            <select name="role" onChange={handleRoleChange}>
              <option value="Patient">Patient</option>
              <option value="Doctor">Doctor</option>
              <option value="Staff">Staff</option>
            </select>
          )}
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
          <p className="toggle-auth" onClick={() => setIsLogin(!isLogin)}>
            {isLogin
              ? "Don't have an account? Sign Up"
              : "Already have an account? Login"}
          </p>
        </form>
      </div>
      <div className="image-section">
        <img src="img.png" alt="Healthcare illustration" />
      </div>
    </div>
  );
};

export default AuthPage;

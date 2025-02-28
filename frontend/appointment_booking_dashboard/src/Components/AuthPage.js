import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Components/AuthContext"; // Import AuthContext
import "../css/AuthPage.css";

const AuthPage = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth(); // Get login function from AuthContext

  const staticCredentials = { username: "user1", password: "password123" };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.username === staticCredentials.username &&
      formData.password === staticCredentials.password
    ) {
      login(); // Update login state
      navigate("/"); // Redirect to home
    } else {
      setErrorMessage("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="auth-page">
      {/* Left side: Login Form */}
      <div className="auth-form-container">
        <form className="auth-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>

      {/* Right side: Image */}
      <div className="auth-image-container">
        <img
          src="images/login.jpg"
          alt="Auth Visual"
          className="auth-image"
        />
      </div>
    </div>
  );
};

export default AuthPage;

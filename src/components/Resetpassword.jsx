import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Resetpassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [pass, setPass] = useState(true);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setSuccessMessage("");
    } else {
      setError("");
      try {
        const response = await fetch(
          "http://localhost:4000/api/v1/auth/resetpassword",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: formData.email,
              password: formData.password,
            }),
          }
        );

        const data = await response.json();

        if (response.ok) {
          setSuccessMessage(data.message);
          setFormData({ email: "", password: "", confirmPassword: "" });
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError("Server error. Please try again later.");
      }
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <div className="logo">
            <h1>Reset Password</h1>
          </div>
        </div>
        <div className="card-content">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group" style={{ flex: "row" }}>
              <label htmlFor="password">New Password</label>
              <input
                id="password"
                type={pass ? "password" : "text"}
                placeholder="••••••••"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <div
                style={{
                  marginLeft: "370px",
                  height: "auto",
                  width: "auto",
                  marginTop: "-30px",
                }}
                onClick={() => setPass(!pass)}
              >
                {pass ? (
                  <FaEyeSlash
                    style={{ height: "20px", width: "20px", color: "black" }}
                  />
                ) : (
                  <FaEye
                    style={{ height: "20px", width: "20px", color: "black" }}
                  />
                )}
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            {error && <div className="error-alert">{error}</div>}
            {successMessage && (
              <div className="success-alert">{successMessage}</div>
            )}
            <button type="submit" className="login-button">
              Reset Password <i className="fa-solid fa-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Resetpassword;

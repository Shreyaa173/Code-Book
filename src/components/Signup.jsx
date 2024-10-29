import React, { useState } from "react";
import { signUp } from "../services/operations/authAPI";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignUpForm() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [passVisible, setPassVisible] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email");
      return;
    }
    if (!usernameRegex.test(formData.name)) {
      setError("Please enter a valid name");
      return;
    }
    if (!passwordRegex.test(formData.password)) {
      setError("Password must have at least 8 characters, one uppercase, one lowercase, one digit, and one special character");
      return;
    }

    dispatch(signUp(formData.name, formData.email, formData.password, navigate));
    setSuccess("Account created successfully!");
    setError("");
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Join CodeBook</h1>
        {success && <p style={{ color: "green" }}>{success}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div>
            <input
              type={passVisible ? "password" : "text"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span onClick={() => setPassVisible(!passVisible)}>
              {passVisible ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
}

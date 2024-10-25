import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!name || !email || !password) {
      setError("Please fill in all fields");
      return;
    }
    console.log("Signup attempted with:", { name, email, password });
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const idToken = await result.user.getIdToken();
      console.log("Google login successful:", result.user);

      // Send the ID token to your server
      await axios.post("http://localhost:5000/auth/google", { idToken });

      // Redirect after successful login
      navigate("/dashboard");
    } catch (error) {
      console.error("Google login failed:", error);
      setError("Google login failed. Please try again.");
    }
  };

  const handleAppleLogin = async () => {
    try {
      // Placeholder for Apple login logic
      const response = await axios.get("http://localhost:5000/auth/apple");
      console.log("Apple login successful:", response.data);

      // Redirect after successful login
      navigate("/dashboard");
    } catch (error) {
      console.error("Apple login failed:", error);
      setError("Apple login failed. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <div className="logo">
            <span className="icon">🎓</span>
            <h1>Join CodeBook</h1>
          </div>
          <p className="description">
            Create your account and start learning today!
          </p>
        </div>
        <div className="card-content">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <div className="error-alert">{error}</div>}
            <button type="submit" className="signup-button">
              Sign-Up <i className="fa-solid fa-arrow-right"></i>
            </button>
          </form>

          <div className="oauth-buttons">
            <button onClick={handleGoogleLogin} className="google-button">
              <i className="fab fa-google"></i> Sign up with Google
            </button>
            <button onClick={handleAppleLogin} className="apple-button">
              <i className="fab fa-apple"></i> Sign up with Apple
            </button>
          </div>

          <div className="signup-link">
            Already have an account? <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

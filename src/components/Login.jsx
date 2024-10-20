import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    console.log("Login attempted with:", { email, password });
    // Example: Redirect after successful login
    // window.location.href = '/dashboard';
  };

  return (
    <div className='container'>
      <div className='card'>
        <div className='card-header'>
          <div className='logo'>
            <span className='icon'>🔒</span>
            <h1>Login to CodeBook</h1>
          </div>
          <p className='description'>
            Enter your credentials to access your account
          </p>
        </div>
        <div className='card-content'>
          <form onSubmit={handleSubmit}>
            <div className='input-group'>
              <label htmlFor='email'>Email</label>
              <input
                id='email'
                type='email'
                placeholder='you@example.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='input-group'>
              <label htmlFor='password'>Password</label>
              <input
                id='password'
                type='password'
                placeholder='••••••••'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <div className='error-alert'>{error}</div>}
            <button type='submit' className='login-button'>
              Log In <i className='fa-solid fa-arrow-right'></i>
            </button>
          </form>
          <div className='signup-link'>
            Don't have an account? <Link to='/signup'>Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

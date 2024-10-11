import React from 'react';
import './Auth.css'; // Ensure this is imported
import Login from './Login';

function SignIn() {
  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form className="auth-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />
        </div>
        <button type="submit" className="btn">Sign Up</button>
      </form>
    </div>
  );
}

export default SignIn;

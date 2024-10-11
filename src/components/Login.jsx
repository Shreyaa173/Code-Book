import React from 'react';
import './Auth.css'; // Ensure this is imported
import SignIn from './SignIn';

function Login() {
  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form className="auth-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />
        </div>
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
}

export default Login;

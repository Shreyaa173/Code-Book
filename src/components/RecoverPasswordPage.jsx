import React, { useState } from "react";
import "./RecoverPassword.css";
import { Link } from "react-router-dom";

export default function RecoverPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    if (!email) {
      setMessage("Please enter your email address");
      return;
    }

    console.log("Password recovery attempted with:", { email });
    setMessage(
      "If an account with that email exists, a password recovery link has been sent."
    );
  };

  return (
    <div className='container'>
      <div className='card'>
        <div className='card-header'>
          <div className='logo'>
            <span className='icon'>🔑</span>
            <h1>Recover Password</h1>
          </div>
          <p className='description'>
            Enter your email to receive password recovery instructions
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
            {message && <div className='message-alert'>{message}</div>}
            <button type='submit' className='recover-button'>
              Send Recovery Link
            </button>
          </form>
          <div className='login-link'>
            Remembered your password? <Link to='/login'>Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

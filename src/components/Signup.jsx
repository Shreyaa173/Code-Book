import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp } from "../services/operations/authAPI";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
	const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password) {
      setError("Please fill in all fields");
      return;
    }
    console.log(name, email, password);
    dispatch(signUp(name, email, password, navigate));
    console.log("Signup attempted with:", { name, email, password });
  };

  return (
    <div className='container'>
      <div className='card'>
        <div className='card-header'>
          <div className='logo'>
            <span className='icon'>🎓</span>
            <h1>Join CodeBook</h1>
          </div>
          <p className='description'>
            Create your account and start learning today!
          </p>
        </div>
        <div className='card-content'>
          <form onSubmit={handleSubmit}>
            <div className='input-group'>
              <label htmlFor='name'>Full Name</label>
              <input
                id='name'
                type='text'
                placeholder='Your Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
		pattern="[a-zA-Z ]+" oninvalid="this.setCustomValidity('Numbers and Symbols are not allowed')" 
                oninput="this.setCustomValidity('')"
              />
            </div>
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <div className='error-alert'>{error}</div>}
            <button type='submit' className='signup-button'>
              Sign-Up <i className='fa-solid fa-arrow-right'></i>
            </button>
          </form>
          <div className='signup-link'>
            Already have an account? <Link to='/login'>Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

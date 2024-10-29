import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../services/operations/authAPI"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [pass, setPass] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    dispatch(login(email, password, navigate));
    console.log("Login attempted with:", { email, password });
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
            <div className='input-group' style={{flex: "row"}}>
              <label htmlFor='password'>Password</label>
              <input
                id='password'
                type={pass? "password": "text"}
                placeholder='••••••••'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div style={{marginLeft: "370px", height:"auto", width: "auto", marginTop: "-30px"}} onClick={()=>setPass(!pass)}>
                {
                  !pass?<FaEye style={{height: "20px", width: "20px", color: "black"}} />:<FaEyeSlash style={{height: "20px", width: "20px", color: "black"}}/>
                }
              </div>
            </div>
            {error && <div className='error-alert'>{error}</div>}
            <button type='submit' className='login-button'>
              Log In <i className='fa-solid fa-arrow-right'></i>
            </button>
          </form>
          <div className='signup-link'>
            Don't have an account? <a href="/signup">Signup</a>
          </div>
        </div>
      </div>
    </div>
  );
}

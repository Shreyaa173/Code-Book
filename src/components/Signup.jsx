import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp } from "../services/operations/authAPI";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setCPassword] = useState("");
  const [error, setError] = useState("");
  const [pass, setPass] = useState(true);
  const navigate = useNavigate();
	const dispatch = useDispatch();

  const handleSubmit = (e) => {
    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    // Password validation regex (at least 8 characters, one uppercase, one lowercase, one digit, one special character)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    e.preventDefault();
    setError("");

    if (!name || !email || !password) {
      setError("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      setError("Password do not match");
      return;
    }
    if (!emailRegex.test(email)) {
			setError("Please enter valid email");
			return;
    }
    if (!usernameRegex.test(name)) {
			setError("Please enter valid name");
			return;
    }
    if (!passwordRegex.test(password)) {
			setError(
				"Password having at least 8 characters, one uppercase, one lowercase, one digit, one special character"
			);
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
            <div className='input-group' style={{flex: "row"}}>
              <label htmlFor='password'>Password</label>
              <input
                id='password'
                type={pass? "password": "text"}
                placeholder="Enter password"
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
            <div className='input-group'>
              <label htmlFor='cpassword'>Confirm Password</label>
              <input
                id='cpassword'
                type='password'
                value={confirmPassword}
                placeholder="Re-Enter password"
                onChange={(e) => setCPassword(e.target.value)}
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

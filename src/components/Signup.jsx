import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../services/operations/authAPI";
import "./Signup.css";
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

  const handleGoogleSignIn = async () => {
    try {
      const user = await doSignInWithGoogle();
      console.log("User signed in:", user);
      // Redirect or perform additional actions as needed
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      setError("Failed to sign in with Google. Please try again.");
    }
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
          <div className='google-button-container'>
            <button onClick={handleGoogleSignIn} className='google-button'>
              <span className='google-icon' dangerouslySetInnerHTML={{ __html: `
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                </svg>
              `}} />
                Continue with Google
            </button>
          </div>
          <div className='signup-link'>
            Already have an account? <Link to='/login'>Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

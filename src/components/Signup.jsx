// import React, { useState } from "react";
// import "./Signup.css";
// import { Link } from "react-router-dom";

// export default function SignupPage() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");

//     if (!name || !email || !password) {
//       setError("Please fill in all fields");
//       return;
//     }

//     console.log("Signup attempted with:", { name, email, password });
//   };

//   return (
//     <div className='container'>
//       <div className='card'>
//         <div className='card-header'>
//           <div className='logo'>
//             <span className='icon'>🎓</span>
//             <h1>Join CodeBook</h1>
//           </div>
//           <p className='description'>
//             Create your account and start learning today!
//           </p>
//         </div>
//         <div className='card-content'>
//           <form onSubmit={handleSubmit}>
//             <div className='input-group'>
//               <label htmlFor='name'>Full Name</label>
//               <input
//                 id='name'
//                 type='text'
//                 placeholder='Your Name'
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </div>
//             <div className='input-group'>
//               <label htmlFor='email'>Email</label>
//               <input
//                 id='email'
//                 type='email'
//                 placeholder='you@example.com'
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className='input-group'>
//               <label htmlFor='password'>Password</label>
//               <input
//                 id='password'
//                 type='password'
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             {error && <div className='error-alert'>{error}</div>}
//             <button type='submit' className='signup-button'>
//               Sign-Up <i className='fa-solid fa-arrow-right'></i>
//             </button>
//           </form>
//           <div className='signup-link'>
//             Already have an account? <Link to='/login'>Log in</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// src/components/SignUpForm.js
import React, { useState } from "react";
import { signUp } from "../api"; // Import the API function

const SignUpForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signUp(formData);
      setSuccess("Account created successfully!");
      setError("");
      setFormData({ name: "", email: "", password: "" }); // Clear the form
    } catch (err) {
      setError("Sign-up failed. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div>
      <h2>Join CodeBook</h2>
      {success && <p style={{ color: "green" }}>{success}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;

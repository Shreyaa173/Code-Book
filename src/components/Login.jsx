import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../services/operations/authAPI";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!email || !password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    try {
      await dispatch(login(email, password, navigate));
      console.log("Login attempted with:", { email, password });
    } catch (err) {
      setError("Login failed. Please check your credentials and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className='container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className='card'
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.02, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)" }}
      >
        <div className='card-header'>
          <div className='logo'>
            <span className='icon'>🔒</span>
            <motion.h1
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Login to CodeBook
            </motion.h1>
          </div>
          <p className='description'>
            Enter your credentials to access your account
          </p>
        </div>
        <div className='card-content'>
          <motion.form
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className='input-group'>
              <label htmlFor='email'>Email</label>
              <motion.input
                id='email'
                type='email'
                placeholder='you@example.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-invalid={!!error}
                whileFocus={{ scale: 1.05, borderColor: "#007bff" }}
              />
            </div>
            <div className='input-group'>
              <label htmlFor='password'>Password</label>
              <motion.input
                id='password'
                type='password'
                placeholder='••••••••'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                aria-invalid={!!error}
                whileFocus={{ scale: 1.05, borderColor: "#007bff" }}
              />
            </div>
            {error && <div className='error-alert' role='alert'>{error}</div>}
            <motion.button
              type='submit'
              className='login-button'
              disabled={loading}
              whileHover={!loading ? { scale: 1.05, backgroundColor: "#e0c8ff" } : {}}
              whileTap={!loading ? { scale: 0.95 } : {}}
            >
              {loading ? "Logging in..." : "Log In"} <i className='fa-solid fa-arrow-right'></i>
            </motion.button>
          </motion.form>
          <div className='signup-link'>
            Don't have an account? <Link to="/signup">Signup</Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

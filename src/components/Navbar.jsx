import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/logo.png";
import ProgressBar from "./ProgressBar";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <ProgressBar />
      <div className="nav-up">
        <div className="nav-icon">
          <a href="/"><img src={Logo} alt="Logo" className="logo" /></a>
          <p>Code Book</p>
        </div>
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true"></i>
        </div>
      </div>
      <div className={`nav-content ${isOpen ? 'show' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="#courses">Courses</a>
          </li>
          <li className="nav-item">
            <a href="#testimonials">Testimonials</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="nav-button">
        <button className="btn">
    <a href="/signup">
      Sign-up <i className="fa-solid fa-arrow-right"></i>
    </a>
  </button>
  <button className="btn">
    <a href="/login">
      Log-in <i className="fa-solid fa-arrow-right"></i>
    </a>
  </button>
        </div>
      </div>
    </nav >
  );
}

export default Navbar;


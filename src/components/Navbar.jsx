import React, { useState } from "react";
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
          <img src={Logo} alt="Logo" className="logo" />
          <p>Code Book</p>
        </div>
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true"></i>
        </div>
      </div>
      <div className={`nav-content ${isOpen ? 'show' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#explore">Courses</a>
          </li>
          <li className="nav-item">
            <a href="#testimonal">Testimonials</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="nav-button">
          <button className="btn">
            <a href="#">
              Sign-up<i className="fa-solid fa-arrow-right"></i>
            </a>
          </button>
          <button className="btn">
            <a href="#">
              Log-in<i className="fa-solid fa-arrow-right"></i>
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


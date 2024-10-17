import React, { useState, useEffect } from 'react';
import Logo from "../assets/logo.png";

function Navbar() {
  // State to manage theme
  const [theme, setTheme] = useState('light');

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Apply the theme by changing the body class
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <nav>
      <div className="nav-icon">
        <img src={Logo} alt="logo" className="logo" />
        <p>Code Book</p>
      </div>

      <div className="nav-text">
        <ul className="nav-list">
          <li className="nav-item"><a href="#explore">Courses</a></li>
          <li className="nav-item"><a href="#testimonal">Testimonals</a></li>
          <li className="nav-item"><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className="nav-button">
        <button className="btn"><a href="#">Sign-up<i className="fa-solid fa-arrow-right"></i></a></button>
        <button className="btn"><a href="#">Log-in<i className="fa-solid fa-arrow-right"></i></a></button>

        {/* Toggle Button for Dark/Light Mode */}
        <div className="nav-toggle">
          <label className="switch">
            <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

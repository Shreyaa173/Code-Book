import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav>
      <div className='nav-icon'>
        <img src={Logo} alt='Code Book Logo' className='logo' />
        <p>Code Book</p>
      </div>
      <div className='nav-text'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <Link to='/login'>Courses</Link>
          </li>
          <li className='nav-item'>
            <a href='#testimonal'>Testimonials</a>
          </li>
          <li className='nav-item'>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
      <div className='nav-button'>
        <button className='btn'>
          <Link to='/signup'>
            Sign-up<i className='fa-solid fa-arrow-right'></i>
          </Link>
        </button>
        <button className='btn'>
          <Link to='/login'>
            Log-in<i className='fa-solid fa-arrow-right'></i>
          </Link>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

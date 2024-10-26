import { useState } from "react";

import Logo from "../assets/logo.png";
import ProgressBar from "./ProgressBar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../services/operations/authAPI";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <ProgressBar />
      <div className="nav-up">
        <div className="nav-icon">
          <a href="/">
            <img src={Logo} alt="Logo" className="logo" />
          </a>
          <p>Code Book</p>
        </div>
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <i
            className={`fa ${isOpen ? "fa-times" : "fa-bars"}`}
            aria-hidden="true"
          ></i>
        </div>
      </div>
      <div className={`nav-content ${isOpen ? "show" : ""}`}>
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
          {!user ? (
            <>
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
            </>
          ) : (
            <button className="btn" onClick={() => dispatch(logout(navigate))}>
              <div>
                LogOut <i className="fa-solid fa-arrow-right"></i>
              </div>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

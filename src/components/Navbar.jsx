import React from 'react'
import Logo from "../assets/logo.png"

function Navbar() {
  return (
    <nav>
         <div className="nav-icon">
                <img src={Logo} alt="" className="logo"/>
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
            </div>
    </nav>
  )
}

export default Navbar
import React, { useState } from 'react';
import Logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <nav className="flex items-center justify-between bg-gradient-to-r from-[#13072e] to-[#1d4ed8] p-6"> {/* Increased padding for height */}
      <div className="flex items-center">
        <img src={Logo} alt="Code Book" className="h-10 mr-2" />
        <p className="text-white text-xl font-bold">Code Book</p>
      </div>

     
      <div className="hidden md:flex flex-grow justify-center mx-4"> {/* Center menu items */}
        <ul className="flex space-x-6 text-white">
          <li><a href="#explore" className="hover:text-blue-300">Courses</a></li>
          <li><a href="#testimonal" className="hover:text-blue-300">Testimonials</a></li>
          <li><a href="/contact" className="hover:text-blue-300">Contact</a></li>
        </ul>
      </div>

      {/* Sign-up and Log-in Buttons */}
      <div className="hidden md:flex space-x-4">
        <button className="btn bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500"><a href="#">Sign-up</a></button>
        <button className="btn bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500"><a href="#">Log-in</a></button>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? ( // Conditional rendering for the hamburger icon
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

     
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#13072e] p-4 md:hidden shadow-lg">
          <ul className="flex flex-col space-y-4 text-white">
            <li><a href="#explore" className="hover:text-blue-300" onClick={toggleMenu}>Courses</a></li>
            <li><a href="#testimonal" className="hover:text-blue-300" onClick={toggleMenu}>Testimonials</a></li>
            <li><a href="#contact" className="hover:text-blue-300" onClick={toggleMenu}>Contact</a></li>
          </ul>
          <div className="flex flex-col space-y-2 mt-4">
            <button className="btn bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"><a href="#">Sign-up</a></button>
            <button className="btn bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"><a href="#">Log-in</a></button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

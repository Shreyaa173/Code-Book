import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Courses, Slideshow, Contact, Footer } from "./components/index";
import Navbar from "./components/Navbar";
import Login from "./components/Login"; // Make sure this path is correct
import Signup from "./components/Signup";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        {/* Add other routes here */}
      </Routes>
      <div>
        <Courses />
        <Slideshow />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

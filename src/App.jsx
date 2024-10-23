import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PrivacyPolicy from "./components/PrivacyPolicy"; 
import TermsOfUse from "./components/TermsOfUse";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} /> 
        <Route path='/terms-of-use' element={<TermsOfUse />} />
      </Routes>
    </Router>
  );
}

export default App;

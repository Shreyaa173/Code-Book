import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AllCourses from "./components/AllCourses";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import RecoverPasswordPage from "./components/RecoverPasswordPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/recover-password' element={<RecoverPasswordPage />}
      </Routes>
    </Router>
  );
}

export default App;

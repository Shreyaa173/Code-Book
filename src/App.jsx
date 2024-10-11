import './App.css';
import Home from './components/Home';
import Courses from './components/Courses';
import Slideshow from './components/Slideshow';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login'; // Import the Login component
import SignIn from './components/SignIn'; // Import the SignIn component
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Router components

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signin">Sign In</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/slideshow" element={<Slideshow />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/login" element={<Login />} /> {/* Route for Login */}
          <Route path="/signin" element={<SignIn />} /> {/* Route for Sign In */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React, { useState } from 'react';
import logo from "../assets/logo.png";

function Footer() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    
    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailPattern.test(value));
  };

  const handleSubmit = () => {
    if (isValid) {
      alert(`Email ${email} submitted!`);
      // Here you can add the logic to handle email submission (e.g., API call)
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <div>
      <div className="footer">
        <div className="footer-top">
          <div className="left">
            <div className="nav-icon">
              <img src={logo} alt="" className="logo" />
              <p>Code Book</p>
            </div> 
            <div className="about-text">
              <h3>Welcome to Code Book—your go-to resource hub for mastering coding. Whether you're a beginner or an experienced developer, we provide curated tutorials, coding challenges, and guides to enhance your skills across various programming languages and frameworks. Our mission is to create a community where learning to code is accessible, engaging, and fun for everyone.</h3>
            </div>
          </div>
          
          <div className="right">
            <div className="resources">
              <div className="first">
                <h3>Quick Links</h3>
                <ul>
                  <li><a href="home.html">Home</a></li>
                  <li><a href="about-us.html">About Us</a></li>
                  <li><a href="faq.html">FAQ / Help</a></li>
                  <li><a href="privacy-policy.html">Privacy Policy</a></li>
                  <li><a href="terms-of-service.html">Terms of Service</a></li>
                </ul>
              </div>  
              <div className="second">
                <h3>Connect with us</h3>
                <ul>
                  <li><a href="home.html">Instagram</a></li>
                  <li><a href="about-us.html">Github</a></li>
                  <li><a href="faq.html">Twitter</a></li>
                  <li><a href="privacy-policy.html">Linkedin</a></li>
                  <li><a href="terms-of-service.html">Discord</a></li>
                </ul>
              </div> 
              <div className="third">
                <h3>Subscribe to our Newsletter</h3>
                <div className="email-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
  <div className="email-input" style={{ display: 'flex', justifyContent: 'center', width: '100%', maxWidth: '400px' }}>
    <input 
      type="email" 
      value={email} 
      onChange={handleEmailChange} 
      placeholder="Enter your email" 
      spellCheck="false" 
      style={{ flex: 1, height: '2.5rem', borderRadius: '30px', border: '1px solid #ccc', padding: '0 10px' }} 
    />
    <span className="checkmark" style={{ display: isValid ? 'inline' : 'none', color: 'green', marginLeft: '10px', fontSize: '20px' }}>
      &#10003;
    </span>
  </div>
  </div>
  <button 
    className="explore-btn submit-btn" 
    onClick={handleSubmit} 
    style={{
      marginTop: '10px',
      fontSize: '1.255rem',
      height: '2.5rem',
      width: '12rem',
      borderRadius: '30px',
      border: 'none',
      cursor: 'pointer',
      background: 'rgb(255, 204, 74)',
      transition: 'box-shadow 0.3s ease-in-out'
    }}
  >
    Submit
  </button>



                
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="foot">
        <p>&copy; 2024 Code Book. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
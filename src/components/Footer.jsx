import React, { useState } from 'react';
import logo from "../assets/logo.png";

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscription = (e) => {
    e.preventDefault();
    if (email) {
      setMessage("Subscription added! 🎉");
      setEmail("");
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  return (
    <div className='text-black'>
      <div className="footer">
        <div className="footer-top">
          <div className="left">
            <div className="nav-icon">
              <img src={logo} alt="" width={100} height={100} className="logo" />
              <p>Code Book</p>
            </div> 
            <div className="about-text">
              <h3>Welcome to Code Book—your go-to resource hub for mastering coding. Whether you're a beginner or an experienced developer, we provide curated tutorials, coding challenges, and guides to enhance your skills across various programming languages and frameworks. Our mission is to create a community where learning to code is accessible, engaging, and fun for everyone.
                        </h3>
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
                <h4 className="subscribe-text">Stay in the loop and subscribe to Code Book's Newsletter</h4>
                <form className="search" onSubmit={handleSubscription}>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    spellCheck="false" 
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                  <button type="submit">
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </form>
                {message && <p className="subscription-message">{message}</p>}
              </div>        
            </div>
          </div>
        </div>
        <div className="foot" style={{ marginTop: '20px' }}>
          <p>&copy; 2024 Code Book. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;


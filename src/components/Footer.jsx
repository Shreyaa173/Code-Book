import React from 'react';
import logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="bg-gradient-to-r from-[#13072e] to-[#1d4ed8] text-white py-9">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col md:w-2/5 mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <img src={logo} alt="Code Book" className="h-16 mr-2" />
              <p className="text-xl font-bold">Code Book</p>
            </div>
            <p className="text-sm space-y-2">
              Welcome to Code Book—your go-to resource hub for mastering coding. Whether you're a beginner or an experienced developer, we provide curated tutorials, coding challenges, and guides to enhance your skills across various programming languages and frameworks. Our mission is to create a community where learning to code is accessible, engaging, and fun for everyone.
            </p>
          </div>

          <div className="md:w-3/5 flex justify-between flex-wrap">
            <div className="w-full sm:w-1/2 lg:w-1/3 mb-6">
              <h3 className="font-bold mb-2">Quick Links</h3>
              <ul className="text-sm space-y-1">
                <li><a href="home.html" className="hover:text-blue-300">Home</a></li>
                <li><a href="about-us.html" className="hover:text-blue-300">About Us</a></li>
                <li><a href="faq.html" className="hover:text-blue-300">FAQ / Help</a></li>
                <li><a href="privacy-policy.html" className="hover:text-blue-300">Privacy Policy</a></li>
                <li><a href="terms-of-service.html" className="hover:text-blue-300">Terms of Service</a></li>
              </ul>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3 mb-6">
              <h3 className="font-bold mb-2">Connect with us</h3>
              <ul className="text-sm space-y-1">
                <li><a href="https://instagram.com" className="hover:text-blue-300">Instagram</a></li>
                <li><a href="https://github.com" className="hover:text-blue-300">Github</a></li>
                <li><a href="https://twitter.com" className="hover:text-blue-300">Twitter</a></li>
                <li><a href="https://linkedin.com" className="hover:text-blue-300">LinkedIn</a></li>
                <li><a href="https://discord.com" className="hover:text-blue-300">Discord</a></li>
              </ul>
            </div>

            <div className="w-full lg:w-1/3 mb-6">
              <h3 className="font-bold mb-2">Subscribe to our Newsletter</h3>
              <p className="text-sm mb-2">Stay in the loop and subscribe to Code Book's Newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 rounded-l-md border-none text-black focus:outline-none w-full sm:w-auto"
                  spellCheck="false"
                />
                <button className="bg-blue-600 p-2 rounded-r-md hover:bg-blue-500">
                  <i className="fa-solid fa-arrow-right text-white"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center p-4 border-t border-blue-600 mt-6">
        <p className="text-sm">&copy; 2024 Code Book. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;

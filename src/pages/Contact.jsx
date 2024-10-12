import React from 'react';
import Footer from '../components/Footer';

function Contact() {
  return (
    <div>
    <div
      className="py-32"
      id="contact"
      style={{ background: '#13072e' }}
    >
      <div className="container mx-auto px-4 lg:flex lg:space-x-12">
        {/* Form Section */}
        <div className="bg-white shadow-md rounded-lg p-8 lg:w-1/2 mb-8 lg:mb-0">
          <form action="" className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            />
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500 mb-4 sm:mb-0"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-500 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Details Section */}
        <div className="lg:w-1/2 text-white">
          <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
          <p className="mb-6">
            We’re here to help! If you have any questions, need support, or just want to give us feedback, please contact us via the details given below or use the form. We value your input and will respond promptly. Your satisfaction is important to us, and we look forward to assisting you!
          </p>
          <div className="space-y-4">
            <p className="flex items-center">
              <i className="fa-solid fa-phone mr-2"></i> +12 9876543210
            </p>
            <p className="flex items-center">
              <i className="fa-solid fa-envelope-circle-check mr-2"></i> xyz@email.com
            </p>
            <p className="flex items-center">
              <i className="fa-solid fa-map-location-dot mr-2"></i> Delhi, India
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default Contact;

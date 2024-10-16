import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3000/api/email/sendEmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending email. Please try again later.");
    }
  };

  return (
    <div>
      <h1>Contact us</h1>
      <div className="contact-us" id="contact">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="Name"
              placeholder="Name"
              className="name"
              value={formData.Name}
              onChange={handleChange}
            />
            <div className="center">
              <input
                type="email"
                name="Email"
                placeholder="Email"
                value={formData.Email}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="Phone"
                placeholder="Phone number"
                className="phone"
                value={formData.Phone}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="Message"
              placeholder="Message"
              value={formData.Message}
              onChange={handleChange}
            ></textarea>
            <br />
            <button className="explore-btn submit-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="details">
          <p>
            We’re here to help! If you have any questions, need support, or just
            want to give us feedback, please contact us via details given below
            or use the form. We value your input and will respond promptly. Your
            satisfaction is important to us, and we look forward to assisting
            you!
          </p>
          <p>
            <i className="fa-solid fa-phone"></i> +12 9876543210
          </p>
          <p>
            <i className="fa-solid fa-envelope-circle-check"></i> xyz@email.com
          </p>
          <p>
            <i className="fa-solid fa-map-location-dot"></i> Delhi, India
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

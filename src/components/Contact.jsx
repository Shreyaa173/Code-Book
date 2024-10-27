import { useState } from "react";
import emailjs from '@emailjs/browser'
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const handleChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_eswbn1c",  //service id generated for that template
        "template_6ogvajl", //You can set up your own template 
        {
          from_name: formData.name,
          to_name: "Shreya Gupta",
          message: formData.message,
          from_email: formData.email,
          to_email: "ms.shreya17@gmail.com",
        },
        "0kTPM5SDgBuLQ7LzO"
      )
      .then(
        () => {
          setLoading(false);
          alert("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert(
            "There was an error sending the message. Please try again later."
          );
        }
      );
  };
  return (
    <div>
      <h1 className="contact-text">Contact us</h1>
      <div className="contact-us">
        <div className="form">
          <form>
            <input
              value={formData.name}
              onChange={(e) => handleChange(e)}
              type="text"
              name="name"
              placeholder="Name"
              className="name"
            />
            <div className="center">
              <input
                value={formData.email}
                onChange={(e) => handleChange(e)}
                type="email"
                name="email"
                placeholder="Email"
              />
              <input
                value={formData.number}
                onChange={(e) => handleChange(e)}
                type="tel"
                name="phone"
                placeholder="Phone number"
                className="phone"
              />
            </div>
            <textarea
              value={formData.message}
              onChange={(e) => handleChange(e)}
              name="message"
              placeholder="Message"
            ></textarea>
            <br />
            <button onClick={handleSubmit} className="explore-btn submit-btn">
            {loading ? "Sending..." : "Send"}
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
          <p className="details-source">
            <i className="fa-solid fa-phone"></i> +12 9876543210
          </p>
          <p className="details-source">
            <i className="fa-solid fa-envelope-circle-check"></i> xyz@email.com
          </p>
          <p className="details-source">
            <i className="fa-solid fa-map-location-dot"></i> Delhi,India
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

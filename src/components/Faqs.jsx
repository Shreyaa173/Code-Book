/** @format */

import React, { useState } from "react";
import "./Faqs.css"

const faqs = [
	{
		question: "What is Code Book?",
		answer:
			"Code Book is an online platform that provides a wide range of coding courses for learners at all levels. From beginners to advanced programmers, we help you develop your skills with quality content and hands-on projects.",
	},
	{
		question: "How do I purchase a coding course on Code Book?",
		answer:
			"To purchase a course, simply create an account, browse through our course catalog, and select the course you're interested in. Add it to your cart and proceed to checkout to complete the purchase.",
	},
	{
		question: "Are there any discounts or promotions available on Code Book?",
		answer:
			"We often run special promotions and discounts. Keep an eye on our homepage or sign up for our newsletter to stay updated on the latest offers!",
	},
	{
		question: "What payment methods are accepted on Code Book?",
		answer:
			"We accept various payment methods including credit/debit cards and popular online payment systems. Available payment options will be listed at checkout.",
	},
	{
		question: "Can I get a refund if I'm not satisfied with a course?",
		answer:
			"Yes, we offer a refund policy for eligible courses. Please review our refund policy on the course page or contact support for more details.",
	},
	{
		question: "How can I access my courses after purchase?",
		answer:
			"Once you've purchased a course, it will be available in your account dashboard. You can access it anytime and start learning at your own pace.",
	},
	{
		question: "Can I download course materials?",
		answer:
			"Some of our courses offer downloadable materials like PDF notes, coding examples, and assignments. Check the course details to see what's included.",
	},
	{
		question: "Do I receive a certificate after completing a course?",
		answer:
			"Yes! Upon successfully completing a course, you will receive a certificate to showcase your skills and accomplishment.",
	},
	{
		question: "How do I reset my password?",
		answer:
			"If you've forgotten your password, you can reset it by clicking on the 'Forgot Password?' link on the login page and following the instructions.",
	},
	{
		question: "Can I get assistance if I have questions during the course?",
		answer:
			"Absolutely! We offer support for all our courses. You can reach out through our support channels for help or connect with fellow learners in the community forum.",
	},
	{
		question: "Is my payment information secure on Code Book?",
		answer:
			"Yes, we use industry-standard security measures to protect your payment and personal information. For more details, please review our privacy policy.",
	},
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div className={`faq-item ${activeIndex === index ? 'active' : ''}`} key={index}>
          <h3 onClick={() => toggleAnswer(index)}>{faq.question}</h3>
          <p className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
            {faq.answer}
          </p>
        </div>
      ))}
      <div className="button-container">
        <a href="/" className="back-button">Back to Home</a>
      </div>
    </div>
  );
};


export default Faqs;

import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./FAQ.css"; // Importing the separate stylesheet
import HelpCenter from "./HelpCenter";

const faqData = [
  {
    question: "What is CodeBook?",
    answer:
      "CodeBook is a web platform designed to provide comprehensive coding resources and tools for learners and educators. It includes tutorials, interactive code editors, and curated project ideas to support your coding journey.",
  },
  {
    question: "Who can use CodeBook?",
    answer:
      "CodeBook is suitable for all skill levels, from beginners to experienced coders. It offers resources to help anyone looking to improve their coding skills, regardless of experience level.",
  },
  {
    question: "What kind of resources are available on CodeBook?",
    answer:
      "CodeBook offers a variety of resources, including tutorials on programming languages like Python, JavaScript, HTML, CSS, project ideas, interactive code editors, and code snippets.",
  },
  {
    question: "Can I use CodeBook on mobile devices?",
    answer:
      "Currently, CodeBook is designed primarily for web use, but we plan to launch a mobile app and enhance mobile support soon to provide easy access to coding resources on the go.",
  },
  {
    question: "How can I contribute to CodeBook’s development?",
    answer:
      "We welcome contributions! Check out our GitHub repository for information on how to get involved, suggest new features, or help improve the platform.",
  },
  {
    question: "What future features can I expect from CodeBook?",
    answer:
      "We're working on exciting updates like expanded resource libraries, collaborative tools, coding challenges, community forums, and mobile support to enhance the learning experience.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container" id="faq">
      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <p>Discover answers to commonly asked questions about CodeBook and its features.</p>
      </div>

      <div className="faq-content">
        {faqData.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggleFAQ(index)}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <span>
                {activeIndex === index ? (
                  <IoIosArrowUp className="icon" />
                ) : (
                  <IoIosArrowDown className="icon" />
                )}
              </span>
            </div>
            {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
      <HelpCenter />
    </div>
  );
};

export default FAQ;

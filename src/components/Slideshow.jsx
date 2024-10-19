import React, { useEffect, useRef, useState } from "react";
import B1 from "../assets/B1.png";
import G1 from "../assets/G1.png";
import B2 from "../assets/B2.png";
import G2 from "../assets/G2.png";
import B3 from "../assets/B3.png";
import G3 from "../assets/G3.png";
import B4 from "../assets/B4.png";
import G4 from "../assets/G4.png";
import B5 from "../assets/B5.png";
import G5 from "../assets/G5.png";

import TestimonialCard from "./TestimonialCard";
import "@fortawesome/fontawesome-free/css/all.min.css";

const testimonials = [
  {
    imgurl: B1,
    description:
      "This platform has revolutionized my coding journey. The content is clear, and the instructors are top-notch. I went from zero to hero in no time!",
    name: "Rohan",
    role: "Junior developer",
    location: "India",
  },
  {
    imgurl: G1,
    description:
      "The projects provided are very practical and reflect real-world challenges. I now feel confident in my coding skills and ready to tackle professional projects.",
    name: "Ananya Gupta",
    role: "Web Developer",
    location: "India",
  },
  {
    imgurl: B2,
    description:
      "A fantastic resource with a strong community. The mentors are always available to help and provide valuable feedback. My coding skills have improved tremendously.",
    name: "Arjun Verma",
    role: "Data Analyst",
    location: "India",
  },
  {
    imgurl: G2,
    description:
      "Highly recommended! The lessons are well-structured and easy to follow. The platform has significantly boosted my confidence in coding.",
    name: "Neha Desai",
    role: "Software Engineer",
    location: "India",
  },
  {
    imgurl: B3,
    description:
      "This platform offers a perfect blend of theory and practice. The hands-on projects are incredibly useful in understanding complex concepts.",
    name: "Vikram Mehta",
    role: "Full Stack Developer",
    location: "India",
  },
  {
    imgurl: G3,
    description:
      "As a beginner, I found the courses easy to follow and very informative. The step-by-step approach helped me understand and apply coding concepts effectively.",
    name: "Priya Singh",
    role: "Student",
    location: "India",
  },
  {
    imgurl: B4,
    description:
      "The mentors are highly knowledgeable and provide excellent guidance. The platform's community is very supportive and encouraging.",
    name: "Rahul Patel",
    role: "Backend Developer",
    location: "India",
  },
  {
    imgurl: G4,
    description:
      "Great learning experience! The courses are comprehensive and cover a wide range of topics. The projects are challenging yet achievable.",
    name: "Meera Kapoor",
    role: "Frontend Developer",
    location: "India",
  },
  {
    imgurl: B5,
    description:
      "The platform has exceeded my expectations. The quality of content and the level of detail in each course are outstanding.",
    name: "Aman Reddy",
    role: "Data Scientist",
    location: "India",
  },
  {
    imgurl: G5,
    description:
      "Excellent platform for learning coding. The variety of courses and projects keep me engaged and motivated to learn more.",
    name: "Riya Nair",
    role: "UI/UX Designer",
    location: "India",
  },
];

function Slideshow() {
  const carouselref = useRef();
  const btnNext = useRef();
  const btnPrev = useRef();

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const carousel = carouselref.current;
    const carouselItemWidth = document.querySelector(".card").offsetWidth;

    // Scroll to the current index
    const scrollToIndex = (index) => {
      const scrollPosition = index * (carouselItemWidth + 16);
      carousel.scrollLeft = scrollPosition;
    };

    const scrollNext = () => {
      setCurrentIndex((prevIndex) => {
        const nextIndex =
          prevIndex < testimonials.length - 1 ? prevIndex + 1 : 0;
        scrollToIndex(nextIndex);
        return nextIndex;
      });
    };

    const scrollPrev = () => {
      setCurrentIndex((prevIndex) => {
        const prevIndexCalc =
          prevIndex > 0 ? prevIndex - 1 : testimonials.length - 1;
        scrollToIndex(prevIndexCalc);
        return prevIndexCalc;
      });
    };

    // Auto slideshow
    const autoScroll = setInterval(scrollNext, 3000); // Change to your desired interval

    // Scroll to the current index whenever it changes
    scrollToIndex(currentIndex);

    // Add event listeners for buttons
    btnNext.current.addEventListener("click", scrollNext);
    btnPrev.current.addEventListener("click", scrollPrev);

    // Clean up event listeners and interval on unmount
    return () => {
      clearInterval(autoScroll);
      btnNext.current.removeEventListener("click", scrollNext);
      btnPrev.current.removeEventListener("click", scrollPrev);
    };
  }, [currentIndex]);

  // Handle dot click
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slideshow-container">
      <div className="testimonials" id="testimonial">
        <h1 className="why">Why Choose Us???</h1>
        <div className="wrapper">
        <div className="dots-container">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
          <ul ref={carouselref} className="carousels">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                description={testimonial.description}
                name={testimonial.name}
                imgurl={testimonial.imgurl}
                role={testimonial.role}
                location={testimonial.location}
              />
            ))}
          </ul>
          <div>
            <button ref={btnPrev} className="slider">
              <i className="fa-solid fa-angle-left"></i>
            </button>
            <button ref={btnNext} className="slider">
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slideshow;

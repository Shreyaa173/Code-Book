import { useEffect, useRef, useState } from "react";
import testimonials from "../data/testimonialData";

import TestimonialCard from "./TestimonialCard";
import "@fortawesome/fontawesome-free/css/all.min.css";

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
    <>
      <div id="testimonials"></div>
      <div className="slideshow-container">
        <div className="testimonials">
          <h1 className="why">Why Choose Us??</h1>
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
              <div id="contact"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slideshow;

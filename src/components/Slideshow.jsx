import React from "react";
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
import { useEffect, useRef } from "react";
import TestimonialCard from "./TestimonialCard";
function Slideshow() {
  const carouselref = useRef();
  const btn = useRef();
  useEffect(() => {
    const carousel = carouselref.current;
    console.log(carousel);

    const nextButton = btn.current;
    const carouselItemWidth = document.querySelector(".card").offsetWidth;
    const noOfCarouselItems = document.getElementsByClassName("card").length;

    let isDragging = false;
    let startX;
    let scrollLeft;
    let autoScrollInterval;
    let autoScrollTimeout;
    let noOfItemsScrolled = 0;

    const dragStart = (e) => {
      if (
        !carousel.contains(e.target) ||
        e.target.tagName.toLowerCase() === "a"
      ) {
        return;
      }
      isDragging = true;
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
      carousel.classList.add("dragging");
      clearInterval(autoScrollInterval); // Stop auto-scroll when user starts dragging
      clearTimeout(autoScrollTimeout); // Clear any pending auto-scroll restart
    };

    // Function to handle dragging
    const dragging = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 5; // Adjust the scroll speed as needed
      carousel.scrollLeft = scrollLeft - walk;
    };

    // Function to handle dragging stop
    const dragStop = () => {
      if (!isDragging) return;
      isDragging = false;
      carousel.classList.remove("dragging");

      noOfItemsScrolled = Math.floor(carousel.scrollLeft / carouselItemWidth);

      autoScrollTimeout = setTimeout(startAutoScroll, 1000); // Restart auto-scroll with a delay
    };

    // Function to start automatic scrolling
    const startAutoScroll = () => {
      clearInterval(autoScrollInterval); // Clear any existing intervals
      autoScrollInterval = setInterval(() => {
        // the 16px is added considering the 16px gap provided in grid
        carousel.scrollLeft += carouselItemWidth + 16; // Adjust this value to control the speed of auto-scroll
        noOfItemsScrolled++;
        if (
          carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth ||
          noOfItemsScrolled >= noOfCarouselItems
        ) {
          noOfItemsScrolled = 0;
          carousel.scrollLeft = 0; // Reset scroll to the beginning when reaching the end
        }
      }, 1800); // Adjust this value to control the frequency of scroll updates
    };

    //Function to scroll carousel to the next set of items
    const scrollNext = () => {
      clearInterval(autoScrollInterval); // Clear any existing intervals
      autoScrollTimeout = setTimeout(startAutoScroll, 500); // Restart auto-scroll with a delay
      noOfItemsScrolled++;

      // the 16px is added considering the 16px gap provided in grid
      carousel.scrollLeft += carouselItemWidth + 16; // Scroll by the width of one item

      if (
        carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth ||
        noOfItemsScrolled >= noOfCarouselItems
      ) {
        noOfItemsScrolled = 0;
        carousel.scrollLeft = 0; // Reset scroll to the beginning if at the end
      }
    };

    // Add event listeners for dragging functionality
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    carousel.addEventListener("mouseup", dragStop);
    carousel.addEventListener("mouseleave", dragStop);

    // Add event listener for the next button
    nextButton.addEventListener("click", scrollNext);

    // Start automatic scrolling
    startAutoScroll();
  }, []);

  return (
    <>
      <div className="slideshow-container">
        <div className="testimonals" id="testimonal">
          <h1 className="why">Why Choose Us???</h1>
          <div className="wrapper">
            <ul ref={carouselref} className="carousels">
              <TestimonialCard
                description={
                  "This platform has revolutionized my coding journey. The content is clear, and the instructors are top-notch. I went from zero to hero in no time!"
                }
                name={"Rohan"}
                imgurl={B1}
                role={"Junior developer"}
                location={"India"}
              ></TestimonialCard>
              <TestimonialCard
                imgurl={G1}
                description={
                  "The projects provided are very practical and reflect real-world challenges. I now feel confident in my coding skills and ready to tackle professional projects."
                }
                name={"Ananya Gupta"}
                role={"Web Developer"}
                location={"India"}
              ></TestimonialCard>
              <TestimonialCard
                imgurl={B2}
                description={
                  "A fantastic resource with a strong community. The mentors are always available to help and provide valuable feedback. My coding skills have improved tremendously."
                }
                name={"Arjun Verma"}
                role={"Data Analyst"}
                location={"India"}
              ></TestimonialCard>
              <TestimonialCard
                imgurl={G2}
                description={
                  "Highly recommended! The lessons are well-structured and easy to follow. The platform has significantly boosted my confidence in coding."
                }
                name={"Neha Desai"}
                role={"Software Engineer"}
                location={"India"}
              ></TestimonialCard>
              <TestimonialCard
                imgurl={B3}
                description={
                  "This platform offers a perfect blend of theory and practice. The hands-on projects are incredibly useful in understanding complex concepts."
                }
                name={"Vikram Mehta"}
                role={"Full Stack Developer"}
                location={"India"}
              ></TestimonialCard>
              <TestimonialCard
                imgurl={G3}
                description={
                  "As a beginner, I found the courses easy to follow and very informative. The step-by-step approach helped me understand and apply coding concepts effectively."
                }
                name={"Priya Singh"}
                role={"Student"}
                location={"India"}
              ></TestimonialCard>
              <TestimonialCard
                imgurl={B4}
                description={
                  "The mentors are highly knowledgeable and provide excellent guidance. The platform's community is very supportive and encouraging."
                }
                name={"Rahul Patel"}
                role={"Backend Developer"}
                location={"India"}
              ></TestimonialCard>

              <TestimonialCard
                imgurl={G4}
                description={
                  "Great learning experience! The courses are comprehensive and cover a wide range of topics. The projects are challenging yet achievable."
                }
                name={"Meera Kapoor"}
                role={"Frontend Developer"}
                location={"India"}
              ></TestimonialCard>

              <TestimonialCard
                imgurl={B5}
                description={
                  "The platform has exceeded my expectations. The quality of content and the level of detail in each course are outstanding."
                }
                name={"Aman Reddy"}
                role={"Data Scientist"}
                location={"India"}
              ></TestimonialCard>
              <TestimonialCard
                imgurl={G5}
                description={
                  "Excellent platform for learning coding. The variety of courses and projects keep me engaged and motivated to learn more."
                }
                name={"Riya Nair"}
                role={"UI/UX Designer"}
                location={"India"}
              ></TestimonialCard>
            </ul>
            <div>
              <button ref={btn} className="slider">
                <i className="fa-solid fa-angles-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slideshow;

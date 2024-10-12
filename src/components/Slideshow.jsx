import React, { useEffect, useRef } from 'react';
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
import TestimonialCard from './TestimonialCard';

const Slideshow = () => {
    const carouselRef = useRef(null);
    const btnRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        const nextButton = btnRef.current;
        if (!carousel || !nextButton) return;

        const carouselItemWidth = carousel.querySelector(".card")?.clientWidth || 0;
        let isDragging = false;
        let startX;
        let scrollLeft;
        let autoScrollInterval;
        let autoScrollTimeout;

        const dragStart = (e) => {
            isDragging = true;
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
            carousel.classList.add("dragging");
            clearInterval(autoScrollInterval);
            clearTimeout(autoScrollTimeout);
        };

        const dragging = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 3; // Adjust speed
            carousel.scrollLeft = scrollLeft - walk;
        };

        const dragStop = () => {
            if (!isDragging) return;
            isDragging = false;
            carousel.classList.remove("dragging");
            autoScrollTimeout = setTimeout(startAutoScroll, 1000);
        };

        const startAutoScroll = () => {
            clearInterval(autoScrollInterval);
            autoScrollInterval = setInterval(() => {
                carousel.scrollLeft += carouselItemWidth;
                if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
                    carousel.scrollLeft = 0; // Reset scroll
                }
            }, 1000);
        };

        const scrollNext = () => {
            carousel.scrollLeft += carouselItemWidth;
            if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
                carousel.scrollLeft = 0; // Reset scroll
            }
        };

        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("mousemove", dragging);
        carousel.addEventListener("mouseup", dragStop);
        carousel.addEventListener("mouseleave", dragStop);
        nextButton.addEventListener("click", scrollNext);
        startAutoScroll();

        return () => {
            carousel.removeEventListener("mousedown", dragStart);
            carousel.removeEventListener("mousemove", dragging);
            carousel.removeEventListener("mouseup", dragStop);
            carousel.removeEventListener("mouseleave", dragStop);
            nextButton.removeEventListener("click", scrollNext);
            clearInterval(autoScrollInterval);
            clearTimeout(autoScrollTimeout);
        };
    }, []);

    return (
        <div className="slideshow-container pb-5">
            <div className="testimonials" id="testimonial">
                <h1>Why Choose Us???</h1>
                <div className="wrapper">
                    <ul ref={carouselRef} className="carousels">
                        <TestimonialCard description="This platform has revolutionized my coding journey. The content is clear, and the instructors are top-notch. I went from zero to hero in no time!" name="Rohan" imgurl={B1} role="Junior developer" location="India" />
                        <TestimonialCard imgurl={G1} description="The projects provided are very practical and reflect real-world challenges. I now feel confident in my coding skills and ready to tackle professional projects." name="Ananya Gupta" role="Web Developer" location="India" />
                        <TestimonialCard imgurl={B2} description="A fantastic resource with a strong community. The mentors are always available to help and provide valuable feedback. My coding skills have improved tremendously." name="Arjun Verma" role="Data Analyst" location="India" />
                        <TestimonialCard imgurl={G2} description="Highly recommended! The lessons are well-structured and easy to follow. The platform has significantly boosted my confidence in coding." name="Neha Desai" role="Software Engineer" location="India" />
                        <TestimonialCard imgurl={B3} description="This platform offers a perfect blend of theory and practice. The hands-on projects are incredibly useful in understanding complex concepts." name="Vikram Mehta" role="Full Stack Developer" location="India" />
                        <TestimonialCard imgurl={G3} description="As a beginner, I found the courses easy to follow and very informative. The step-by-step approach helped me understand and apply coding concepts effectively." name="Priya Singh" role="Student" location="India" />
                        <TestimonialCard imgurl={B4} description="The mentors are highly knowledgeable and provide excellent guidance. The platform's community is very supportive and encouraging." name="Rahul Patel" role="Backend Developer" location="India" />
                        <TestimonialCard imgurl={G4} description="Great learning experience! The courses are comprehensive and cover a wide range of topics. The projects are challenging yet achievable." name="Meera Kapoor" role="Frontend Developer" location="India" />
                        <TestimonialCard imgurl={B5} description="The platform has exceeded my expectations. The quality of content and the level of detail in each course are outstanding." name="Aman Reddy" role="Data Scientist" location="India" />
                        <TestimonialCard imgurl={G5} description="Excellent platform for learning coding. The variety of courses and projects keep me engaged and motivated to learn more." name="Riya Nair" role="UI/UX Designer" location="India" />
                    </ul>
                    <div>
                        <button ref={btnRef} className="slider">
                            <i className="fa-solid fa-angles-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slideshow;

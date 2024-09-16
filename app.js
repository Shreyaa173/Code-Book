const carousel = document.querySelector(".carousels");
const nextButton = document.querySelector(".slider");
const carouselItemWidth = document.querySelector(".card").offsetWidth;

let isDragging = false;
let startX;
let scrollLeft;
let autoScrollInterval;
let autoScrollTimeout;

// Function to handle dragging start
const dragStart = (e) => {
    if (!carousel.contains(e.target) || e.target.tagName.toLowerCase() === 'a') {
        return;
    }
    isDragging = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    carousel.classList.add("dragging");
    clearInterval(autoScrollInterval); // Stop auto-scroll when user starts dragging
    clearTimeout(autoScrollTimeout); // Clear any pending auto-scroll restart
}

// Function to handle dragging
const dragging = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 3; // Adjust the scroll speed as needed
    carousel.scrollLeft = scrollLeft - walk;
}

// Function to handle dragging stop
const dragStop = () => {
    if (!isDragging) return;
    isDragging = false;
    carousel.classList.remove("dragging");
    autoScrollTimeout = setTimeout(startAutoScroll, 1000); // Restart auto-scroll with a delay
}

// Function to start automatic scrolling
const startAutoScroll = () => {
    clearInterval(autoScrollInterval); // Clear any existing intervals
    autoScrollInterval = setInterval(() => {
        carousel.scrollLeft += 500; // Adjust this value to control the speed of auto-scroll
        if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
            carousel.scrollLeft = 0; // Reset scroll to the beginning when reaching the end
        }
    }, 1000); // Adjust this value to control the frequency of scroll updates
}

// Function to scroll carousel to the next set of items
const scrollNext = () => {
    carousel.scrollLeft += carouselItemWidth; // Scroll by the width of one item
    if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
        carousel.scrollLeft = 0; // Reset scroll to the beginning if at the end
    }
}

// Add event listeners for dragging functionality
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);

// Add event listener for the next button
nextButton.addEventListener("click", scrollNext);

// Start automatic scrolling
startAutoScroll();





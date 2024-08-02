const carousel = document.querySelector(".carousels");

        let isDragging = false;
        let startX;
        let scrollLeft;

        const dragStart = (e) => {
            isDragging = true;
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
            carousel.classList.add("dragging");
        }

        const dragging = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 20; //scroll-fast
            carousel.scrollLeft = scrollLeft - walk;
        }

        const dragStop = () => {
            isDragging = false;
            carousel.classList.remove("dragging");
        }

        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("mousemove", dragging);
        carousel.addEventListener("mouseup", dragStop);
        carousel.addEventListener("mouseleave", dragStop);




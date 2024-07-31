function toggleDropdown(event) {
    event.stopPropagation(); // Prevents click event from propagating to the document
    const dropdown = document.getElementById('dropdown-content');
    const isDisplayed = dropdown.style.display === 'block';
    closeAllDropdowns(); // Close other dropdowns if any are open
    dropdown.style.display = isDisplayed ? 'none' : 'block';
}

function closeAllDropdowns() {
    const dropdowns = document.getElementsByClassName('dropdown-content');
    for (let i = 0; i < dropdowns.length; i++) {
        dropdowns[i].style.display = 'none';
    }
}

window.onclick = function(event) {
    // Close the dropdown if the click is outside the dropdown container
    if (!event.target.matches('.dropdown-button')) {
        closeAllDropdowns();
    }
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}



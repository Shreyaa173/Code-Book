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



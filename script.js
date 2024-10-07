// Debounce function to improve performance on scroll
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Function to handle section in-view detection and active nav link update
function updateActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        // Check if the section is in the viewport
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section.getAttribute('id');
        }
    });

    // Update nav links
    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
}

// Listen for scroll event and apply debounce to limit how often the function is called
window.addEventListener('scroll', debounce(updateActiveNav));


// Ensure the function runs after the DOM content has fully loaded
document.addEventListener('DOMContentLoaded', updateActiveNav);

function openModal(imgElement) {
    var modal = document.getElementById("certModal");
    var modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = imgElement.src;
}

function closeModal() {
    var modal = document.getElementById("certModal");
    modal.style.display = "none";
}
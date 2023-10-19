// Initialize fullpage.js
new fullpage('#fullpage', {
    navigation: true,
    scrollingSpeed: 700,
    scrollBar: true,
});

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('.section');
    const footer = document.querySelector('.footer');
    const lightElements = document.querySelectorAll('.light-mode');

    body.classList.toggle('dark-mode');
    navbar.classList.toggle('bg-light');
    navbar.classList.toggle('navbar-light');
    navbar.classList.toggle('bg-dark');
    navbar.classList.toggle('navbar-dark');
    sections.forEach(section => {
        section.classList.toggle('bg-dark');
        section.classList.toggle('text-light');
    });
    footer.classList.toggle('bg-dark');
    footer.classList.toggle('text-light');
    lightElements.forEach(element => {
        element.classList.toggle('btn-light');
        element.classList.toggle('text-light');
    });

    // Update the mode toggle button text
    const modeToggle = document.getElementById('mode-toggle');
    if (body.classList.contains('dark-mode')) {
        modeToggle.innerText = 'Light Mode';
    } else {
        modeToggle.innerText = 'Dark Mode';
    }
}

// Add event listeners for the mode toggle buttons
const modeToggle = document.getElementById('mode-toggle');
modeToggle.addEventListener('click', toggleDarkMode);
const modeToggleDropdown = document.getElementById('dark-mode-toggle-dropdown');
modeToggleDropdown.addEventListener('click', toggleDarkMode);

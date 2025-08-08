document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    toggleButton.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        // Toggle bar animation (optional)
        toggleButton.classList.toggle('active');
    });
});
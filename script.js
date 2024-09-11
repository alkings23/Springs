// Toggle Menu for Mobile View
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Function to Toggle Login Form Visibility
function toggleLogin() {
    const loginContainer = document.getElementById('loginContainer');
    loginContainer.style.display = (loginContainer.style.display === 'none' || loginContainer.style.display === '') ? 'block' : 'none';
}

document.addEventListener("DOMContentLoaded", function() {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });

    // Product Expand/Collapse Toggle
    const productNames = document.querySelectorAll('.product-name');
    productNames.forEach(button => {
        button.addEventListener('click', () => {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', !isExpanded);
            button.nextElementSibling.classList.toggle('open');
        });
    });

    // Simple Form Submission Example
    const loginForm = document.getElementById('login-form');
    const loginMessage = document.getElementById('login-message');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent actual form submission
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username && password) {
            loginMessage.textContent = 'Login successful!';
            loginMessage.style.color = 'green';
        } else {
            loginMessage.textContent = 'Please enter valid credentials!';
            loginMessage.style.color = 'red';
        }
    });
});

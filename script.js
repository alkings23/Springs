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

// Sample products data
const products = [
    {
        id: 1,
        name: "Simba-cement",
        description: "Best cement for construction.",
        price: 6500,
        imageUrl: "images/simba-cement.png"
    },
    {
        id: 2,
        name: "Hammer",
        description: "Best for construction",
        price: 350,
        imageUrl: "images/hammer.png"
    },
    // Add more products as needed
];

// Function to render products dynamically
function renderProducts() {
    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = ''; // Clear existing products

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
            <div class="product-details">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <a href="#" class="buy-button" data-id="${product.id}">Buy Now</a>
            </div>
        `;

        // Add event listener for the 'Buy Now' button
        const buyButton = productCard.querySelector('.buy-button');
        buyButton.addEventListener('click', (event) => {
            event.preventDefault();
            addToCart(product.id);
        });

        productsContainer.appendChild(productCard);
    });
}

// Function to handle adding a product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        alert(`Added ${product.name} to cart!`); // You can replace this with actual cart logic
        // Update cart logic here
    } else {
        console.error("Product not found!");
    }
}

// Function to initialize page scripts
function init() {
    renderProducts();
}

// Initialize the script after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);

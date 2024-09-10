// scripts.js

document.addEventListener("DOMContentLoaded", function () {
    const productsTab = document.getElementById("products-tab");
    const productDetails = document.querySelectorAll(".product-details");
    const productImages = document.querySelectorAll(".product-item img");
    const buyButtons = document.querySelectorAll(".buy-button");
    const modal = document.getElementById("buy-modal");
    const closeModalButton = document.getElementById("close-modal");
    const quantityInput = document.getElementById("quantity");
    const totalPriceElement = document.getElementById("total-price");

    let currentPrice = 0;

    // Event listener for the "Our Products" tab click
    productsTab.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        productDetails.forEach(detail => {
            detail.style.display = "block"; // Show product details
        });
        productImages.forEach(image => {
            image.style.display = "block"; // Show product images
        });

        // Optionally, scroll to the products section
        const productsSection = document.getElementById("products");
        productsSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Event listener for all "Buy Now" buttons
    buyButtons.forEach(button => {
        button.addEventListener("click", function () {
            currentPrice = parseInt(this.getAttribute("data-price"), 10);
            quantityInput.value = 1; // Reset quantity to 1
            updateTotalPrice(); // Calculate initial total price
            modal.style.display = "block"; // Show the modal
        });
    });

    // Event listener to close the modal
    closeModalButton.addEventListener("click", function () {
        modal.style.display = "none"; // Hide the modal
    });

    // Event listener to update total price when quantity changes
    quantityInput.addEventListener("input", updateTotalPrice);

    function updateTotalPrice() {
        const quantity = parseInt(quantityInput.value, 10) || 1;
        const totalPrice = currentPrice * quantity;
        totalPriceElement.textContent = `Total Price: Kshs ${totalPrice}`;
    }
});

// scripts.js

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const loginMessage = document.getElementById("login-message");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        // Simple client-side validation
        if (username === "" || password === "") {
            loginMessage.textContent = "Please enter both username and password.";
            loginMessage.classList.remove("success");
            loginMessage.classList.add("error");
            return;
        }

        // Simulate login with dummy credentials
        if (username === "admin" && password === "password123") {
            loginMessage.textContent = "Login successful! Redirecting...";
            loginMessage.classList.remove("error");
            loginMessage.classList.add("success");

            // Redirect after 2 seconds (simulate successful login)
            setTimeout(() => {
                window.location.href = "dashboard.html"; // Redirect to dashboard or another page
            }, 2000);
        } else {
            loginMessage.textContent = "Invalid username or password.";
            loginMessage.classList.remove("success");
            loginMessage.classList.add("error");
        }
    });
});

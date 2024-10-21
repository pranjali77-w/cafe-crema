let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to calculate the total and display cart items
function calculateTotal() {
    let total = 0;
    let totalQuantity = 0;
    const cartItemsList = document.getElementById('cartItems');
    cartItemsList.innerHTML = ''; // Clear the current list

    cart.forEach(item => {
        total += item.price * item.quantity;
        totalQuantity += item.quantity;
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItemsList.appendChild(listItem);
    });

    document.getElementById('cartTotal').textContent = total.toFixed(2);
}

// Function to handle displaying delivery details
document.querySelectorAll('input[name="orderType"]').forEach((elem) => {
    elem.addEventListener("change", function (event) {
        const deliveryDetails = document.getElementById("deliveryDetails");
        deliveryDetails.style.display = event.target.value === "delivery" ? "block" : "none";
    });
});

// Function to handle displaying payment method details
document.querySelectorAll('input[name="paymentMethod"]').forEach((elem) => {
    elem.addEventListener("change", function (event) {
        const creditCardDetails = document.getElementById("creditCardDetails");
        const upiDetails = document.getElementById("upiDetails");
        creditCardDetails.style.display = event.target.value === "credit-card" ? "block" : "none";
        upiDetails.style.display = event.target.value === "upi" ? "block" : "none";
    });
});

// Function to place the order and display the modal
function placeOrder(event) {
    event.preventDefault(); // Prevent form submission

    // Get order details
    let total = 0;
    let totalQuantity = 0;
    const orderDetailsList = document.getElementById('orderDetailsList');
    orderDetailsList.innerHTML = ''; // Clear the current list

    cart.forEach(item => {
        total += item.price * item.quantity;
        totalQuantity += item.quantity;

        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        orderDetailsList.appendChild(listItem);
    });

    // Update modal content
    document.getElementById('totalQuantity').textContent = totalQuantity;
    document.getElementById('totalAmount').textContent = total.toFixed(2);

    // Show the modal
    const orderConfirmationModal = new bootstrap.Modal(document.getElementById('orderConfirmationModal'));
    orderConfirmationModal.show();
}

// Add event listener for form submission
document.getElementById('billingForm').addEventListener('submit', placeOrder);

// Add event listener for modal close button
document.getElementById('modalCloseBtn').addEventListener('click', function () {
    // Redirect to the homepage after closing the modal
    window.location.href = "homepage.html"; // Replace with the actual homepage URL
});

// Load total and cart items when the page is ready
window.onload = calculateTotal;

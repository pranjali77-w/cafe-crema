// Initialize cart from localStorage or create a new one
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Sample data that would come from 'menu.csv'
let menuItems = [
    { name: 'Coffee Latte', category: 'coffees', price: 100.00, discount: 0, image: 'coffees/coffee_latte.jpeg' },
    { name: 'Mango Smoothie', category: 'smoothies', price: 122.00, discount: 0, image: 'Smoothiee/smoothe2.jpeg' },
    { name: 'Veg Sandwich', category: 'sandwich', price: 140, discount: 0, image: 'sandwich/vegsandwich.jpeg' },
    { name: 'Pineapple pie', category: 'dessert', price: 90.00, discount: 0, image: 'dessert/pineapple.jpeg' },
    { name: 'Cold Coffee', category: 'coffees', price: 90.00, discount: 0, image: 'coffees/cold_coffee.jpeg' },
    { name: 'Veg burger', category: 'burger', price: 120.00, discount: 10, image: 'burger/vegburger.jpeg' },
    { name: 'Peri Peri Fries', category: 'fries', price: 170.00, discount: 0, image: 'fries/peri.jpeg' },
    { name: 'Paneer Sandwich', category: 'sandwich', price: 140, discount: 0, image: 'sandwich/paneersandwich.jpeg' },
    { name: 'Chocolate Crush Coffee', category: 'coffees', price: 99.00, discount: 0, image: 'coffees/choclate_crush_coffee.jpeg' },
    { name: 'Breakfast Burrito', category: 'breakfast', price: 150.00, discount: 0, image: 'breakfast/breakfast_burrito.jpeg'},
    { name: 'Aloo Tikki burger', category: 'burger', price: 130.00, discount: 10, image: 'burger/alootikki.jpeg' },
    { name: 'Rojbhoj Icecream', category: 'dessert', price: 160.00, discount: 0, image: 'dessert/rajbhoj.jpeg' },
    { name: 'Mac Cheese', category: 'pasta', price: 220.00, discount: 0, image: 'pasta/macpaste.jpeg' },
    { name: 'Breakfast omelet', category: 'breakfast', price: 100.00, discount: 0, image: 'breakfast/breskfast_omelet.jpeg'},
    { name: 'Chocolate Coffee', category: 'coffees', price: 110.00, discount: 0, image: 'coffees/chocalate_coffee.jpeg' },
    { name: 'Paneer burger', category: 'burger', price: 190.00, discount: 0, image: 'burger/paneerburger.jpeg' },
    { name: 'Frape Coffee', category: 'coffees', price: 80.00, discount: 0, image: 'coffees/frape_coffee.jpeg' },
    { name: 'Red Pasta', category: 'pasta', price: 220.00, discount: 0, image: 'pasta/rpaste.jpeg' },
    { name: 'Cheese Mayo Sandwich', category: 'sandwich', price: 120, discount: 10, image: 'sandwich/cheese mayo sandwich.jpeg' },
    { name: 'Cheese Fries', category: 'fries', price: 180.00, discount: 0, image: 'fries/cheese.jpeg' },
    { name: 'Strawberry Cheese Cake', category: 'dessert', price: 120.00, discount: 0, image: 'dessert/strawberry.jpeg' },
    { name: 'Thick Coffee', category: 'coffees', price: 97.00, discount: 0, image: 'coffees/thick_coffee.jpeg' },
    { name: 'Egg Sandwich', category: 'sandwich', price: 100, discount: 0, image: 'sandwich/eggsandwich.jpeg' },
    { name: 'MixFruit Smoothie', category: 'smoothies', price: 130.00, discount: 0, image: 'Smoothiee/smoothi 4.jpeg' },
    { name: 'Pizza Veg', category: 'pizza', price: 300.00, discount: 5, image: 'pizza/veg.jpeg' },
    { name: 'Mumbai toast Sandwich', category: 'sandwich', price: 120, discount: 5, image: 'sandwich/mumbaisandwich.jpeg' },
    { name: 'DryFruit Smoothie', category: 'smoothies', price: 150.00, discount: 10, image: 'Smoothiee/smootie 3.jpeg' },
    { name: 'Breakfast spicy burrito', category: 'breakfast', price: 160.00, discount: 0, image: 'breakfast/breakfast_spicy_burrito.jpeg'},
    { name: 'Pizza paneer', category: 'pizza', price: 320.00, discount: 5, image: 'pizza/paneer.jpeg' },
    { name: 'White Pasta', category: 'pasta', price: 230.00, discount: 0, image: 'pasta/wpaste.jpeg' },
    { name: 'Breakfast Toast', category: 'breakfast', price: 125.00, discount: 5, image: 'breakfast/breakfast_toast.jpeg'},
    { name: 'BBQ burger', category: 'burger', price: 120.00, discount: 0, image: 'burger/BBQburger.jpeg' },
    { name: 'Red Sapgeti', category: 'pasta', price: 250.00, discount: 0, image: 'pasta/rsapgeti.jpeg' },
    { name: 'Fruit and IceCream', category: 'dessert', price: 160.00, discount: 0, image: 'dessert/fruit.jpeg' },
    { name: 'new York Cheese Cake', category: 'dessert', price: 160.00, discount: 0, image: 'dessert/new york.jpeg' },
    { name: 'Breakfast omelet sandwich', category: 'breakfast', price: 105.00, discount: 0, image: 'breakfast/breakfast_omelet_sandwich.jpeg'},
    { name: 'Cheese burger', category: 'burger', price: 160.00, discount: 10, image: 'burger/cheeseburger.jpeg' },
    { name: 'White Sapgeti', category: 'pasta', price: 250.00, discount: 0, image: 'pasta/wsapgeti.jpeg' },
    { name: 'Mango Cheese Cake', category: 'dessert', price: 140.00, discount: 0, image: 'dessert/mangocheese.jpeg' },
    { name: 'Strawberry Smoothie', category: 'smoothies', price: 137.00, discount: 0, image: 'Smoothiee/strawberry_smoothie.jpeg' },
    { name: 'Pizza Margherita', category: 'pizza', price: 300.00, discount: 5, image: 'pizza/margreta.jpeg' },
    { name: 'Chocalate Pastry', category: 'dessert', price: 110.00, discount: 0, image: 'dessert/chocalate.jpeg' },
    { name: 'White Sapgeti', category: 'pasta', price: 250.00, discount: 0, image: 'pasta/wsapgeti.jpeg' },
    { name: 'Pizza Mashroom', category: 'pizza', price: 320.00, discount: 5, image: 'pizza/mashroom.jpeg' },
    { name: 'Mango Icecream', category: 'dessert', price: 110.00, discount: 0, image: 'dessert/mango.jpeg' },
    { name: 'Chocalate Smoothie', category: 'smoothies', price: 99.00, discount: 0, image: 'Smoothiee/smoothie 6.jpeg' },
    { name: 'Alio e ogilo Sapgeti', category: 'pasta', price: 250.00, discount: 5, image: 'pasta/aliosapgeti.jpeg' },
    { name: 'Classic Fries', category: 'fries', price: 150.00, discount: 0, image: 'fries/salted.jpeg' },
    { name: 'Chocalate Pie', category: 'dessert', price: 120.00, discount: 0, image: 'dessert/chocalate pie.jpeg' },
    { name: 'Apple Smoothie', category: 'smoothies', price: 125.00, discount: 0, image: 'Smoothiee/smoothie 5.jpeg' }
];

// Initialize with all items displayed
let filteredItems = [...menuItems];
displayMenu(filteredItems);

// Function to display menu items as cards
function displayMenu(items) {
    const menuContainer = document.getElementById('menuItems');
    menuContainer.innerHTML = ''; // Clear previous content

    if (items.length === 0) {
        menuContainer.innerHTML = '<p>No items found.</p>';
        return;
    }

    items.forEach(item => { // Fixed here to use 'items' instead of 'menuItems'
        const itemHtml = `
            <div class="col-md-4 menu-item">
                <div class="card h-100">
                    <img src="${item.image}" class="card-img-top" alt="${item.name}">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">Price: $${item.price}</p>
                        <button id="btn-${item.name}" class="btn btn-dark" onclick="addToCart('${item.name}', ${item.price}, this)">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        menuContainer.innerHTML += itemHtml;
    });
}

// Function to add items to the cart and change button label
function addToCart(itemName, itemPrice, button) {
    // Check if the item is already in the cart
    let existingItem = cart.find(item => item.name === itemName);

    if (existingItem) {
        // Increment quantity if the item is already in the cart
        existingItem.quantity += 1;
    } else {
        // Add a new item to the cart
        cart.push({ name: itemName, price: itemPrice, quantity: 1 });
    }

    // Save the updated cart in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Change button text to "Added"
    button.textContent = "Added";
    button.classList.remove("btn-primary");
    button.classList.add("btn-success");
    button.disabled = true;  // Optionally disable the button

    // Show the "View Cart" banner at the bottom
    showCartBanner();
}

// Function to show the "View Cart" banner
function showCartBanner() {
    const cartBanner = document.getElementById('cartBanner');
    cartBanner.style.display = 'block';
}

// Load the menu on page load
window.onload = displayMenu;

// Search Menu Items
function searchMenu() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filtered = menuItems.filter(item => item.name.toLowerCase().includes(searchInput));
    displayMenu(filtered);

    // Display "No items found" if no items match the search
    const noItemsMessage = document.getElementById('noItemsMessage');
    noItemsMessage.style.display = filtered.length === 0 ? 'block' : 'none';
}

// Function to filter menu items by category
function filterMenu(category) {
    filteredItems = category === 'all' ? menuItems : menuItems.filter(item => item.category === category);
    displayMenu(filteredItems);
}

// Function to sort menu items
function sortMenu() {
    const sortValue = document.getElementById('sortSelect').value;

    if (sortValue === 'priceAsc') {
        filteredItems.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'priceDesc') {
        filteredItems.sort((a, b) => b.price - a.price);
    } else if (sortValue === 'discount') {
        filteredItems = filteredItems.filter(item => item.discount > 0);
    }

    displayMenu(filteredItems);
}

// Load the menu on page load
window.onload = () => {
    displayMenu(menuItems); // Display full menu initially
};

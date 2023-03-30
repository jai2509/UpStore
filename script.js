// Set a variable for the window width
let windowWidth = window.innerWidth;

// Add event listener for window resize
window.addEventListener('resize', function() {
  // Update the window width variable
  windowWidth = window.innerWidth;
  
  // Call the responsive function
  responsive();
});

// Function to make the website responsive
function responsive() {
  // Check if the window width is less than 768px (the bootstrap breakpoint for small screens)
  if (windowWidth < 768) {
    // Add CSS classes to make the images and product details display as a table on small screens
    const productImages = document.querySelectorAll('.product-image');
    const productDetails = document.querySelectorAll('.product-details');

    for (let i = 0; i < productImages.length; i++) {
      productImages[i].classList.add('table-cell');
      productDetails[i].classList.add('table-cell');
    }
  } else {
    // Remove the CSS classes if the window width is greater than or equal to 768px
    const productImages = document.querySelectorAll('.product-image');
    const productDetails = document.querySelectorAll('.product-details');

    for (let i = 0; i < productImages.length; i++) {
      productImages[i].classList.remove('table-cell');
      productDetails[i].classList.remove('table-cell');
    }
  }
}

// Call the responsive function on page load
responsive();
// Create a shopping cart object to store the items
let cart = [];

// Function to add an item to the cart
function addToCart(productName, price, quantity) {
  // Check if the item is already in the cart
  let itemIndex = cart.findIndex(item => item.productName === productName);
  
  // If the item is in the cart, update the quantity
  if (itemIndex !== -1) {
    cart[itemIndex].quantity += quantity;
  } else {
    // If the item is not in the cart, add it as a new item
    cart.push({
      productName: productName,
      price: price,
      quantity: quantity
    });
  }
  
  // Update the cart display
  updateCartDisplay();
}
// Function to update the cart display
function updateCartDisplay() {
    // Get the cart display element
    const cartDisplay = document.getElementById('cart-display');
    
    // Calculate the total number of items in the cart
    let totalItems = 0;
    cart.forEach(item => {
      totalItems += item.quantity;
    });
    
    // Calculate the total price of the items in the cart
    let totalPrice = 0;
    cart.forEach(item => {
      totalPrice += item.price * item.quantity;
    });
    
    // Update the cart display
    cartDisplay.innerHTML = `Cart (${totalItems} items): $${totalPrice.toFixed(2)}`;
  }
// Get all the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add event listeners to the buttons
addToCartButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Get the product name, price, and quantity from the card
    const card = button.parentElement.parentElement;
    const productName = card.querySelector('.product-name').innerHTML;
    const price = parseFloat(card.querySelector('.product-price').innerHTML.slice(1));
    const quantity = parseInt(card.querySelector('.product-quantity').value);
    
    // Add the item to the cart
    addToCart(productName, price, quantity);
  });
});
  
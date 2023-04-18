// Get references to DOM elements
const addItemForm = document.querySelector('#addItemForm');
const displayCartButton = document.querySelector('#displayCartButton');

// Initialize cart
function initializeCart() {
  let cart = JSON.parse(localStorage.getItem('cart'));
  if (!cart) {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}

// Add item to cart
function addItem(item) {
  let cart = JSON.parse(localStorage.getItem('cart'));
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Remove item from cart
function removeItem(id) {
  let cart = JSON.parse(localStorage.getItem('cart'));
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Display cart contents
function displayCart() {
  let cart = JSON.parse(localStorage.getItem('cart'));
  console.log(cart);
}

// Event listeners
addItemForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const itemName = addItemForm.elements.itemName.value;
  const itemPrice = addItemForm.elements.itemPrice.value;
  const item = {
    id: Date.now(),
    name: itemName,
    price: Number(itemPrice)
  };
  addItem(item);
  addItemForm.reset();
});

displayCartButton.addEventListener('click', function() {
  displayCart();
});





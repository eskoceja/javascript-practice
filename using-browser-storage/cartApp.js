// checks if there's a cart in localStorage;
//if not, it initializes an empty cart
//and stores it in localStorage.
function initializeCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) {
    const cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}

initializeCart();

//retrieves the cart from localStorage,
//adds the item to the cart,
//and then stores the updated cart back into localStorage.
function addItem(item) {
  const cart = JSON.parse(localStorage.getItem("cart"));
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
}

//retrieves the cart from localStorage,
//removes the item with the given id from the cart,
//and then stores the updated cart back into localStorage.
function removeItem(itemId) {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const updateCart = cart.filter(item => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
}

// retrieves the cart from localStorage
//and logs the cart contents to the console.
function displayCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  console.log(cart);
}

// Create event listeners for the #addItemForm and #displayCartButton to call the respective functions.
const addItemForm = document.querySelector("#addItemForm");

addItemForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const itemName = document.getElementById("itemName").value;
  const itemPrice = document.getElementById("itemPrice").value;
  const item = {
    id: Date.now(),
    name: itemName,
    price: Number(itemPrice),
  };
  addItem(item);
  addItemForm.reset();
});

const displayCartButton = document.querySelector("#displayCartButton");

displayCartButton.addEventListener("click", function () {
  displayCart();
});

initializeCart();

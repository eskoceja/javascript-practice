// Update the 'Apples' item to say 'Granny Smith Apples'
const apples = (document.getElementsByTagName("li")[1].innerHTML = "Granny Smith Apples");

// Remove 'Oat Milk' from the list
const noOatList = document.getElementsByTagName("li")[3].remove();

// Add an item 'Kombucha'
const addKombucha = document.createElement("li");
addKombucha.innerHTML = "Kombucha";
const listElement = document.querySelector("ul#list");
listElement.appendChild(addKombucha);

// Clear the list and programmatically add items from the array ['protein bars', 'almonds', 'peanut butter']

const listItems = document.getElementsByTagName("li");
const listLength = document.getElementsByTagName("li").length;

for (let i = listLength -1 ; i >= 0; i--) {
    listItems[i].remove()
}

const newList = ["protein bars", "almonds", "peanut butter"];
for (i = 0; i < newList.length; i++) {
  const newListItems = document.createElement("li");
  newListItems.innerHTML = newList[i];
  const newShoppingList = document.querySelector("ul");
  newShoppingList.appendChild(newListItems);
}

// Add the class 'important' to the almonds item.
const almonds = document.getElementsByTagName("li")[1];
almonds.className = "important";

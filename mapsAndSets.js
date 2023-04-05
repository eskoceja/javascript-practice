
// Create a map called fruitInventory with the following key-value pairs: ('apple', 10), ('banana', 20), ('orange', 30).

let fruitInventory = new Map();

fruitInventory.set('apple','10');
fruitInventory.set('banana','20');
fruitInventory.set('orange','30');

// Use the set method to update the inventory of 'apple' to 15.

fruitInventory.set('apple', '15')

// Use the get method to retrieve the inventory of 'banana' 

console.log(fruitInventory.get('banana'));

// store it in a variable called bananaInventory.

let bananaInventory = console.log(fruitInventory.get('banana'));

// Create a set called uniqueColors with the following values: 'red', 'blue', 'green'.

let uniqueColors = new Set();

uniqueColors.add('red');
uniqueColors.add('blue');
uniqueColors.add('green');

// Use the add method to add the color 'yellow' to the uniqueColors set.

uniqueColors.add('yellow');

// Use the has method to check if the color 'blue' is in the uniqueColors set 

console.log(uniqueColors.has('blue'));

//  store the result in a variable called hasBlue.

let hadBlue = console.log(uniqueColors.has('blue'));
function Person(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
  this.favoriteFoods = favoriteFoods;
};

Person.prototype.fullName = function () {
  return `The full name of the person is ${this.firstName} ${this.lastName}.`;
};

// Overwrite the toString method from the Object prototype by creating a toString method for Person. The toString method should return a string in the following format:
Person.prototype.toString = function personToString() {
  return `${this.firstName} ${this.lastName}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`;
};

//  Add a property on the Person object called family which is an empty array.
Person.prototype.family = [];

//Add a function on the Person.prototype called addToFamily which adds an object constructed from the Person constructor to the family array.
//To make sure that the object you are adding is an object constructed from the Person constructor - take a look at the instanceofoperator.
//Make sure that your family array does not include duplicates! This method should return the length of the family array.
Person.prototype.addToFamily = function (member) {
  if (member instanceof Person && !this.family.includes(member)) {
    this.family.push(member);
  }

  return this.family.length;
};

//
const emily = new Person("Emily", "Koceja", "Pink", 14, ["tacos", "nachos"]);
const chitra = new Person("Chitra", "Goenka", "Red", 5, ["Salads", "Soups"]);
const daisy = new Person("Daisy", "Siquina", "Green", 23, ["Pizza", "Pasta"]);

console.log(emily);
console.log(emily.fullName());
console.log(" ");

console.log(emily.toString());
console.log(emily.family);
console.log(" ");

console.log(
  `Family length of the family members of: ${emily.firstName}, ${chitra.firstName}, ${daisy.firstName}`
);


console.log(emily.addToFamily(chitra));
console.log(emily.addToFamily(daisy));
console.log(" ");

console.log(chitra.addToFamily(emily));
console.log(chitra.addToFamily(daisy));
console.log(" ");

console.log(daisy.addToFamily(chitra));
console.log(daisy.addToFamily(emily));
console.log(" ");

console.log(emily.family.length);
console.log(chitra.family.length);
console.log(daisy.family.length);
console.log(" ")
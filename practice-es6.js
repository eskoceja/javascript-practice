// Create two arrays of numbers called numbers1 and numbers2
let numbers1 = [1, 2, 3, 4, 5, 6];
let numbers2 = [10, 15, 20, 25, 30, 35];

// Use the spread operator to create an array called numbers that combines the elements of numbers1 and numbers2.
const spread = [...numbers1, ...numbers2];

console.log("Spread Operator combining varibles numbers1 and numbers2:");
console.log(spread);
console.log(" ");

// Define an arrow function called square that accepts a number as an argument and returns the square of the number.
const square = (x) => {
  return x * x;
};

// Use the map method to create a new array called squares that contains the squares of the numbers in the numbers array.
const squares = spread.map(square);

console.log("Using the map method to get the squares of the spread array:");
console.log(squares);
console.log(" ");

// Define an arrow function called isEven that accepts a number as an argument and returns true if the number is even, otherwise false.
const isEven = (x) => {
  if (x % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

// Use the filter method to create a new array called evenSquares that contains only the even squares from the squares array.
const evenSquares = squares.filter(isEven);

console.log("Using the filter method to only get the even squares from the squares array:");
console.log(evenSquares);
console.log(" ");

// Use destructuring assignment to extract the first and second elements of the evenSquares array into constants firstEvenSquare and secondEvenSquare.
const [x, y, ...restOfThem] = evenSquares;
const firstEvenSquare = [x];
const secondEvenSquare = [y];

console.log("Destructuring to get the first two even squares:");
console.log(firstEvenSquare);
console.log(secondEvenSquare);
console.log(" ");

// Use a template literal to log the original numbers array, the squares array, the evenSquares array, and the extracted even squares.
console.log(`Using template literals to log everything:`);
console.log(`Original Numbers Array 1 and Array 2: [${numbers1}] and [${numbers2}].`);
console.log(`The Squares Array: [${squares}].`)
console.log(`The Even Squares Array: [${evenSquares}].`)
console.log(`The Extracted Even Squares: ${firstEvenSquare} and ${secondEvenSquare}.`)
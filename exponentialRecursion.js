// Write a recursive function that takes in two parameters, one for the base number, and one for the exponent number, i.e. 
//how many times it will multiply the first number.

function recurse(baseNum, exponentNum) {
    // return baseNum * exponentNum;

    if (exponentNum === 0) {
    return 1;
    }
    // Since it is recursive, you must call the function within the function and you must also have a base condition to avoid an infinite loop.
    else {
    return baseNum * recurse(baseNum, exponentNum-1);
    }

}
    
console.log(recurse(2, 5)); 
console.log(recurse(7, 3)); 
console.log(recurse(12, 2)); 
console.log(recurse(9, 4)); 
console.log(recurse(8, 0)); 

// Bonus / Might help you think it through: Write the function above and the iterative way of doing the same function. 
//Console logs both functions with the same results as above. The results of the functions must match.
      

function power(iBase, iExponent) {
    let result = 1;
  
    for (let i = 0; i < iExponent; i++) {
      result *= iBase;
    }
  
    return result;
  }
  
console.log(`Iterative Way ${power(2, 5)}`);
console.log(`Iterative Way ${power(7, 3)}`);
console.log(`Iterative Way ${power(12, 2)}`);
console.log(`Iterative Way ${power(9, 4)}`);
console.log(`Iterative Way ${power(8, 0)}`);

// Create a variable that holds the total amount of the bill (before the tip).

let billAmount = 123.45;

// Create a function named 'calculateTip' ( It should multiply the bill variable by 20% of the total and return that value)

function calculateTip (x) {
    return x/5;
}

calculateTip(billAmount);

// Create another function called 'getBillTotal' and it should do the following things:
// - Take any amount as an argument
// - call the 'calculateTip' function
// - return the amount + the tip amount

function getBillTotal (y) {
    return y + (y/5);
}

let billAmount2 = 234.56;

// Console log each function and state what it is returning.
console.log(calculateTip(billAmount));
        console.log('calculatorTip is returning 24.69 which is 20 percent of 123.45');


console.log(getBillTotal(billAmount2));
        console.log('getBillTotal is returning 281.472 which is 234.56 + 20 percent');

// Bonus! Find a way to round your amount returned to 2 decimal places.

console.log(getBillTotal(billAmount2).toFixed(2));
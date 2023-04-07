// Declare two variables, a and b in the outer function's scope and set them to a string and an object respectively.

function outer() {
  const a = "A";
  const b = { name: "B" };

  //Log their values immediately.
  console.log(`Outer logging ${a} and ${b.name}`);

  // Pass a and b in as arguments when you execute inner().
  // Update the inner function to take two parameters named a and b.
  function inner(a, b) {
    // Log the values of a and b in the inner function.
    console.log(`Inner logging ${a} and ${b}`);

    // Inside the inner function, assign new values to a and b and log them at the end of the function
    //AND after the execution of inner(a,b).
    a = "New Vaue of A";
    b = { name: "New Value of b" };

    //// Inside the inner function, update a property of the b object.
    b.name = "B Updated AGAIN";

    console.log(`Inner log of ${a} and ${b.name}`);

  }

  inner(a, b.name);

  console.log(a, b.name);
}

outer();

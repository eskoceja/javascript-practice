// 1. DONE - Create an array of user objects called users.
//DONE - Each user object should have an id, name, and email property.

const users = [
  { id: 1, name: "Emily", email: "emily@gmail.com" },
  { id: 2, name: "Blake", email: "blake@gmail.com" },
  { id: 3, name: "Tyler", email: "tyler@gmail.com" },
  { id: 4, name: "Jacob", email: "jacob@gmail.com" },
];

// 2. DONE - Implement a function called fetchUserById
//DONE - that accepts a user ID as an argument and returns a promise.
//DONE - The promise should resolve with the user object if the user with the given ID exists in the users array.
//DONE (I think??) - Otherwise, it should reject with an error message.
//DONE - Simulate an asynchronous request by using setTimeout() to delay the resolution or rejection of the promise by 1 second.

function fetchUserId(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let userId = users.find((user) => user.id === id);
      if (userId) {
        resolve(userId);
      } else {
        reject("ERROR ABORT MISSION");
      }
    }, 1000);
  });
}

// 3. DONE - Use the fetchUserById function to fetch the user with ID 1.
//DONE - Log the user object if the promise is fulfilled and the error message
//if the promise is rejected.
//DONE - Next, chain another fetchUserById call to fetch the user with ID 2.
//DONE - Log the user object if the promise is fulfilled and the error message
//if the promise is rejected.

fetchUserId(1)
  .then((userId) => {
    console.log(userId);
    return fetchUserId(2);
  })
  .then((userId) => {
    console.log(userId);
  })
  .catch((error) => {
    console.log(error);
  });

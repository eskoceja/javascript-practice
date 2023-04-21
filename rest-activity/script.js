// Use what you have learned with fetch to do the following things with
// the http://jsonplaceholder.typicode.com/ Links to an external site.API.
// Render the results to the page in html elements.

// Hide the results from the previous actions
const results = document.getElementById("results");

//  //Get all posts
const getAll = document
  .getElementById("getAll")
  .addEventListener("click", getAllPosts);
function getAllPosts() {
  // fetch("http://jsonplaceholder.typicode.com/posts")
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => (results.innerHTML = JSON.stringify(posts)))
    .catch((error) => console.log(error));
}

//  //Get post with id of 10
const getTen = document
  .getElementById("getTen")
  .addEventListener("click", getIdTen);
function getIdTen() {
  // fetch("http://jsonplaceholder.typicode.com/posts/10")
  fetch("https://jsonplaceholder.typicode.com/posts/10")
    .then((response) => response.json())
    .then((post10) => (results.innerHTML = JSON.stringify(post10)))

    .catch((error) => console.log(error));
}

//  //Create a new post and log the id generated for it by the server
const createPost = document
  .getElementById("createPost")
  .addEventListener("click", createANewPost);
function createANewPost() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "THIS IS THE TITLE",
      body: "THIS IS THE BODY",
      userId: 9999,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((newpost) => (results.innerHTML = JSON.stringify(newpost)))
    .then((json) => console.log(json));
}

// //  //Replace the post with id of 12 and render the responseJSON
const replacePost = document
  .getElementById("replacePost")
  .addEventListener("click", replaceThePost);
function replaceThePost() {
  fetch("https://jsonplaceholder.typicode.com/posts/12", {
    method: "PUT",
    body: JSON.stringify({
      title: "REPLACED 12",
      body: "REPLACED 12 USING PUT",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then(
      (new12) => (results.innerHTML = "Replaced 12" + JSON.stringify(new12))
    )
    .catch((error) => console.log(error));
}

// //  //Update the title of post with id of 12 and render responseJSON
const updatePost = document
  .getElementById("updatePost")
  .addEventListener("click", updateThePost);

function updateThePost() {
  fetch("https://jsonplaceholder.typicode.com/posts/12", {
    method: "PATCH",
    body: JSON.stringify({
      title: "UPDATED TITLE FOR ID OF 12",
      body: "USING PATCH TO UPDATE",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then(
      (updatedPost) =>
        (results.innerHTML =
          "Updated title post for id 12" + JSON.stringify(updatedPost))
    )
    .catch((error) => console.log(error));
}

// //  //Delete the post with id of 12 and render a success message
const deletePost = document
  .getElementById("deletePost")
  .addEventListener("click", deleteThePost);
function deleteThePost() {
  fetch("https://jsonplaceholder.typicode.com/posts/12", {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then(
      (deleted) =>
        (results.innerHTML =
          "Post Deleted Successfully" + JSON.stringify(deleted))
    )
    .catch((error) => console.log(error));
}

const hands = ["rock", "paper", "scissors"];

// Define a function called getHand() that returns a hand from the array using parseInt(Math.random()*10)%3

function getHand() {
  return hands[parseInt(Math.random() * 10) % 3];
}

// Define two objects for two players. Each player has name and getHand() properties.

let player1 = { name: "Player 1", getHand: getHand };
let player2 = { name: "Player 2", getHand: getHand };

// Define a function called playRound() that
// Takes two player objects as arguments
// Gets hands from each
// Determines the winner
// Logs the hands played and name of the winner.
// If its a tie, log the hands played and "it's a tie".
// Returns the winner object (null if no winner)

function playRound(player1, player2) {
  let player1Hand = player1.getHand();
  let player2Hand = player2.getHand();

  if (player1Hand === "rock") {
    if (player2Hand === "paper") {
      console.log(player2.name + " wins with paper against rock.");
      return player2Hand;
    } else if (player2Hand === "scissors") {
      console.log(player1.name + " wins with rock against scissors.");
      return player1Hand;
    }
    else {
      console.log("It's a tie!");
      return null;
    }
  } 
  
  else if (player1Hand === "paper") {
    if (player2Hand === "rock") {
      console.log(player1.name + " wins with paper against rock.");
      return player1Hand;
    } else if (player2Hand === "scissors") {
      console.log(player2.name + " wins with scissors againts paper.");
      return player2Hand;
    }
    else {
      console.log("It's a tie!");
      return null;
    }
  } 
  
  else if (player1Hand === "scissors") {
    if (player2Hand === "rock") {
      console.log(player2.name + " wins with rock against scissors.");
      return player2Hand;
    } else if (player2Hand === "paper") {
      console.log(player1.name + " wins with scissors against paper.");
      return player1Hand;
    }
    else {
      console.log("It's a tie!");
      return null;
    }
  } 
  
  
}

playRound(player1, player2);

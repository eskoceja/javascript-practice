const hands = ["rock", "paper", "scissors"];

function getHand() {
  return hands[parseInt(Math.random() * 10) % 3];
}

let player1 = { name: "Blake", getHand: getHand, wins: 0 };
let player2 = { name: "Emily", getHand: getHand, wins: 0 };
let player3 = { name: "Tyler", getHand: getHand, wins: 0 };
let player4 = { name: "Jacob", getHand: getHand, wins: 0 };

function playRound(playerOne, playerTwo) {
  let player1Hand = player1.getHand();
  let player2Hand = player2.getHand();

  if (player1Hand === "rock") {
    if (player2Hand === "paper") {
      console.log(playerTwo.name + " wins with paper against rock.");
      return player2Hand;
    } else if (player2Hand === "scissors") {
      console.log(playerOne.name + " wins with rock against scissors.");
      return player1Hand;
    } else {
      console.log("It's a tie!");
      return null;
    }
  } else if (player1Hand === "paper") {
    if (player2Hand === "rock") {
      console.log(playerOne.name + " wins with paper against rock.");
      return player1Hand;
    } else if (player2Hand === "scissors") {
      console.log(playerTwo.name + " wins with scissors againts paper.");
      return player2Hand;
    } else {
      console.log("It's a tie!");
      return null;
    }
  } else if (player1Hand === "scissors") {
    if (player2Hand === "rock") {
      console.log(playerTwo.name + " wins with rock against scissors.");
      return player2Hand;
    } else if (player2Hand === "paper") {
      console.log(playerOne.name + " wins with scissors against paper.");
      return player1Hand;
    } else {
      console.log("It's a tie!");
      return null;
    }
  }
}

playRound(player1, player2);

// Define a function called playGame() that takes arguments player1, player2, and playUntil.
// Play rounds until one of the players wins playUntil hands
// When one player has won enough games, return the winning player object
// Play a game to 3 wins

function playGame(playerA, playerB, playUntil) {
while (playerA.wins < playUntil && playerB.wins < playUntil) {
    let winner = playRound(playerA, playerB);
}

if (playerA.wins === playUntil) {
    console.log(`${playerA.name} wins the game!`);
    return winner;
} else {
    console.log(`${playerB.name} wins the game!`);
    return winner
}

}

playGame(playerA, playerB, 5);

// Define a function called playTournament()
// Take 4 players and playUntil as arguments
// Play a game between the first two players, and the second two players
// Play a game between the winners of the first round.
// Announce the tournament winner's name "[name] is the world champion";

function playTournament(playa1, playa2, playa3, playa4, playUntil) {
    let firstbracket = playGame(playa1, playa2, playUntil);
    let secondbracket = playGame(playa3, playa4, playUntil);
    
    let tournamentwinner = playGame(firstbracket, secondbracket, playUntil);
    console.log(tournamentwinner.name + ' is the world champion.');
    }
    
playTournament(playa1, playa2, playa3, playa4, 3);


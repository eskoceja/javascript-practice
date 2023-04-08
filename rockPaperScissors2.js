const hands = ["rock", "paper", "scissors"];

function getHand() {
  return hands[parseInt(Math.random() * 10) % 3];
}

let blake = { name: "Blake", getHand: getHand, wins: 0 };
let emily = { name: "Emily", getHand: getHand, wins: 0 };
let tyler = { name: "Tyler", getHand: getHand, wins: 0 };
let jacob = { name: "Jacob", getHand: getHand, wins: 0 };

function playRound(p1, p2) {
  let player1Hand = p1.getHand();
  let player2Hand = p2.getHand();
  // let winner = null;

  if (player1Hand === "rock") {
    if (player2Hand === "paper") {
      console.log(
        `${p2.name} wins with paper against ${p1.name} who played rock.`
      );
      // winner = player2Hand;
      return p2;
    } else if (player2Hand === "scissors") {
      console.log(
        `${p1.name} wins with rock against ${p2.name} who played scissors.`
      );
      // winner = player1Hand;
      return p1;
    } else {
      console.log(`It's a tie between ${p1.name} and ${p2.name} with rocks!`);
      return null;
    }
  } else if (player1Hand === "paper") {
    if (player2Hand === "rock") {
      console.log(
        `${p1.name} wins with paper against ${p2.name} who played rock.`
      );
      // winner = player1Hand;
      return p1;
    } else if (player2Hand === "scissors") {
      console.log(
        `${p2.name} wins with scissors against ${p1.name} who played paper.`
      );
      // winner = player2Hand;
      return p2;
    } else {
      console.log(`It's a tie between ${p1.name} and ${p2.name} with paper!`);
      return null;
    }
  } else if (player1Hand === "scissors") {
    if (player2Hand === "rock") {
      console.log(
        `${p2.name} wins with rock against ${p1.name} who played scissors.`
      );
      // winner = player2Hand;
      return p2;
    } else if (player2Hand === "paper") {
      console.log(
        `${p1.name} wins with scissors against ${p2.name} who played paper.`
      );
      // winner = player1Hand;
      return p1;
    } else {
      console.log(
        `It's a tie between ${p1.name} and ${p2.name} with scissors!`
      );
      return null;
    }
  }
  // return winner;
  return null;
}

// playRound(player1, player2);

// Define a function called playGame() that takes arguments player1, player2, and playUntil.
// Play rounds until one of the players wins playUntil hands
// When one player has won enough games, return the winning player object
// Play a game to 3 wins

function playGame(playerOne, playerTwo, playUntil) {
  let p1W = 0;
  let p2W = 0;

  while (p1W < playUntil && p2W < playUntil) {
    let roundOneWinner = playRound(playerOne, playerTwo);

    if (roundOneWinner === playerOne) {
      p1W++;
    } else {
      p2W++;
    }
  }
  return p1W > p2W ? player1 : player2;
}

// playGame(playerA, playerB, 5);

// Define a function called playTournament()
// Take 4 players and playUntil as arguments
// Play a game between the first two players, and the second two players
// Play a game between the winners of the first round.
// Announce the tournament winner's name "[name] is the world champion";

function playTournament(
  player_One,
  player_Two,
  player_Three,
  player_Four,
  playUntil
) {
  let firstRound = playGame(player_One, player_Two, playUntil);
  console.log(`The winner is ${firstRound.name}!`);
  console.log("");
  firstRound.wins = 0;
  // console.log(`${firstRound.name} wins first round tournament!`);

  let secondRound = playGame(player_Three, player_Four, playUntil);
  // console.log(`${secondRound.name} wins second round tournament!`);
  console.log(`The winner is ${secondRound.name}!`);
  console.log("");
  secondRound.wins = 0;

  let finalRound = playGame(firstRound, secondRound, playUntil);
  console.log(`${finalRound.name} is world champion!!`);
}

playTournament(blake, emily, tyler, jacob, 3);

// let firstRound = playGame(first, second, playUntil);
// console.log("The winner is " + firstRound.name + "!");
// firstRound.wins = 0;
// console.log(firstRound.name);
// let secondRound = playGame(third, fourth, playUntil);
// console.log(secondRound.name);
// console.log("The winner is " + secondRound.name + "!");
// secondRound.wins = 0;
// let finalRound = playGame(firstRound, secondRound, playUntil);
// console.log(finalRound.name + " is world champion!");

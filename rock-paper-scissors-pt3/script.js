const game = () => {
  const userChoiceDisplay = document.getElementById("user-choice");
  const computerChoiceDisplay = document.getElementById("computer-choice");
  const resultDisplay = document.getElementById("result");
  const possibleChoices = document.querySelectorAll("button");
  let userChoice;
  let computerChoice;
  let result;

  possibleChoices.forEach((possibleChoice) =>
    possibleChoice.addEventListener("click", (e) => {
      userChoice = e.target.id;
      userChoiceDisplay.innerHTML = userChoice;
      generateComputerChoice();
      playGame();
    })
  );

  function generateComputerChoice() {
    const randomChoice = Math.floor(Math.random() * possibleChoices.length) + 1;
    // console.log(randomChoice);

    if (randomChoice === 1) {
      computerChoice = "ROCK";
    }
    if (randomChoice === 2) {
      computerChoice = "PAPER";
    }
    if (randomChoice === 3) {
      computerChoice = "SCISSORS";
    }

    computerChoiceDisplay.innerHTML = computerChoice;

    
  }



  function playGame() {
    

      if (userChoice === "ROCK") {
        if (computerChoice === "PAPER") {
          result = "Computer wins!";
          console.log(
            `Computer Choice wins with paper against You who played rock.`
          );

          return computerChoice;
        } else if (computerChoice === "SCISSORS") {
          result = "You win!";
          console.log(
            `You win with rock against the Computer Choice who played scissors.`
          );

          return userChoice;
        } else {
          result = "It's a tie with rocks!";
          console.log(
            `It's a tie between You and the Computer Choice with rocks!`
          );
          // return null;
        }
      } else if (userChoice === "PAPER") {
        if (computerChoice === "ROCK") {
          result = "You win!";
          console.log(
            `You win with paper against the Compute Choice who played rock.`
          );

          return userChoice;
        } else if (computerChoice === "SCISSORS") {
          result = "Computer wins!";
          console.log(
            `Computer Choice wins with scissors against You who played paper.`
          );

          // return computerChoice;
        } else {
          result = "It's a tie with paper!";
          console.log(
            `It's a tie between You and the Computer Choice with paper!`
          );
          // return null;
        }
      } else if (userChoice === "SCISSORS") {
        if (computerChoice === "ROCK") {
          result = "Computer wins!";
          console.log(
            `Computer Choice wins with rock against You who played scissors.`
          );

          // return computerChoice;
        } else if (computerChoice === "PAPER") {
          result = "You win!";
          console.log(
            `You win with scissors against the Computer Choice who played paper.`
          );

          // return userChoice;
        } else {
          result = "It's a tie with scissors!";
          console.log(
            `It's a tie between You and the Computer Choice with scissors!`
          );
          // return null;
        }
      }

      // return null;

      resultDisplay.innerHTML = result;
    };
  }


game();

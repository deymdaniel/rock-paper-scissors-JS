function game() {
  // Variables

  const choices = ["Rock", "Paper", "Scissors"];
  let playerChoice = "";
  let computerChoice = "";
  let playerScore = 0;
  let computerScore = 0;

  //Computer Choice

  function getComputerChoice() {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log("Computer chose " + computerChoice);
  }

  //Player Choice
  function playGame() {
    const rockBtn = document.querySelector("#rock");
    const paperBtn = document.querySelector("#paper");
    const scissorsBtn = document.querySelector("#scissors");

    rockBtn.addEventListener("click", () => {
      playerChoice = "Rock";
      getComputerChoice();
      console.log("You chose " + playerChoice);
      Result();
    });
    paperBtn.addEventListener("click", () => {
      playerChoice = "Paper";
      getComputerChoice();
      console.log("You chose " + playerChoice);
      Result();
    });
    scissorsBtn.addEventListener("click", () => {
      playerChoice = "Scissors";
      getComputerChoice();
      console.log("You chose " + playerChoice);
      Result();
    });

    function Result() {
      if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
      ) {
        playerScore++;
        console.log("Player: " + playerScore + " Computer: " + computerScore);
      } else if (playerChoice === computerChoice) {
        console.log("Its a tie");
      } else {
        computerScore++;
        console.log("Player: " + playerScore + " Computer: " + computerScore);
      }

      if (playerScore == 5) {
        console.log("YOU WIN");
      } else if (computerScore == 5) {
        console.log("YOU LOSE");
      }
    }
  }

  playGame();
}

game();

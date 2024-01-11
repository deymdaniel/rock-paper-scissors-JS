function game() {
  // Variables

  const choices = ["Rock", "Paper", "Scissors"];
  const resultContent = document.querySelector("#result");
  const winnerContent = document.querySelector("#winner");
  const choicesContent = document.querySelector("#choices");
  let playerChoice = "";
  let computerChoice = "";
  let playerScore = 0;
  let computerScore = 0;

  //Computer Choice

  function getComputerChoice() {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
  }

  //Player Choice
  function playGame() {
    const rockBtn = document.querySelector("#rock");
    const paperBtn = document.querySelector("#paper");
    const scissorsBtn = document.querySelector("#scissors");

    rockBtn.addEventListener("click", () => {
      playerChoice = "Rock";
      getComputerChoice();
      const choice = document.createElement("p");
      choice.textContent =
        "You chose " + playerChoice + " | Computer chose " + computerChoice;
      choicesContent.appendChild(choice);
      //console.log("You chose " + playerChoice);
      gameResult();
    });
    paperBtn.addEventListener("click", () => {
      playerChoice = "Paper";
      getComputerChoice();
      const choice = document.createElement("p");
      choice.textContent =
        "You chose " + playerChoice + " | Computer chose " + computerChoice;
      choicesContent.appendChild(choice);

      //console.log("You chose " + playerChoice);
      gameResult();
    });
    scissorsBtn.addEventListener("click", () => {
      playerChoice = "Scissors";
      getComputerChoice();
      const choice = document.createElement("p");
      choice.textContent =
        "You chose " + playerChoice + " | Computer chose " + computerChoice;
      choicesContent.appendChild(choice);

      //console.log("You chose " + playerChoice);
      gameResult();
    });

    function gameResult() {
      if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
      ) {
        playerScore++;
        const scoreBoard = document.createElement("div");
        scoreBoard.textContent =
          "Player: " + playerScore + " Computer: " + computerScore;
        resultContent.appendChild(scoreBoard);

        //console.log("Player: " + playerScore + " Computer: " + computerScore);
      } else if (playerChoice === computerChoice) {
        const scoreBoard = document.createElement("div");
        scoreBoard.textContent = "Its a Tie";
        resultContent.appendChild(scoreBoard);

        //console.log("Its a tie");
      } else {
        computerScore++;
        const scoreBoard = document.createElement("div");
        scoreBoard.textContent =
          "Player: " + playerScore + " Computer: " + computerScore;
        resultContent.appendChild(scoreBoard);

        //console.log("Player: " + playerScore + " Computer: " + computerScore);
      }

      if (playerScore == 5) {
        const winner = document.createElement("h1");
        winner.textContent = "YOU WIN!";
        winnerContent.appendChild(winner);
        //console.log("YOU WIN");
      } else if (computerScore == 5) {
        const winner = document.createElement("h1");
        winner.textContent = "YOU LOSE!";
        winnerContent.appendChild(winner);

        //console.log("YOU LOSE");
      }
    }
  }

  playGame();
}

game();

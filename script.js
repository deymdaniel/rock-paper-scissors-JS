// constants

const choices = ["rock", "paper", "scissors"];
let computerChoice;
let userChoice;
let playerScore = 0;
let computerScore = 0;

// player choice

function getPlayerChoice() {
  userChoice = prompt(choices).toLowerCase();
  if (userChoice == "rock") {
    console.log("You chose " + userChoice);
  } else if (userChoice == "paper") {
    console.log("You chose " + userChoice);
  } else if (userChoice == "scissors") {
    console.log("You chose " + userChoice);
  } else if (userChoice == "") {
    console.log("Invalid Input!");
  } else {
    console.log("Invalid input!");
  }
}

//computer choice

function getComputerChoice() {
  computerChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log("Computer chose " + computerChoice);
}

//find winner
function getResult() {
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    console.log(
      "You win! " +
        "Player Score: " +
        playerScore +
        " Computer Score: " +
        computerScore
    );
  } else if (userChoice === computerChoice) {
    console.log("Its a tie!");
  } else {
    computerScore++;
    console.log(
      "Computer wins! " +
        "Player Score: " +
        playerScore +
        " Computer Score: " +
        computerScore
    );
  }
}

//round system

function game() {
  if (playerScore == 3) {
    alert("YOU WIN!!!!");
    return;
  } else if (computerScore == 3) {
    alert("YOU LOSE");
    return;
  } else {
    getPlayerChoice();
    getComputerChoice();
    getResult();
  }
  if (playerScore == 3) {
    alert("YOU WIN!!!!");
    return;
  } else if (computerScore == 3) {
    alert("YOU LOSE");
    return;
  } else {
    getPlayerChoice();
    getComputerChoice();
    getResult();
  }
  if (playerScore == 3) {
    alert("YOU WIN!!!!");
    return;
  } else if (computerScore == 3) {
    alert("YOU LOSE");
    return;
  } else {
    getPlayerChoice();
    getComputerChoice();
    getResult();
  }
  if (playerScore == 3) {
    alert("YOU WIN!!!!");
    return;
  } else if (computerScore == 3) {
    alert("YOU LOSE");
    return;
  } else {
    getPlayerChoice();
    getComputerChoice();
    getResult();
  }
  if (playerScore == 3) {
    alert("YOU WIN!!!!");
    return;
  } else if (computerScore == 3) {
    alert("YOU LOSE");
    return;
  } else {
    getPlayerChoice();
    getComputerChoice();
    getResult();
  }
  if (playerScore == 3) {
    alert("YOU WIN!!!!");
    return;
  } else if (computerScore == 3) {
    alert("YOU LOSE");
    return;
  } else {
    getPlayerChoice();
    getComputerChoice();
    getResult();
  }
  if (playerScore == 3) {
    alert("YOU WIN!!!!");
    return;
  } else if (computerScore == 3) {
    alert("YOU LOSE");
    return;
  } else {
    getPlayerChoice();
    getComputerChoice();
    getResult();
  }
  if (playerScore == 3) {
    alert("YOU WIN!!!!");
    return;
  } else if (computerScore == 3) {
    alert("YOU LOSE");
    return;
  } else {
    getPlayerChoice();
    getComputerChoice();
    getResult();
  }
  if (playerScore == 3) {
    alert("YOU WIN!!!!");
    return;
  } else if (computerScore == 3) {
    alert("YOU LOSE");
    return;
  } else {
    getPlayerChoice();
    getComputerChoice();
    getResult();
  }
  if (playerScore == 3) {
    alert("YOU WIN!!!!");
    return;
  } else if (computerScore == 3) {
    alert("YOU LOSE");
    return;
  } else {
    getPlayerChoice();
    getComputerChoice();
    getResult();
  }
}

game();

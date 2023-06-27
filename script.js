/* Computer chooses */
let choice = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return choice[Math.floor(Math.random() * a.length)];
}

/* Player chooses */
let a = "Rock";
let b = "Paper";
let c = "Scissors";

function playerChoice() {
  let playerChoice = prompt("Choose");

  if (playerChoice.toLowerCase() === a.toLowerCase()) {
    playerChoice = a;
    console.log("You chose Rock!");
  } else if (playerChoice.toLowerCase() === b.toLowerCase()) {
    playerChoice = b;
    console.log("You chose Paper!");
  } else if (playerChoice.toLowerCase() === c.toLowerCase()) {
    playerChoice = c;
    console.log("You chose Scissors!");
  }
}

function result(playerChoice, getComputerChoice) {
  if (playerChoice === getComputerChoice) {
    alert("Tie");
  } else if ((a, "Paper")) {
    alert("Computer chose paper, you lose");
  } else if ((b, "Scissors")) {
    alert("Computer chose scissors, you lose");
  } else if ((c, "Rock")) {
    alert("Computer chose rock, you lose");
  } else {
    alert("computer chose " + getComputerChoice() + " you win");
  }
}

playerChoice();
getComputerChoice();
result(playerChoice, getComputerChoice);

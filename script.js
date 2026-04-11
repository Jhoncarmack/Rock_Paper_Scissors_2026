let input = prompt("가위 바위 보 하겠습니다. 원하시는걸 내세요. ex) Rock / Paper / Scissors");
function getHumanChoice() {
   if (input.toUpperCase() === "ROCK") {
      return "Rock";
   } else if (input.toUpperCase() === "SCISSORS") {
      return "Scissors";
   } else {
      return "Paper";
   }
}

function getComputerChoice() {
   if (Math.random() * 3 === 0) {
      return "Rock";
   } else if (Math.random() * 3 === 1) {
      return "Scissors";
   } else {
      return "Paper";
   }
}
getHumanChoice();
getComputerChoice();

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
   if (humanChoice.toUpperCase() === "ROCK") {
      if (computerChoice.toUpperCase() === "ROCK") {
         console.log("비겼다");
         console.log(computerSelection);
      } else if (computerChoice.toUpperCase() === "SCISSORS") {
         console.log("이겼다.");
         console.log(computerSelection);
         humanScore++;
      } else {
         console.log("졌다");
         console.log(computerSelection);
         computerScore++;
      }
   }
   if (humanChoice.toUpperCase() === "SCISSORS") {
      if (computerChoice.toUpperCase() === "SCISSORS") {
         console.log("비겼다");
         console.log(computerSelection);
      } else if (computerChoice.toUpperCase() === "PAPER") {
         console.log("이겼다");
         console.log(computerSelection);
         humanScore++;
      } else {
         console.log("졌다");
         console.log(computerSelection);
         computerScore++;
      }
   }
   if (humanChoice.toUpperCase() === "PAPER") {
      if (computerChoice.toUpperCase() === "PAPER") {
         console.log("비겼다");
         console.log(computerSelection);
      } else if (computerChoice.toUpperCase() === "ROCK") {
         console.log("이겼다.");
         console.log(computerSelection);
         humanScore++;
      } else {
         console.log("졌다");
         console.log(computerSelection);
         computerScore++;
      }
   }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

// playRound(getHumanChoice(), getComputerChoice());

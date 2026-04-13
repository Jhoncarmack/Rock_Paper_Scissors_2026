let input;
let humanScore = 0;
let computerScore = 0;
function getHumanChoice() {
   input = prompt("가위 바위 보 하겠습니다. 원하시는걸 내세요. ex) Rock / Paper / Scissors");
   if (input.toUpperCase() === "ROCK") {
      return "Rock";
   } else if (input.toUpperCase() === "SCISSORS") {
      return "Scissors";
   } else {
      return "Paper";
   }
}

function getComputerChoice() {
   if (Math.floor(Math.random() * 3) === 0) {
      return "Rock";
   } else if (Math.floor(Math.random() * 3) === 1) {
      return "Scissors";
   } else {
      return "Paper";
   }
}

function playRound(humanChoice, computerChoice) {
   if (humanChoice.toUpperCase() === "ROCK") {
      if (computerChoice.toUpperCase() === "ROCK") {
         console.log("비겼다 서로주먹이기때문입니다 ");
      } else if (computerChoice.toUpperCase() === "SCISSORS") {
         console.log("이겼다. 주먹이 가위를 이기기때문입니다");

         humanScore++;
      } else {
         console.log("졌다 주먹이 보한테 지기때문입니다");

         computerScore++;
      }
   }
   if (humanChoice.toUpperCase() === "SCISSORS") {
      if (computerChoice.toUpperCase() === "SCISSORS") {
         console.log("비겼다 서로 가위이기 때문입니다");
      } else if (computerChoice.toUpperCase() === "PAPER") {
         console.log("이겼다 가위가 보를 이기기때문입니다");

         humanScore++;
      } else {
         console.log("졌다 가위가 주먹한테 지기때문입니다");

         computerScore++;
      }
   }
   if (humanChoice.toUpperCase() === "PAPER") {
      if (computerChoice.toUpperCase() === "PAPER") {
         console.log("비겼다 서로 보자기 이기 때문입니다");
      } else if (computerChoice.toUpperCase() === "ROCK") {
         console.log("이겼다. 보가 주먹을 이기기때문입니다");

         humanScore++;
      } else {
         console.log("졌다 보가 가위한테 지기때문입니다");

         computerScore++;
      }
   }
}

function playGame() {
   for (let i = 0; i < 5; i++) {
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection);
   }
}
playGame();

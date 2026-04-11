let input = prompt("가위 바위 보 하겠습니다. 원하시는걸 내세요. ex) Rock / Paper / Scissors");
function getHumanChoice() {
   if (input === "Rock") {
      return "Rock";
   } else if (input === "Scissors") {
      return "Scissors";
   } else {
      return "Paper";
   }
}

function getComputerChoice() {
   if (Math.random() * 3 === 0) {
      return "ROCK";
   } else if (Math.random() * 3 === 1) {
      return "Scissors";
   } else {
      return "Paper";
   }
}
getHumanChoice();
getComputerChoice();

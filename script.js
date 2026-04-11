function getComputerChoice() {
   if (Math.random() * 3 === 0) {
      return "ROCK";
   } else if (Math.random() * 3 === 1) {
      return "Scissors";
   } else {
      return "Paper";
   }
}
getComputerChoice();

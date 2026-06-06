const rockButton = document.createElement("button");
rockButton.id = "rock";
const paperButton = document.createElement("button");
paperButton.id = "paper";
const scissorsButton = document.createElement("button");
scissorsButton.id = "scissors";
const p = document.createElement("p");
const body = document.querySelector("body");
rockButton.textContent = "주먹";
paperButton.textContent = "보";
scissorsButton.textContent = "가위";
body.appendChild(p);
p.append(rockButton, paperButton, scissorsButton);

function getComputerChoice() {
   if (Math.floor(Math.random() * 3) === 0) {
      return "Rock";
   } else if (Math.floor(Math.random() * 3) === 1) {
      return "Scissors";
   } else {
      return "Paper";
   }
}

const div = document.createElement("div");
const humanTextNode = document.createTextNode("사용자: ");
const label1 = document.createTextNode("0");
const computerTextNode = document.createTextNode(" | 컴퓨터: ");
const label2 = document.createTextNode("0");
const totalTextNode = document.createTextNode(" | 총 경기수: ");
const label3 = document.createTextNode("0");

div.append(
   humanTextNode,
   label1,
   computerTextNode,
   label2,
   totalTextNode,
   label3,
);
body.appendChild(div);

let humanTotal = 0;
let computerTotal = 0;
let total = 0;

function reset() {
   label1.nodeValue = 0;
   label2.nodeValue = 0;
   label3.nodeValue = 0;
   humanTotal = 0;
   computerTotal = 0;
   total = 0;
}

let computer;
p.addEventListener("click", (event) => {
   let target = event.target;
   switch (target.id) {
      case "rock":
         computer = getComputerChoice();
         human = "Rock";

         if (computer.toUpperCase() === "ROCK") {
            console.log("비겼습니다 둘다 주먹이기때문입니다.");
            total++;

            label3.nodeValue = total;
         } else if (computer.toUpperCase() === "PAPER") {
            console.log("졌습니다. 컴퓨터는 보기 때문 보가 주먹을 이깁니다.");
            computerTotal++;
            label2.nodeValue = computerTotal;
            total++;
            label3.nodeValue = total;
         } else {
            console.log(
               "이겼습니다. 컴퓨터가 가위이기에 주먹이 가위를 이깁니다.",
            );
            humanTotal++;
            label1.nodeValue = humanTotal;
            total++;
            label3.nodeValue = total;
         }

         break;
      case "paper":
         computer = getComputerChoice();
         human = "Paper";
         if (computer.toUpperCase() === "ROCK") {
            console.log("이겼습니다. 컴퓨터는 주먹이기에 보가 주먹을 이깁니다");
            humanTotal++;
            label1.nodeValue = humanTotal;
            total++;
            label3.nodeValue = total;
         } else if (computer.toUpperCase() === "PAPER") {
            console.log("비겼습니다. 둘다 보기 때문입니다.");
            total++;

            label3.nodeValue = total;
         } else {
            console.log("졌습니다. 컴퓨터가 가위기에 보가 가위한테 집니다");
            computerTotal++;
            label2.nodeValue = computerTotal;
            total++;
            label3.nodeValue = total;
         }

         break;
      case "scissors":
         computer = getComputerChoice();
         human = "Scissors";
         if (computer.toUpperCase() === "ROCK") {
            console.log("졌습니다. 컴퓨터는 주먹이기에 가위가 주먹한테 집니다");
            computerTotal++;
            label2.nodeValue = computerTotal;
            total++;
            label3.nodeValue = total;
         } else if (computer.toUpperCase() === "PAPER") {
            console.log("이겼습니다. 컴퓨터가 보기에 가위가 보를 이깁니다");
            humanTotal++;
            label1.nodeValue = humanTotal;
            total++;
            label3.nodeValue = total;
         } else {
            console.log("비겼습니다 둘다 가위입니다");
            total++;

            label3.nodeValue = total;
         }

         break;
   }
   if (humanTotal >= 5 || computerTotal >= 5) {
      setTimeout(() => {
         if (humanTotal > computerTotal) {
            alert("게임종료! 사용자 승리!");
            reset();
         } else if (computerTotal > humanTotal) {
            alert("게임종료! 컴퓨터 승리!");
            reset();
         } else {
            alert("게임종료! 비겼습니다");
            reset();
         }
      }, 10);
   }
});

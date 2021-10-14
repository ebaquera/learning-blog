let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

const message = document.getElementById("message");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player1Dice = document.getElementById("player1Dice");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const player2Dice = document.getElementById("player2Dice");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

rollBtn.addEventListener("click", function () {
  newRoll();
});

function newRoll() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  if (player1Turn) {
    player1Score += randomNumber;
    player1Scoreboard.textContent = player1Score;
    message.textContent = "Player 1 rolled " + randomNumber;
    player1Dice.textContent = randomNumber;
    player1Dice.classList.add("active");
    player2Dice.classList.remove("active");
  } else {
    player2Score += randomNumber;
    player2Scoreboard.textContent = player2Score;
    message.textContent = "Player 2 rolled " + randomNumber;
    player2Dice.textContent = randomNumber;
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
  }
  player1Turn = !player1Turn;
  if ((player1Score >= 20) & (player2Score < 20)) {
    message.textContent = "Player 1 wins";
    reset();
  } else if ((player2Score >= 20) & (player1Score < 20)) {
    message.textContent = "Player 2 wins";
    reset();
  }
}

function reset() {
  rollBtn.style.display = "none";
  resetBtn.style.display = "block";
}

resetBtn.addEventListener("click", function () {
  rollBtn.style.display = "block";
  resetBtn.style.display = "none";
  player1Dice.textContent = "-";
  player2Dice.textContent = "-";
  player1Score = 0;
  player2Score = 0;
  player1Scoreboard.textContent = "";
  player2Scoreboard.textContent = "";
  player1Turn = true;
  newRoll();
});

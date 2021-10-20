const grid = document.querySelector(".grid");
const startButton = document.getElementById("start");
const score = document.getElementById("score");
let squares = [];
let currentSnake = [2, 1, 0];
let direction = 1;
const width = 10;
let appleIndex = 0;
let scoreSum = 0;
let intervalTime = 1000;
const speed = 0.9;
let timerId = 0;
const msg = document.getElementById("message");

function createGrid() {
  for (let i = 0; i < width * width; i++) {
    //create element
    const square = document.createElement("div");
    //add styling to elements
    square.classList.add("square");
    //put element into the grid
    grid.appendChild(square);
    //push element into array
    squares.push(square);
  }
}
createGrid();

currentSnake.forEach((index) => squares[index].classList.add("snake"));
// for (let i = 0; i < currentSnake.length; i++) {
//   squares[i].classList.add("snake");
// }

function startGame() {
  currentSnake.forEach((index) => squares[index].classList.remove("snake"));
  squares[appleIndex].classList.remove("apple");
  clearInterval(timerId);
  currentSnake = [2, 1, 0];
  direction = 1;
  scoreSum = 0;
  score.textContent = scoreSum;
  intervalTime = 1000;
  currentSnake.forEach((index) => squares[index].classList.add("snake"));
  timerId = setInterval(move, intervalTime);
  generateApple();
  msg.textContent = "";
}

function gameOver() {
  clearInterval(timerId);
  msg.textContent = "Game over!";
}

function move() {
  console.log(currentSnake[0] - width < 0, direction === -width);
  if (
    (currentSnake[0] + width >= width * width && direction === width) || //if snake has hit bottom
    (currentSnake[0] - width < 0 && direction === -width) || //if snake has hit top
    (currentSnake[0] % width === 0 && direction === -1) || //if snake has hit left
    (currentSnake[0] % width === width - 1 && direction === 1) || //if snake has hit right
    squares[currentSnake[0] + direction].classList.contains("snake")
  ) {
    return gameOver();
  }

  const tail = currentSnake.pop();
  //removes last element in array
  squares[tail].classList.remove("snake");
  //removes styling from last element
  currentSnake.unshift(currentSnake[0] + direction);
  //adds 1 to the first element of the array
  if (squares[currentSnake[0]].classList.contains("apple")) {
    //remove the class of apple
    squares[currentSnake[0]].classList.remove("apple");
    //grow our snake by adding class of snake to it
    squares[tail].classList.add("snake");
    //grow our snake array
    currentSnake.push(tail);
    //generate a new apple
    generateApple();
    //add one to the score
    scoreSum++;
    score.textContent = scoreSum;
    //speed up our snake
    clearInterval(timerId);
    intervalTime = intervalTime * speed;
    timerId = setInterval(move, intervalTime);
    console.log(intervalTime);
  }

  squares[currentSnake[0]].classList.add("snake");
  //adds styling
}

function generateApple() {
  do {
    appleIndex = Math.floor(Math.random() * squares.length);
  } while (squares[appleIndex].classList.contains("snake"));
  squares[appleIndex].classList.add("apple");
}
generateApple();

function control(event) {
  switch (event.key) {
    case "ArrowRight":
      console.log("right");
      direction = 1;
      break;
    case "ArrowUp":
      console.log("up");
      direction = -width;
      break;
    case "ArrowLeft":
      console.log("left");
      direction = -1;
      break;
    case "ArrowDown":
      console.log("down");
      direction = +width;
      break;
    default:
      console.log(event.key);
      return;
  }
}

document.addEventListener("keydown", control);
startButton.addEventListener("click", startGame);

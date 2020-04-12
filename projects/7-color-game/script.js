let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setupModeButtons();
  setupSquares();

  resetButton.addEventListener("click", function () {
    resetGame();
  });

  resetGame();
}

function setupModeButtons() {
  for (let index = 0; index < modeButtons.length; index++) {
    modeButtons[index].addEventListener("click", function () {
      if (!this.classList.contains("selected")) {
        modeButtons.forEach(function (button) {
          button.classList.toggle("selected");
        });

        numSquares = this.textContent === "Easy" ? 3 : 6;
        resetGame();
      }
    });
  }
}

function setupSquares() {
  for (let index = 0; index < squares.length; index++) {
    // Add initial colors to squares
    squares[index].style.backgroundColor = colors[index];
    // Add click listeners to squares
    squares[index].addEventListener("click", function () {
      // Grab color of clicked square
      let clickedColor = this.style.backgroundColor;
      // Compare to picked color
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "play again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = pickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try again";
      }
    });
  }
}

function resetGame() {
  // Generate new colors
  colors = generateRandomColors(numSquares);
  // Pick a new random color
  pickedColor = pickColor();
  // Change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  resetButton.textContent = "new colors";
  // Change colors of squares
  for (let index = 0; index < squares.length; index++) {
    if (colors[index]) {
      squares[index].style.backgroundColor = colors[index];
      squares[index].style.display = "Block";
    } else {
      squares[index].style.display = "None";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

function changeColors(color) {
  for (let index = 0; index < squares.length; index++) {
    squares[index].style.backgroundColor = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  let arr = [];

  for (let index = 0; index < num; index++) {
    arr.push(randomColor());
  }

  return arr;
}

function randomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}

let numSquares = 6;
let colors = generateRandomColors(numSquares);

const squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function () {
  if (!easyBtn.classList.contains("selected")) {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let index = 0; index < squares.length; index++) {
      if (colors[index]) {
        squares[index].style.backgroundColor = colors[index];
      } else {
        squares[index].style.display = "None";
      }
    }
  }
});

hardBtn.addEventListener("click", function () {
  if (!hardBtn.classList.contains("selected")) {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let index = 0; index < squares.length; index++) {
      squares[index].style.backgroundColor = colors[index];
      squares[index].style.display = "Block";
    }
  }
});

resetButton.addEventListener("click", function () {
  resetButton.textContent = "new colors";
  // Generate new colors
  colors = generateRandomColors(numSquares);
  // Pick a new random color
  pickedColor = pickColor();
  // Change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  // Change colors of squares
  for (let index = 0; index < squares.length; index++) {
    squares[index].style.backgroundColor = colors[index];
  }

  h1.style.backgroundColor = "#232323";
});

colorDisplay.textContent = pickedColor;

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
      changeColors(clickedColor);
      h1.style.backgroundColor = pickedColor;
      resetButton.textContent = "play again?";
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try again";
    }
  });
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
/**
 *
 * @param {number} num
 */
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

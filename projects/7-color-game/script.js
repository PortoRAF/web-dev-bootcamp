let colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)",
];

const squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");

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

// function generateColor() {
//   let color = [];
//   for (let index = 0; index < 3; index++) {
//     color[index] = Math.floor(Math.random() * 255 + 1);
//   }

//   return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
// }

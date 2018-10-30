let snakeLocation = Math.floor(Math.random() * 8) + 1;

function behindTheBox(number, snakeLocation) {
  if (number == snakeLocation) {
    document.getElementById(number).style.backgroundColor = "red";
  } else document.getElementById(number).style.backgroundColor = "blue";
}

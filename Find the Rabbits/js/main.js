let snakeLocation = Math.floor(Math.random() * 8) + 1;

function behindTheBox(number, snakeLocation) {
  if (number == snakeLocation) {
    document.getElementById(number).style.backgroundImage =
      "url(./img/snake.png)";
  } else
    document.getElementById(number).style.backgroundImage =
      "url(./img/rabbit.png)";
}

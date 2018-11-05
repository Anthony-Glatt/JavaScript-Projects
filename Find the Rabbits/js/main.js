let snakeLocation = Math.floor(Math.random() * 8) + 1;

function behindTheBox(number, snakeLocation) {
  if (number == snakeLocation) {
    document.getElementById(number).style.backgroundImage =
      "url(./img/snake.png)";
    setTimeout(lostGame, 700);
  } else
    document.getElementById(number).style.backgroundImage =
      "url(./img/rabbit.png)";
}

function lostGame() {
  const tryAgainB = document.createElement("button");
  tryAgainB.className = "tryAgainBtn";
  const tryAgainT = document.createTextNode("Try Again?");
  tryAgainB.appendChild(tryAgainT);
  tryAgainB.onclick = function() {
    location.reload();
  };
  document.body.appendChild(tryAgainB);
}

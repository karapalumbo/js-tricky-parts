function guessingGame() {
  let randomNum = Math.floor(Math.random() * 100);
  let guesses = 0;
  let gameOver = false;

  return function guess(num) {
    if (gameOver) return "The game is over, you already won!";
    guesses++;
    if (num === randomNum) {
      gameOver = true;
      return `You win! You found ${num} in ${guesses} guesses.`;
    }
    if (num > randomNum) return `${num} is too high!`;
    if (num < randomNum) return `${num} is too low!`;
  };
}

module.exports = { guessingGame };

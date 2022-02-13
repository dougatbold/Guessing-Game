'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// To Remove Question Mark When Testing
// document.querySelector('.number').textContent = secretNumber;

//Refactoring: Functions to cutdown on display messages/code length

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

// (Score is reflected on the right side of game—different from "number," which is a player's guess on the lefthand side)
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When There's No Input
  if (!guess) {
    displayMessage('🛑 No number!');

    // When Player Wins
  } else if (guess === secretNumber) {
    displayMessage("That's correct! 🥳");
    displayNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '40rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When Guess Is Too High Or Too Low
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? 'Sorry. Too high! Try again.'
          : 'Sorry. Too low! Try again.'
      );
      score--;
      displayScore(score);
    } else {
      displayMessage('Game Over 💀');
      displayScore(0);
    }
  }
});

//Resetting The Game With "Again" Button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayScore(score);

  displayMessage('Start guessing...');

  displayNumber('?');

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});

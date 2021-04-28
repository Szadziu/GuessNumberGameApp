'use strict';

const secretNumber = document.querySelector('.number');
const btnCheck = document.querySelector('.check');
const userInput = document.querySelector('.guess');
const messageOnScreen = document.querySelector('.message');
const userScore = document.querySelector('.score');
const userHighScore = document.querySelector('.highscore');

// Variables
let num = Math.trunc(Math.random() * 20) + 1;
let score = 20;
// Try again function
document.querySelector('.again').addEventListener('click', function () {
  document.body.style.backgroundColor = '#222';
  score = 20;
  num = Math.trunc(Math.random() * 20) + 1;
  messageOnScreen.textContent = '⌛ Start guessing...';
  secretNumber.textContent = '?';
  userInput.value = '';
  userScore.textContent = score;
  btnCheck.removeAttribute('disabled');
  userInput.removeAttribute('disabled');
  secretNumber.style.width = '15rem';
});
// Implementation check button
btnCheck.addEventListener('click', function () {
  if (score) {
    //   Bad input value
    if (!userInput.value) {
      messageOnScreen.textContent = '⚠️ No number!';
    } else if (userInput.value > 20 || userInput.value < 1) {
      messageOnScreen.textContent = '⚠️ Guess from 1 to 20';
    }
    // When player wins
    else if (userInput.value == num) {
      messageOnScreen.textContent = '🏆 You won!';
      document.body.style.backgroundColor = 'green';
      secretNumber.style.width = '40rem';
      secretNumber.textContent = num;
      if (score > userHighScore.textContent) {
        userHighScore.textContent = score;
      }
      btnCheck.setAttribute('disabled', '');
      userInput.setAttribute('disabled', '');
    }
    // When player guess too high
    else if (userInput.value > num) {
      messageOnScreen.textContent = '⬆️ Too high!';
      score--;
      userScore.textContent = score;
      if (!score) {
        messageOnScreen.textContent = '😱 You lose the game!';
      }
    }
    // When player guess too low
    else if (userInput.value < num) {
      messageOnScreen.textContent = '⬇️ Too low!';
      score--;
      userScore.textContent = score;
      if (!score) {
        messageOnScreen.textContent = '😱 You lose the game!';
      }
    }
  }
});

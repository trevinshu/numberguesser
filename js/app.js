/* 
GAME FUNCTION: 
- Player must guess a number between min & max
- Player gets a certain amount of guesses
- Notify player of the guesses remaining
- Notify player when they guess correctly
- If they loose let them choose to play again
*/

//Game Values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

//UI Elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

//Assign UI Min/Max
minNum.textContent = min;
maxNum.textContent = max;

//Listen For Guess
guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);

  //Validate input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  //Check If Won
  if (guess === winningNum) {
    //Game Over: WON
    gameOver(true, `${winningNum} is correct, YOU WON`);
  } else {
    //Wrong Number
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      //Game Over: LOST
      gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
    } else {
      //Game Continues - Answer Wrong

      //Change border color
      guessInput.style.borderColor = 'red';

      //Clear input
      guessInput.value = '';

      //Tell user it's the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
    }
  }
});

//Game Over
function gameOver(won, msg) {
  let color;
  won === true ? (color = 'green') : (color = 'red');

  //Disable input
  guessInput.disabled = true;
  //Change border color
  guessInput.style.borderColor = color;
  //Set Text Color
  message.style.color = color;
  //Set Message
  setMessage(msg);
}

//Set Message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

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
    //Disable input
    guessInput.disabled = true;
    //Change border color
    guessInput.style.borderColor = 'green';
    //Set Message
    setMessage(`${winningNum} is correct, YOU WIN!`, 'green');
  }
});

//Set Message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

// ANCHOR name add pop up 
const btn = document.getElementById('enterName');
console.log(btn); //null

btn.addEventListener('click', updateName);

function updateName() {
  const name = prompt('Enter a new name');
  btn.textContent = `Welcome to hell ${name}`;
  console.log("hello " + name);
}
// TODO Floating menu script
// ANCHOR Floating menu 
document.getElementById('floatingMenu');


// Guessing game 
let randomNumber = Math.floor(Math.random() * 100) +1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
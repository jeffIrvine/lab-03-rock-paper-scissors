// import functions and grab DOM elements
import { getRandomThrow, didUserWin } from './get-random-throw.js';

// dom elements
const shootButton = document.querySelector('#shoot-button');
const winSpan = document.querySelector('#win-span');
const lossesSpan = document.querySelector('#loses-span');
const drawSpan = document.querySelector('#draw-span');
// const resultSpan = document.querySelector('#throw-result');
// const resetButton = document.querySelector('#percent-span');

// state
let numWins = 0;
let numLosses = 0;
let numDraws = 0;
// let totalGames = 0;

// event listener
shootButton.addEventListener('click', () => {
    // totalGames++;
    const checkedRadioButton = document.querySelector('input[name="weapon"]:checked');
    const userThrow = checkedRadioButton.value;
    const compThrow = getRandomThrow();
    
    const result = didUserWin(userThrow, compThrow);

    if (result === 'lose') {
        numLosses++;
    }
    if (result === 'win') {
        numWins++;
    }
    if (result === 'draw') {
        numDraws++;
    }

    winSpan.textContent = numWins;
    lossesSpan.textContent = numLosses;
    drawSpan.textContent = numDraws;

});
// set event listeners to update state and DOM
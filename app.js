// import functions and grab DOM elements
import { getRandomThrow } from './get-random-throw.js';

// dom elements
const shootButton = document.querySelector('#shoot-button');
const winSpan = document.querySelector('#win-span');
const lossesSpan = document.querySelector('#loses-span');
const drawSpan = document.querySelector('#draw-span');
const checkedRadioButton = document.querySelector(':checked');
const result = document.querySelector('#throw- result');
const resetButton = document.querySelector('#percent-span');


// state
let numWins = 0;
let numLosses = 0;
let numDraws = 0;
let totalGames = 0;

// event listeners
shootButton.addEventListener('click', () => {

    totalGames++;


})
// set event listeners to update state and DOM
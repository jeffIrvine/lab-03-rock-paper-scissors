
export function getRandomThrow() {
    const randNum = Math.ceil(Math.random() * 3);

    let compThrow;

    if (randNum === 1) {
        compThrow = 'rock';
    }
    else if (randNum === 2) {
        compThrow = 'paper';
    }
    else if (randNum === 3) {
        compThrow = 'scissors';
    }

    return compThrow;
}

export function didUserWin(userChoice, compChoice) {
    if (compChoice === userChoice) {
        return 'draw';
    }
    if (compChoice === 'rock' && userChoice === 'paper'){
        return 'win';
    } 
    if (compChoice === 'rock' && userChoice === 'scissors'){
        return 'lose';
    }
    if (compChoice === 'scissors' && userChoice === 'paper'){
        return 'lose';
    }
    if (compChoice === 'scissors' && userChoice === 'rock'){
        return 'win';
    }
    if (compChoice === 'paper' && userChoice === 'rock'){
        return 'lose';
    }
    if (compChoice === 'paper' && userChoice === 'scissors'){
        return 'win';
    }
}
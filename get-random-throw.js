


export function getRandomThrow() {
    const randNUm = Math.ceil(Math.random() * 3);

    let compThrow;

    if (randNUm === 1) {
        compThrow = 'rock';
    }
    else if (randNUm === 2) {
        compThrow = 'paper';
    }
    else if (randNUm === 3) {
        compThrow = 'scissors';
    }

    return compThrow;
}

export function didUserWin(userChoice, compChoice) {
    if (compChoice === 'rock' && userChoice === 'paper'){
        return userWon;
    }    
    // else if (compChoice === 'rock' && userChoice === 'scissors'){
    //     return 
    // }
    // else if (compChoice === 'scissors' && userChoice === 'paper'){

    // }
    // else if (compChoice === 'scissors' && userChoice === 'rock'){

    // }
    // else if (compChoice === 'paper' && userChoice === 'rock'){

    // }
    // else if (compChoice === 'paper' && userChoice === 'scissors'){

    // };
}
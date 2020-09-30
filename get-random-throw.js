


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
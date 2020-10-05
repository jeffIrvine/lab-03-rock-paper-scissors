// IMPORT MODULES under test here:
import { getRandomThrow, didUserWin } from '../get-random-throw.js';
// import { example } from '../example.js';

const test = QUnit.test;

test('should take in a random number and if type is equal to expected return true', (expect) => {
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow();
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(typeof actual, 'string');
});


test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'win';
    const actual = didUserWin('paper', 'rock');
 
    expect.equal(actual, expected);
});

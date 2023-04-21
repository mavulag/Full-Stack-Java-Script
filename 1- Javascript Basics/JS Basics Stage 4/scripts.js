/*
The Random Number Guessing Game
Generates a number between 1 and 6
and gives a player two attempts to
guess the number.
*/

// var randomNumber = Math.floor(Math.random() * 6) + 1;
// var guess = prompt('I am thinking of a number between 1 and 6. What is it?');

// if (parseInt(guess) === randomNumber) {
//     document.write('<p>You guessed the number!');
// } else {
//     document.write('<p>Sorry. The number was ' + randomNumber + '</p>');
// }

// var correctGuess = false;

// var randomNumber = Math.floor(Math.random() * 6) + 1;
// var guess = prompt('I am thinking of a number between 1 and 6. What is it?');

// if (parseInt(guess) === randomNumber) {
//     correctGuess = true;
// }

// if (correctGuess) {
//     document.write('<p>You guessed the number!');
// } else {
//     document.write('<p>Sorry. The number was ' + randomNumber + '</p>');
// }

// Assume the player didn't guess correctly
var correctGuess = false;

// Generate random number from 1 to 6
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');

/*
Test to see if player is
1. correct
2. guessed too high
3. guessed too low
*/
if (parseInt(guess) === randomNumber) {
    correctGuess = true;
} else if (parseInt(guess) < randomNumber) {
    var guessMore = prompt('Try again. The number I am thinking of is more than ' +
    guess);
    if (parseInt(guessMore) === randomNumber) {
        correctGuess = true;
    }
} else if (parseInt(guess) > randomNumber) {
    var guessLess = prompt('Try again. The number I am thinking of is less than ' +
    guess);
    if (parseInt(guessLess) === randomNumber) {
        correctGuess = true;
    }
}

// Test if player is correct and output response
if (correctGuess) {
    document.write('<p>You guessed the number!');
} else {
    document.write('<p>Sorry. The number was ' + randomNumber + '</p>');
}
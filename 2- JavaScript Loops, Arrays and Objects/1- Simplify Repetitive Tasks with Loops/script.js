var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber(upper) {
    var num = Math.floor(Math.random() * upper) + 1;
    return num;
}

/*
do {
    guess = prompt('I am thinking of a number between 1 and 10. What is it?');
    guessCount += 1;
    if (parseInt(guess) === randomNumber) {
        correctGuess = true;
    }
} while(!correctGuess)
*/

// or by using break keyword to break out of the loop
// either using "while (true)" or "while (guessCount < 10)"
while (guessCount < 10) {
    guess = prompt('I am thinking of a number between 1 and 10. What is it?');
    guessCount += 1;
    if (parseInt(guess) === randomNumber) {
        correctGuess = true;
        break;
    }
}

if (correctGuess) {
    document.write('<h1>You guessed the number!</h1>');
    document.write('It took you ' + guessCount + ' tries to guess the number ' + randomNumber);
} else {
    document.write('<h1>Sorry. You did not guess the number.</h1>');
}
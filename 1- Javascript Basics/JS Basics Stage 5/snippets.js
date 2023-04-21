/*
Quick challenge to check if all input are the numbers, throwing an error
message if one or both inputs are not a number
*/

function getRandomNumber (lower, upper) {

    if (isNaN(lower) || isNaN(upper)) {
        throw new Error('Wrong input!, should be a number.');
    }
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

console.log(getRandomNumber('hi', 6));
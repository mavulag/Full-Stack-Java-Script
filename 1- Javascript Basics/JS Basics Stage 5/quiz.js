function getRandomNumber(lower, upper) {
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

console.log(getRandomNumber(1, 6));
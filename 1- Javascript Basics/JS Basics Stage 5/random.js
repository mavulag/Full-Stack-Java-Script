function alertRandom() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    alert(randomNumber);
}

function getRandomNumber (upper) {
    var randomNumber = Math.floor(Math.random() * upper) + 1;
    return randomNumber;
};

// alertRandom();

// prompt on alert dialogue box
// alert(getRandomNumber());

// printing in the console
// console.log(getRandomNumber(6));

// simply store it to variable so you can use it later
// var dieRoll = getRandomNumber();

// A function to calculate the area of a triangle
function getArea(width, length, unit) {
    var area = width * length;
    return area + " " + unit;
}

console.log(getArea(10, 20, 'sq ft'));
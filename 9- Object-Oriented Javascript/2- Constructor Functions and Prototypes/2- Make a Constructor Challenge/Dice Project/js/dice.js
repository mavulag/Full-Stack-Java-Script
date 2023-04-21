// function diceRoll() {
//     let randomNumber = Math.floor(Math.random() * this.sides) + 1;
//     return randomNumber;
// }
// replaced by prototype

// creating a constructor
function Dice(sides) {
    this.sides = sides;
    // replaced by prototype
    // this.roll = diceRoll; 
}

Dice.prototype.roll = function () {
    let randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
}

let dice = new Dice(6);
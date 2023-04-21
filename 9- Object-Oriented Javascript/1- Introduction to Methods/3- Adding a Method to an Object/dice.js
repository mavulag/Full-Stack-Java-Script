let dice = {
    sides: 6,
    roll: function () {
        let randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
}

/*
let dice10 = {
    sides: 10,
    roll: function() {
        let randomNumber = Math.floor(Math.random() * this.sides) + 1;
        console.log(randomNumber);
    }
}
*/

// let randomNumber = dice.roll();
// console.log(randomNumber);

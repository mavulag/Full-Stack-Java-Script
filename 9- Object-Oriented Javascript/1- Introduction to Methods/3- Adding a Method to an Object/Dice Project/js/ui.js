function printNumber (number) {
    let placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
}

let button = document.getElementById("button");

button.onclick = function() {
    let result = dice.roll();
    printNumber(result);
};
var startNumber = prompt('Enter a starting number');
var startNum = parseInt(startNumber);

var number = prompt('Enter a number to generate random number');
var num = parseInt(number);

// var randomNumber = Math.floor(Math.random() * num) + 1;
var randomNumber = Math.floor(Math.random() * (num - startNum + 1)) + startNum;

alert('A random number is ' + randomNumber + ' between ' + startNum + ' to ' + num);
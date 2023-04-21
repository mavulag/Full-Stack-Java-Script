var noun = prompt("Enter any noun:");
var nounL = noun.toLowerCase();

var adjective = prompt("Enter an adjective:");
var adjectiveL = adjective.toLocaleLowerCase();

var verb = prompt("Enter a verb:");
var verbL = verb.toLocaleLowerCase();

alert("You are done!");

var message = "A ";
message += nounL + ' is ';
message += adjectiveL + ' in ';
message += verbL + ' programming.';

document.write(message);
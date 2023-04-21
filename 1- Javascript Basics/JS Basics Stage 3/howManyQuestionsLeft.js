var questions = 3;
var questionLeft = ' [' + questions + ' questions left]';

var noun = prompt('Enter any noun' + questionLeft);
questions -= 1;
var nounL = noun.toLowerCase();
questionLeft = ' [' + questions + ' questions left]';

var adjective = prompt('Enter an adjective' + questionLeft);
questions -= 1;
var adjectiveL = adjective.toLocaleLowerCase();
questionLeft = ' [' + questions + ' questions left]';

var verb = prompt('Enter a verb' + questionLeft);
questions -= 1;
var verbL = verb.toLocaleLowerCase();
questionLeft = ' [' + questions + ' questions left]';

alert('You are done!' + questionLeft);

var message = "A ";
message += nounL + ' is ';
message += adjectiveL + ' in ';
message += verbL + ' programming.';

document.write(message);
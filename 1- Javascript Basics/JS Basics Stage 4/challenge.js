/* Game challenge to prompt user to answer at 
at least 5 questions and give Crown accordingly
to the number of questions answered correctly
*/

var questions = 6;
var questionLeft = ' [' + questions + ' questions left]';

var answer = false;

var qn1 = prompt('How many legs do human being have?' + questionLeft);
questions -= 1;
questionLeft = ' [' + questions + ' questions left]';

var qn2 = prompt('How many fingers do human have?' + questionLeft);
questions -= 1;
questionLeft = ' [' + questions + ' questions left]';

var qn3 = prompt('How many eyes do human have?' + questionLeft);
questions -= 1;
questionLeft = ' [' + questions + ' questions left]';

var qn4 = prompt('How many nose do human have?' + questionLeft);
questions -= 1;
questionLeft = ' [' + questions + ' questions left]';

var qn5 = prompt('How many arms do human have?' + questionLeft);
questions -= 1;
questionLeft = ' [' + questions + ' questions left]';

var qn6 = prompt('How many ears do human have?' + questionLeft);
questions -= 1;
questionLeft = ' [' + questions + ' questions left]';

if (parseInt(qn1) === 2) {
    var quen1 = true;
}

if (parseInt(qn2) === 5) {
    var quen2 = true;
}

if (parseInt(qn3) === 2) {
    var quen3 = true;
}

if (parseInt(qn4) === 1) {
    var quen4 = true;
}

if (parseInt(qn5) === 2) {
    var quen5 = true;
}

if (parseInt(qn6) === 2) {
    var quen6 = true;
}

if (quen1 && quen2 && quen3 && quen4 && quen5 && quen6) {
    var total = 6;
    document.write('You got Gold Crown! by answering ' + total + ' questions.');
} else if (quen1 && quen2 && quen3 && quen4 && quen5 || quen6) {
    var total = 5;
    document.write('You got Broze Crown! by answering ' + total + ' questions.');
} else if (quen1 && quen2 && quen3 && quen4 || quen5 || quen6) {
    var total = 4;
    document.write('You got Metal Crown! by answering ' + total + ' questions.');
} else if (quen1 && quen2 && quen3 || quen4 || quen5 || quen6) {
    var total = 3;
    document.write('You are Good! by answering ' + total + ' questions.');
} else if (quen1 && quen2 || quen3 || quen4 || quen5 || quen6) {
    var total = 2;
    document.write('Not bad! You answering ' + total + ' questions.');
} else if (quen1 || quen2 || quen3 || quen4 || quen5 || quen6) {
    var total = 1;
    document.write('Poor, Work hard! You answering ' + total + ' question.');
} else {
    var total = 0;
    document.write('Very poor! You did not answer any question correct.');
}
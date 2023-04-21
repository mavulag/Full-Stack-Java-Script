var HTMLBadges = prompt('How many HTML badges do you have?');
var CSSBadges = prompt('How many CSS badges do you have?');
var totalBudges = parseInt(HTMLBadges) + parseInt(CSSBadges);
// parseInt, parseFloat.. method used to convert a String character into a number
// Only numbers at the first statement of a String are passed through it or returned 

document.write('Wow! You have ' + totalBudges + ' budges.');
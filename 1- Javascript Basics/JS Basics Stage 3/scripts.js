var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weekPerYear = 52;
var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
document.write('There are ' + secondsPerDay + ' seconds in a day.');
document.write('</br>');

var yearAlive = 27;
var secondsAlive = secondsPerDay * yearAlive;
document.write('I have been alive for ' + secondsAlive + ' seconds.');
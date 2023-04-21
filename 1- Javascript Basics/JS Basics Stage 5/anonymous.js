/* 
How to make anonymous function,
a function without a name, 
name of the function is in variable beacause we store a function in variable
*/

var alertRandom = function () {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    alert(randomNumber);
};

alertRandom();
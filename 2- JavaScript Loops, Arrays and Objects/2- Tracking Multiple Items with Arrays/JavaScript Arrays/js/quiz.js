var questions = [
    ['How many regions are in the Republic of Tanzania?', 54],
    ['How many continents are there?', 5],
    ['How many legs does insect have?', 6]
];
var correctAnswers = 0;
var question;
var answer;
var response;
var html;

function print(message) {
    document.write(message);
}

for (var i = 0; i < questions.length; i += 1) {
    question = questions[i][0];
    answer = questions[i][1];
    response = parseInt(prompt(question));
    if (response === answer) {
        correctAnswers += 1;
    }
}

html = "You got " + correctAnswers + " question(s) right.";
print(html);
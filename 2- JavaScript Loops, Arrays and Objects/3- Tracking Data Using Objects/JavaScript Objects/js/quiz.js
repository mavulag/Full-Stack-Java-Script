// convert this array of arrays into array of objects
var questions = [
    {
        question: 'How many regions are in the Republic of Tanzania?',
        answer: 54
    },
    {
        question: 'How many continents are there?',
        answer: 5
    },
    {
        question: 'How many legs does insect have?',
        answer: 6
    }
];
var correctQuestions = [];
var wrongQuestions = [];
var correctAnswers = 0;
var wrongAnswers = 0;
var question;
var answer;
var response;
var html;

function print(message) {
    document.write(message);
}

function list(any) {
    var listHTML = '<ol>';
    for (var i = 0; i < any.length; i += 1) {
        listHTML += '<li>' + any[i] + '</li>';
    }
    listHTML += '</ol>';
    print(listHTML);
}

for (var i = 0; i < questions.length; i += 1) {
    question = questions[i].question;
    answer = questions[i].answer;
    response = parseInt(prompt(question));
    if (response === answer) {
        correctQuestions.push(question);
        correctAnswers += 1;
    } else {
        wrongQuestions.push(question);
        wrongAnswers += 1;
    }
}

html = "<h1>You got " + correctAnswers + " question(s) right.</h1>";
print(html);
print('<p>' + correctAnswers + ' questioin(s) answered correct:</p>');
list(correctQuestions);
print('<p>' + wrongAnswers + ' quesrion(s) answered wrong:</p>');
list(wrongQuestions);
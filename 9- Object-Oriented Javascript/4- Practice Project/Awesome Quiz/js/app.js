// Create Questions
let questions = [
    new Question("Who was the first President of the Tanzania?", [ "Mwl. Julius Nyerere", "Dkt. John Magufuli" ], "Mwl. Julius Nyerere"),
    new Question("What is the answer to the ultimate Question of Life, the Universe, and Everything?", [ "Pi", "42" ], "42")
];

// Create Quiz
let quiz = new Quiz(questions);

// Display Quiz
QuizUI.displayNext();
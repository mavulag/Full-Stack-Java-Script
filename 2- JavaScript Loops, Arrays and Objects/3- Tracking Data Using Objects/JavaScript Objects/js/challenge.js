var message = '';
var student;
var search;

function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}

// function getStudentReport(student) {
//     var report = '<h2>Student: ' + student.name + '</h2>';
//     report += '<p>Track: ' + student.track + '</p>';
//     report += '<p>Points: ' + student.points + '</p>';
//     report += '<p>Achievements: ' + student.achievements + '</p>';
//     return report;
// }

while (true) {
    search = prompt('Search student records: Type a name (or type "quit" to end)');

    if (search === null || search.toLowerCase() === 'quit') {
        break;
    } else {
        for (var i = 0; i < students.length; i += 1) {
            student = students[i];
            if (student.name === search) {
                message += '<h2>Student: ' + student.name + '</h2>';
                message += '<p>Track: ' + student.track + '</p>';
                message += '<p>Points: ' + student.points + '</p>';
                message += '<p>Achievements: ' + student.achievements + '</p>';
                // message = getStudentReport(student);
                // print(message);
            }
        }
    }

}

print(message);
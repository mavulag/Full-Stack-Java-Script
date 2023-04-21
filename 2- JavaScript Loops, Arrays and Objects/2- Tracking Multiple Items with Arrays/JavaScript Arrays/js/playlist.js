/*
var playList = [
    'I Did It My Way',
    'Respect',
    'Imagine',
    'Born to Run',
    'All Eyes on Me',
    'Maybellene'
];
*/

// Two dimensional array
var playList = [
    ['I Did It My Way', 'Frank Sinatra'],
    ['Respect', 'Aretha Franklin'],
    ['Imagine', 'John Lennon'],
    ['Born to Run', 'Bruce Springsteen'],
    ['All Eyes on Me', '2pac'],
    ['Maybellene', 'Chuck Berry']
];

function print(message) {
    document.write(message);
}

/*
function listPrinter(list) {
    var listHTML = '<ol>';
    for (var i = 0; i < list.length; i += 1) {
        listHTML += '<li>' + list[i] + '</li>';
    }
    listHTML += '</ol>';
    print(listHTML);
}
*/

function printSongs(songs) {
    var listHTML = '<ol>';
    for (var i = 0; i < songs.length; i += 1) {
        listHTML += '<li>' + songs[i][0] + ' by ' + songs[i][1] + '</li>';
    }
    listHTML += '</ol>';
    print(listHTML);
}

// listPrinter(playList);

printSongs(playList);

/*
playList.push('I Did It My Way');
playList.push('Respect', 'Imagine');
playList.unshift('Born to Run');
playList.unshift('All Eyes on Me', 'Maybellene');
*/

printList(playList);
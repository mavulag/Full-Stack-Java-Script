'use strict';

let strToSearch = 'a-really-long-hyphenated-string';

console.log(/^a-really/.test(strToSearch)); // test string w/ regular expression

console.log(strToSearch.indexOf('a-really') === 0); // indexOf - where the search should start

console.log(strToSearch.startsWith('a-really')); // startWith

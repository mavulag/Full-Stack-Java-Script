'use strict';

let strToSearch = 'a-really-long-hyphenated-string';

console.log(/long/.test(strToSearch)); // test string w/ regular expression

console.log(strToSearch.indexOf('long') > -1); // indexOf - where the search should start

console.log(strToSearch.includes('long')); // includes
'use strict';

let toybox = { item1: 'car', item2: 'ball', item3: 'frisbee'};

// how destructuring works 
let {item1, item2} = toybox; // did not define item3 in the toybox variable

console.log(item1);
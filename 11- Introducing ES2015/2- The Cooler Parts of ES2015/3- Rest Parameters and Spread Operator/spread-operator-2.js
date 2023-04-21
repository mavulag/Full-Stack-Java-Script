'use strict';

function myFunction(name, iceCreamFlavor) {
    console.log(`${name} really likes ${iceCreamFlavor} ice cream.`);
}

// if i create an array and pass in myFunction function
let args = ['Annaliss', 'Vanilla'];

myFunction(...args);
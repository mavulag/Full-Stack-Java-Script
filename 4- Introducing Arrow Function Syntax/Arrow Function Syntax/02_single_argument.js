function square(x) {
    return x * x;
}
/*
arrow function
const square = (x) => {
    return x * x;
}

Or for single argument function you can write it as

const square = x => x * x; 
*/

function cube(x) {
    return square(x) * x;
}
/*
arrow function
const cube = (x) => {
    return square(x) * x;
}

Or 

const cube = x => square(x) * x;
*/
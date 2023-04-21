'use strict';

let Person = function(data) {
    for (let key in data) {
        this[key] = data[key];
    }
    this.getKeys = () => { // binds the object to instance of class no matter where is called
        return Object.keys(this); // return current object keys
    }
}

let Mavula = new Person({ name: 'Mavula', role: 'Programmer'});

console.log('Mavula\'s keys:', Mavula.getKeys()); // 'this' refers to 'Mavula'

let getKeys = Mavula.getKeys;

console.log(getKeys()); // 'this' refers to the node process
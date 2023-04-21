'use strict';

let str = 'There are x days until Halloween!';

let halloweenDate = new Date(new Date().getFullYear(), 9, 31);

let complexStr = str.replace('x', dayCount(new Date, halloweenDate));

console.log(complexStr);

/*
the output is

There are 110 days until Halloween!
*/ 
'use strict';

const originalFlavors = ['Chocolate', 'Vanilla'];

const newFlavors = ['Strawberry', 'Mint Chocolate Chip'];

// save each value independent (spread the values) unlike when not using '...spread operator'
const inventory = ['Rocky Road', ...originalFlavors, 'Neopolitan', ...newFlavors];

console.log(inventory);
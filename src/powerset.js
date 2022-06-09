// Powerset

// OSCC · JavaScript, Math, Algorithm · Sep 27, 2021

// Returns the powerset of a given array of numbers.

//     Use Array.prototype.reduce() combined with Array.prototype.map() to iterate over elements and combine into an array containing all combinations.

const powerset = arr =>
  arr.reduce((a, v) => a.concat(a.map(r => r.concat(v))), [[]]);
//example use:
powerset([1, 2]); // [[], [1], [2], [1, 2]]
console.log(powerset([1, 2]));
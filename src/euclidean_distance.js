// Euclidean distance

// Angelos Chalaris · JavaScript, Math, Algorithm · Dec 28, 2020

// Calculates the distance between two points in any number of dimensions.

//     Use Object.keys() and Array.prototype.map() to map each coordinate to its difference between the two points.
//     Use Math.hypot() to calculate the Euclidean distance between the two points.

const euclideanDistance = (a, b) =>
  Math.hypot(...Object.keys(a).map(k => b[k] - a[k]));

euclideanDistance([1, 1], [2, 3]); // ~2.2361
euclideanDistance([1, 1, 1], [2, 3, 2]); // ~2.4495


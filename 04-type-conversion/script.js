/*
let sum = 100;
console.log("sum:", sum, typeof sum);

let points = 25;
console.log("points:", points, typeof points);

let batman = "Batman";
console.log("Batman:", batman, typeof batman);

let stringPoints = "25";
console.log("stringPoints:", stringPoints, typeof stringPoints);

// Type Conversion

let sumPoints = sum + points;  // 100 + 25
console.log("sumPoints:", sumPoints, typeof sumPoints);

let sumStringPoints = sum + stringPoints;  // 100 + "25"
console.log("sumStringPoints:", sumStringPoints, typeof sumStringPoints);

// Convert string to number
let convertedStringPoints = Number(stringPoints); // 25
console.log("convertedStringPoints:", convertedStringPoints, typeof convertedStringPoints);  // number! 🥳

let convertedBatman = Number(batman);
console.log("convertedBatman:", convertedBatman, typeof convertedBatman);  // 🦇?
*/

let result;

result = Boolean(100); // true
result = Boolean(1); // true
result = Boolean(0); // false
result = Boolean(-1); // true
result = Boolean(-100); // true

result = Boolean("i am groot"); // true
result = Boolean(""); // false
result = Boolean(" "); // true

console.log("result:", result, typeof result);

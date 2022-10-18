//alert("Hej JavaScript från script.js");

// detta skriver ett meddelande i webbläsarens konsol
// console.log("Hello console!");

/*
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
*/

/*
let msg;
msg = "Woff";

console.log(msg);

msg = 42;

console.log(msg);
*/

/*
let firstName = "Johan";		// "Johan"

console.log(firstName);

const lastName = "Nordström";	// "Nordström"

let fullName = firstName + lastName;	// "JohanNordström"

firstName = "Pelle";

// fullName = firstName + lastName;

console.log(fullName);

let helloMsg = "Hello " + firstName + " " + lastName;

// "Hello Pelle Nordström"
console.log(helloMsg);
*/


/*
console.log("My name is: " + "Johan");
console.log("My name is: Johan");

console.log("The teacher's name is: " + myName);

let msg = 'His name is "' + myName + '" and he knows JavaScript';

console.log(msg);
*/
let myName = "Johanh";
console.log("My name is:", myName);

console.log("Length of name is:", myName.length);

console.log("First char in name is:", myName[0]);
console.log("Second char in name is:", myName[1]);

console.log("Name SHOUTED is:", myName.toUpperCase() ); // "JOHAN"

console.log("Name is:", myName); // "Johan"

console.log("Name whispered is:", myName.toLowerCase() ); // "johan"

console.log("Position of 'J'", myName.indexOf('J') ); // 0
console.log("Position of 'h'", myName.indexOf('h') ); // 2
console.log("Position of last 'h'", myName.lastIndexOf('h') ); // 5

console.log("Position of 'k'", myName.indexOf('k') ); // -1 (does not exist)

console.log("Slice of Johan:", myName.slice(3, 6) ); "anh"
console.log("Tiny name:", myName.substr(1, 2) ); "oh"

console.log("Does name contain 'a'?", myName.includes('a') ); // true
console.log("Does name contain 'e'?", myName.includes('e') ); // false

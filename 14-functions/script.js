/**
 * Functions
 */

/**
 * Function Declaration
 */

// function greet() {
// 	// alert("Hello, World!");
// 	console.log("Hello, World!");
// }

/*
function greetUser(name = "anonymous", time = "day") {
	console.log(`Good ${time}, ${name}`);
}

greetUser("Johan");
greetUser("Pelle", "evening");
greetUser();
*/

/**
 * Function Expression
 */
/*
const greetUser = function(name = "anonymous", time = "day") {
	console.log(`Good ${time}, ${name}`);
}

console.log("I AM BEFORE");

greetUser("Johan", "morning");
greetUser("Pelle", "evening");
greetUser();

console.log("I AM AFTER");
*/
/*
const calcBoxCircumference = function(width, height) {
	return width * 2 + height * 2;
}

const calcBoxArea = function(width, height) {
	const area = width * height;
	return area;
}

// Arrow Function
const calcCircleArea = (radius) => {
	return 3.14159 * radius ** 2;
}
*/
/*
const boxCircumference = calcBoxCircumference(20, 40);
console.log(boxCircumference);

const boxCircumference2 = calcBoxCircumference(60, 120);
console.log(boxCircumference2);
*/
/*
const w = 20;
const h = 40;
const ci = calcBoxCircumference(w, h);
if (ci > 100) {
	console.log("Thats a big box");
} else {
	console.log("smol box");
}
*/

/*
const nagUser = (txt) => {
	alert(txt);
}

const log = (txt) => {
	console.log(txt);
}

const makeMoreInteresting = (txt, callback) => {
	let interesting = txt + "!!!!!!!!!!!!!!";
	callback(interesting);
}

makeMoreInteresting("This is so much fun", log);
*/

let students = ["Johan", "Pelle", "Kajsa", "Maja", "Kajan"];

/*
for (let i = 0; i < students.length; i++) {
	console.log(`Student at index ${i} is: ${students[i]}`);
}
*/

students.forEach( (item, index) => {
	console.log(`Student at index ${index} is: ${item}`);
} );

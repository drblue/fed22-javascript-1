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
const greetUser = function(name = "anonymous", time = "day") {
	console.log(`Good ${time}, ${name}`);
}

console.log("I AM BEFORE");

greetUser("Johan", "morning");
greetUser("Pelle", "evening");
greetUser();

console.log("I AM AFTER");

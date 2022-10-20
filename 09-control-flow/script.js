/**
 * Control Flow 👮🏽🎛✋🏻
 */

const minAge = 18;
const maxAge = 65;

let age = 75;

/**
 * Logical Operators
 *
 * && = AND (both has to be true)
 * || = OR (at least one has to be true)
 */

/*
//   30 >= 18     &&  30 <= 65
//     true       &&   true
//               true
if (age >= minAge && age <= maxAge) {
	// true
	console.log("Access granted");
} else {
	// false
	console.log("You're either too young or too old");
}

let username = "johan";
//   "johan" === "dave" ||  "johan" === "johan"
//          false       ||         true
//                     true
if (username === "dave" || username === "johan") {
	console.log(`I'm sorry ${username}, I can't open the doors.`);
} else {
	console.log("Welcome!");
}

// More advanced if-statement
if (age >= minAge && age <= maxAge) {
	console.log(`You are between ${minAge} and ${maxAge} years old, congrats!`);
} else if (age < minAge) {
	console.log('Too young! 👶🏽');
} else {
	console.log('Too old! 👵🏻');
}
*/

/**
 * for-loop
 */
console.log("Yey loop!");

const maxLoops = 10;

for (let i = 0; i < maxLoops; i++) {
	console.log("We're looping 🥵, at loop number " + i)
}

// nu är vi snurriga av allt loopande
console.log('🤢');


/**
 * Loops ∞
 */

/**
 * for-loops
 */
/*
let sum = 0;
let points = [1, 5, -50, 10, 20, 8, 3];
for (let i = 0; i < points.length; i++) {
	console.log(`At index ${i}, number is:`, points[i]);

	if (points[i] <= 0) {
		console.log("Got a 0 or negative points, skipping over");
		continue;
	}

	// add points[i] to sum
	sum = sum + points[i]
	console.log(`New sum is:`, sum);

	if (sum >= 300) {
		console.log("You got maximum score! Stopping further counting");
		break;
	}
}
console.log("The sum of all numbers is:", sum);
*/

/**
 * for-loop
 */
// for (let i = 0; i < 5; i++) {
// 	// do stuff
// }

/**
 * while-loop
 * runs 0 or more times
 */
// let i = 0;
// while (i < 5) {
// 	// do stuff
// 	console.log("in while-loop, i is:", i);
// 	i++; // increase i by 1
// }

// finished looping
// console.log("Finished looping, i is:", i);

/**
 * do while-loop
 * runs *at least* 1 time
 */
// i = 5
// do {
// 	// do stuff
// 	console.log("in do while-loop, i is:", i);
// 	i++; // increase i by 1
// } while (i < 5);

/**
 * Switch
 */

/*
let grade = "MVP";

if (grade === "VG") {
	console.log("🥳 Nice!! You got a VG");

} else if (grade === "G") {
	console.log("🆗 Excellent! You got a G");

} else if (grade === "IG") {
	console.log("😔 Sorry, you got an IG");

} else {
	console.log("😡 Why you try 🐅 cheating?!");

}
*/

let grade = "G";
switch (grade) {
	case "VG":
		// grade is "VG"
		console.log("🥳 Nice!! You got a VG");
		break;

	case "G":
		// grade is "G"
		console.log("🆗 Excellent! You got a G");
		break;

	case "IG":
		// grade is "IG"
		console.log("😔 Sorry, you got an IG");
		break;

	default:
		// grade is something else
		console.log("😡 Why you try 🐅 cheating?!");
		break;
}

console.log("I'm done with loops");

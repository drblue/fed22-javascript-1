/**
 * Higher Order Array Methods
 *
 * .sort() <--
 * .filter()
 * .find()
 * .map()
 * .reduce()
 *
 * - Clone an array
 * - Shuffle an array
 */

/*
// names
const names = ["Johan", "Fredrik", "Saman", "Alicia", "Maja", "Elliot"];
console.log("Names in chaos:", names);

// sort array alphabetically
names.sort();

console.log("Names in proper order:", names);

// reverse order
names.reverse();
console.log("Names in reverse order:", names);
*/

// numbers
const numbers = [ 47, 5, 21, 50, 24, 18, 47, 13, 28, 8, 18, 15, 11, 43, 7, 102, 1337, 33, 52 ];

console.log("Numbers in chaos:", numbers);

// sort numbers (won't sort numerically!)
// numbers.sort()
// console.log("Numbers in proper? order:", numbers);

// sort numbers NUMERICALLY
/*
numbers.sort( (a, b) => {    // a = 3, b = 9
	// shorthand
	return (a - b);

	// console.log(`comparing, a = ${a}, b = ${b}`);

	// if a is less than b (i.e. a should be sorted BEFORE b)
	if (a < b) {
		console.log("a is less than b");
		return -1;
	}

	// if a is greater than b (i.e., a should be sorted AFTER b)
	if (a > b) {
		console.log("b is less than a");
		return 1;
	}

	// a must be equal to b
	console.log("a is equal to b");
	return 0;
} );
*/

// EVEN SHORTER NUMBER SORTING 🤯
numbers.sort( (a, b) => a - b );

// same as this
// numbers.sort( (a, b) => {
// 	return a - b;
// });

console.log("Numbers in proper! order:", numbers);

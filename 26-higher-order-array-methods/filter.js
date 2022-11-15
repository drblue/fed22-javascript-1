/**
 * Higher Order Array Methods
 *
 * .sort()
 * .filter() <--
 * .find()
 * .map()
 * .reduce()
 *
 * - Clone an array
 * - Shuffle an array
 */

// numbers
const numbers = [ 47, 5, 21, 50, 24, 18, 47 ];

console.log("Original numbers:", numbers);

/*
// push all numbers >= 25 in a new array
const largeNumbers = [];
numbers.forEach(num => {
	if (num >= 25) {
		largeNumbers.push(num);
	}
});
*/

// filter out all numbers >= 25
const largeNumbers = numbers.filter( num => {
	if (num >= 25) {
		return true; // YES, this number should be in the new array
	} else {
		return false; // NOOOOOOO, exclude this number from the new array
	}
} );

console.log("Large numbers:", largeNumbers);

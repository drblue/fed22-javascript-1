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

// console.log("Original numbers:", numbers);

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
/*
const largeNumbers = numbers.filter( num => {
	return (num >= 25);

	if (num >= 25) {
		return true; // YES, this number should be in the new array
	} else {
		return false; // NOOOOOOO, exclude this number from the new array
	}
} );

const largeNumbers = numbers.filter(num => num >= 25);
console.log("Large numbers:", largeNumbers);
*/

/*
const names = ["Johan", "Kajsa", "Bo", "Li"];
const longishNames = names.filter(name => name.length > 2);
console.log("Longish names:", longishNames);
*/

const students = [
	{
		name: "Johan",
		points: 1337,
	},
	{
		name: "Saman",
		points: 3,
	},
	{
		name: "Alicia",
		points: 42,
	},
	{
		name: "Elliot",
		points: 88,
	},
	{
		name: "Maja",
		points: 35,
	},
];

// get all students which are godkända (>= 40)
const passed = students.filter(student => student.points >= 40);
console.log("Students who passed the exam:", passed);

/**
 * Higher Order Array Methods
 *
 * .sort()
 * .filter()
 * .find()
 * .map()
 * .reduce()
 *
 * - Clone an array <--
 * - Shuffle an array
 */

const names = ["Johan", "Kalle", "Kajsa"];
// const clone_fail = names;  // Copies the *REFERENCE* to the array, *NOT* the _contents_ of the array

/*
// old, cumbersome way
const new_names = [];
names.forEach(name => {
	new_names.push(name);
});
*/
/*
const new_names = names.map((name) => {
	return name
});
*/

// clone an array using the "spread" syntax
const new_names = [ ...names ];   // congrats, it's a new, unique array!
console.log("names:", names);
console.log("new_names:", new_names);

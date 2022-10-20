/**
 * Loose vs Strict Comparisons
 */

let age = 25;  // number

// loose comparison (different data types can still be equal)
console.log('age == 25', age == 25);		// true
console.log('age == "25"', age == "25");	// true
console.log('age != 25', age != 25);		// false
console.log('age != "25"', age != "25");	// false

// strict comparison (different data types *CAN NOT* be equal)
console.log('age === 25', age === 25);		// true
console.log('age === "25"', age === "25");	// false
console.log('age !== 25', age !== 25);		// false
console.log('age !== "25"', age !== "25");	// true

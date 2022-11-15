/**
 * Higher Order Array Methods
 *
 * .sort()
 * .filter()
 * .find() <--
 * .map()
 * .reduce()
 *
 * - Clone an array
 * - Shuffle an array
 */

/*
// numbers
const numbers = [ 5, 21, 50, 24, 92, 18, 47 ];
console.log("Numbers:", numbers);

// find first large number
const largeNumbers = numbers.filter(num => num >= 25);
const firstLargeNumber = numbers.find(num => num >= 25); // 50
console.log("First number >= 25 is:", firstLargeNumber);
*/

/*
const students = [
	{
		name: "Johan",
		points: 13,
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

// find first student which has godkänt (>= 40)
const firstPassedStudent = students.find( student => (student.points >= 40) );
console.log("First passed student:", firstPassedStudent);
*/

const products = [
	{
		sku: "CORR-BWL",
		name: "Corrosive bowl",
		in_stock: 321,
		price: 0.99,
	},
	{
		sku: "CTN-SPCE",
		name: "Cotton spice rack",
		in_stock: 2,
		price: 149.99,
	},
	{
		sku: "GOOD-COOKIES",
		name: "Inside-out Oreo cookies",
		in_stock: 18,
		price: 2.49,
	},
	{
		sku: "BACK-BREAKER",
		name: "The uncomfortable broom",
		in_stock: 1,
		price: 28.65,
	},
];

const nomNomProduct = products.find(product => product.sku === "GOOD-COOKIES");
if (nomNomProduct) {
	console.log("YAY FOUND COOKIES!", nomNomProduct);
} else {
	console.log("SAD COOKIE MONSTER 🥺");
}

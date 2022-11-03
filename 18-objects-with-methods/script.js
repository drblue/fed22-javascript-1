/**
 * Objects with methods
 */

// const speakFn = function() {
// 	console.log(`Hello this is ${this.name}, and my age is ${this.age}`);
// }

const barksby = {
	name: "Mr Barksby",
	species: "Dog",
	age: 5,
	hobbies: ["Tail-wagging", "Car-chasing", "Eating lots of treats"],
	owner: {
		name: "Mr Beans",
		age: 57
	},
	sound: "WOOOFF!",
	// speak: speakFn,
	speak() { // same as writing "speak: function() {}"
		console.log(`Hello this is ${this.name}, and my age is ${this.age}`);
		// console.log("this:", this);
	}
}

const meowJr = {
	hobbies: "Be cute",
	species: "Kitten",
	age: 1,
	name: "Meow Jr",
	sound: "meooow!",
	meowCounter: 0,
	// speak: speakFn,
	// don't use arrow functions in methods on objects as the `this` context object isn't updated to reflect the object it is run on
	speak: function() { // same as writing "speak() {}"
		console.log(this.sound);
		this.meowCounter++;
		console.log(`Meowed times today: ${this.meowCounter}`);
	}
}

// console.log(barksby.hobbies.join(", "));
// console.log(`Barksby's owner is ${barksby.owner.name}`);
// console.log("this outside of an object:", this);

/*
// primitive data types are copied by *value*
let name1 = "Johan";
let name2 = name1;  // name2 = "Johan"

name1 = "Pelle";

// console.log(name1, name2);

// complex data types are copied by *reference*
const littleBarksby = barksby;

littleBarksby.name = "Barksby Jr";

console.log(barksby.name);			// "Barksby Jr"
console.log(littleBarksby.name);	// "Barksby Jr"
*/

/*
// Primitive Data Types are passed by value
const happyBirthday = (name, age) => {  // name = "Pelle", age = 2
	age++;
	console.log(`Happy Birthday, ${name}`, age);
}

let pelle = "Pelle";
let pelle_age = 2;

happyBirthday(pelle, pelle_age); // Happy Birthday, Pelle 3

console.log("Pelle's age outside of function:", pelle_age); // 2 😨
*/

// Reference Data Types (like objects and arrays) are passed by reference
const happyPetBirthday = (pet) => {
	pet.age++;
	console.log(`Happy Birthday, ${pet.name}`, pet.age);
}

console.log("Meow Jr age before birthday:", meowJr.age);  // 1
happyPetBirthday(meowJr);  // 2
console.log("Meow Jr age after birthday:", meowJr.age);  // ?

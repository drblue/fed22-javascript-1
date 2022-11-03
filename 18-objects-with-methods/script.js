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
	// speak: speakFn,
	speak: () => { // don't use arrow functions in methods on objects as the `this` context object isn't updated to reflect the object it is run on
		console.log(`Hello this is ${this.name}, and my age is ${this.age}`);
		// console.log("this:", this);
	}
}

// console.log(barksby.hobbies.join(", "));
// console.log(`Barksby's owner is ${barksby.owner.name}`);
console.log("this outside of an object:", this);

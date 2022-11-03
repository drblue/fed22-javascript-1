/**
 * Objects with methods
 */

const barksby = {
	name: "Mr Barksby",
	species: "Dog",
	age: 5,
	hobbies: ["Tail-wagging", "Car-chasing", "Eating lots of treats"],
	owner: {
		name: "Mr Beans",
		age: 57
	},
	sound: "WOOOFF!"
}

const meowJr = {
	hobbies: "Be cute",
	species: "Kitten",
	age: 1,
	name: "Meow Jr",
	sound: "meooow!"
}

console.log(barksby.hobbies.join(", "));
console.log(`Barksby's owner is ${barksby.owner.name}`);

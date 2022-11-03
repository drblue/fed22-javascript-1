/**
 * Objects
 */

/*
// Arrays aren't that suited for grouping related data together since they are index-based and relies on the order of values

const fluffles = [
	"Mr Fluffles",		// 0 = name
	3,					// 1 = age
	"Bengt",			// 2 = owner
	"Annoy people",		// 3 = hobbies
	"Cat",				// 4 = species
];

const captainCat = [
	"Captain Cat",		// 0 = name
	"Cat",				// 1 = species
	9,					// 2 = age
	"Agda",				// 3 = owner
	"HIIT",				// 4 = hobbies
];

const showPetInfo = (pet) => {
	console.log(`${pet[0]} is a ${pet[4]} of ${pet[1]} year(s) old. His owner is ${pet[2]} and his favorite hobby is to ${pet[3]}.`);
}

showPetInfo(fluffles);
showPetInfo(captainCat);
*/

// Objects are better suited for representing data that has an inherent connection and is not dependent on the order of the keys

// An object has attributes/properties which in turn has values

const fluffles = {
	name: "Mr Fluffles",		// key-value pair
	age: 3,
	owner: "Bengt",
	hobbies: "Annoy people",
	species: "Cat"
}

const captainCat = {
	name: "Captain Cat",
	species: "Cat",
	age: 9,
	owner: "Agda",
	hobbies: "HIIT"
}

const meowJr = {
	hobbies: "Be cute",
	species: "Kitten",
	age: 1,
	hobbies: "Sleep",
	name: "Meow Jr"
}

// console.log(captainCat);

// We access a property using dot-notation
// console.log(fluffles.name);
// console.log(captainCat.name);

// square-bracket notation
// console.log(fluffles['name']);
// console.log(captainCat['name']);

// If we try to access a property that does not exist on the object, we get `undefined`
// console.log(meowJr.owner);

const showPetInfo = (pet) => {
	console.log(`${pet.name} is a ${pet.species} of ${pet.age} year(s) old. His owner is ${pet.owner} and his favorite hobby is to ${pet.hobbies}.`);
}

showPetInfo(fluffles);
showPetInfo(captainCat);
showPetInfo(meowJr);

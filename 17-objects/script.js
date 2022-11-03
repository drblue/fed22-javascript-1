/**
 * Objects
 */

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

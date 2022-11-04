/**
 * DOM - Document Object Model - Petslist
 *
 * TODO:
 * Loopa över array:en `pets` och för varje `pet`, lägg till en `<li>` till
 * `#petslist` med info om varje pet:
 *
 * NAME is a SPECIES of AGE year(s) old.
 * His owner is OWNER and his favorite hobbies is to HOBBIES.
 */

// Array of pets
const pets = [
	{
		name: "Mr Barksby",
		species: "Dog",
		age: 5,
		hobbies: ["Tail-wagging", "Car-chasing", "Eating lots of treats"],
		owner: {
			name: "Mr Beans",
			age: 57,
		},
		sound: "WOOOFF!",
		speak() {
			console.log(`${this.name} sound: ${this.sound}`);
		}
	},
	{
		hobbies: ["Be cute"],
		species: "Kitten",
		age: 1,
		name: "Meow Jr",
		sound: "meooow!",
		meowCounter: 0,
		speak() { // same as writing "speak: function() {}"
			this.meowCounter++;
			console.log(this.sound);
			console.log(`Meowed times today: ${this.meowCounter}`);
		}
	},
	// {
	// 	hobbies: ["Be cute"],
	// 	species: "Old kitten",
	// 	age: 9,
	// 	name: "Meow Sr",
	// 	sound: "meooow!",
	// 	meowCounter: 0,
	// 	speak() { // same as writing "speak: function() {}"
	// 		this.meowCounter++;
	// 		console.log(this.sound);
	// 		console.log(`Meowed times today: ${this.meowCounter}`);
	// 	}
	// }
];

// Get a reference to the `<ul>` element in the DOM
const petslistEl = document.querySelector('#petslist');

// Loop over pets and pass each pet to the function
pets.forEach( (pet) => {
	// create a string that will contain the info
	let info;

	// does pet have an owner?
	if (pet.owner) {
		// yay pet had an owner
		info = `<li>${pet.name} is a ${pet.species} of ${pet.age} year(s) old. His owner is ${pet.owner.name}</li>`;
	} else {
		// pet had no owner :(
		info = `<li>${pet.name} is a ${pet.species} of ${pet.age} year(s) old. Please adopt him!</li>`;
	}

	// append the string to the `<ul>`'s innerHTML
	petslistEl.innerHTML += info;
} );

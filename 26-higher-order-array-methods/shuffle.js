/**
 * Higher Order Array Methods
 *
 * .sort()
 * .filter()
 * .find()
 * .map()
 * .reduce()
 *
 * - Clone an array
 * - Shuffle an array <--
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
console.log("Numbers before shuffling:", numbers);

/*
// Poor developers array shuffling
numbers.sort(() => {
	// return negative, 0 or positive number
	return 0.5 - Math.random();
});
console.log("Numbers after poor devloper shuffling:", numbers);
*/

const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}

shuffleArray(numbers);
console.log("Numbers after proper shuffling:", numbers);

const names = ["Abdirahman Ali", "Albin Lindeborg", "Alexander Olsson", "Amer El-Jechi", "Amin Hassani", "André Lang", "Andreas Gustafsson", "Andreas Xu", "Arden Haldorson", "Asenakew Zegeye", "Astrid Lindfors", "Bob Oskar Kindgren", "Christine Nilsson", "Daniella Dam", "Elina Ennab", "Felicia Gartz Levin", "Gunnar Omander", "Hanna Björling", "Harald Henriksson", "Helga Börjesson", "Isak Westerberg", "Jimmy Nguyen", "Joakim Ottosson", "Jonas Nilsson", "Kristopher Gray", "Linnea Saxvik", "Linus Ohlander", "Louise Keinström", "Louise Murray", "Ludvig Lundberg", "Malin Kyttä", "Måns Edenfalk", "Marcus Birgersson", "Maryia Tamasheuskaya", "Michelle Klemendz", "Mohammad Mzien", "Nastassia Martin", "Patrik He", "Philippe Le Gall", "Sandra Vidalin", "Simon Bengtsson", "Sofia Travnicek Mattiasson", "Sonja Svidén", "Tanja Söderholm", "Viktor Pettersson"];

shuffleArray(names);
console.log("Dissy students:", names);

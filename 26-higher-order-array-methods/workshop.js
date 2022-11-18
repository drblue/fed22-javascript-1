/**
 * Workshop: Higher Order Array Methods
 *
 */

// USE ONLY THE NEW ARRAY METHODS (sort/filter/find/map)
// *NOT* `foreach`

// school friends
const friends = [
	{ name: 'John', grade: 2, year: 3, sex: 'M' },
	{ name: 'Sarah', grade: 3, year: 2, sex: 'F' },
	{ name: 'Bob', grade: 3, year: 5, sex: 'M' },
	{ name: 'Johnny', grade: 2, year: 2, sex: 'M' },
	{ name: 'Ethan', grade: 4, year: 1, sex: 'M' },
	{ name: 'Paula', grade: 4, year: 5, sex: 'F' },
	{ name: 'Donald', grade: 5, year: 5, sex: 'M' },
	{ name: 'Jennifer', grade: 3, year: 3, sex: 'F' },
	{ name: 'Courtney', grade: 3, year: 1, sex: 'F' },
	{ name: 'Jane', grade: 4, year: 3, sex: 'F '}
];

// 1. get an array of the names of all friends in year 3
// save in `year3_names` and console.log it
const year3_names = friends
	.filter(friend => friend.year === 3)
	.map(friend => friend.name);
console.log("Friends in year 3:", year3_names);

// 2. get an array of the names of all male friends in year 5
// save in `year5_male_names` and console.log it
const year5_male_names = friends
	.filter(friend => {
		return (friend.year === 5 && friend.sex === 'M');
	})
	.map(friend => friend.name);
console.log("Male friends in year 5:", year5_male_names);

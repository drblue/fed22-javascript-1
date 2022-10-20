// arrays
let points = [1, 42, 1337, 420];
let students = [
	"Deadpool",		// 0
	"Black Widow",	// 1
	"Iron Man",		// 2
	"Spider-Man"	// 3
];

console.log("Students:", students);
console.log("The second student's name is:", students[1]);

console.log(`We have ${students.length} students in our class.`);

students[1] = "Black Window";
// students[2] = "Steel Man";
console.log("The second student's name after change is:", students[1]);

let names = students.join(', ');
console.log(`The students names are: ${names}`);

// find position (index) of string "Iron Man"
console.log("Index of Iron Man:", students.indexOf("Iron Man") ); // 2
console.log("Index of Thanos:", students.indexOf("Thanos") ); // -1

// add "Wanda" to the end of student list
students.push("Wanda");
names = students.join(', ');
console.log(`The students names are: ${names}`);

// add and then remove Thanos because he was not nice
students.push("Thanos");	// push in a string at the end of the array
students.pop();  			// remove the last item in the array
students.shift();			// remove the first item in the array
students.unshift("Hulk");	// add a string to the start of the array

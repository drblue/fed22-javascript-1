/**
 * Math 🧮😳
 */

/*
let randomNumber = Math.random();  // 0 - 0.999999999999
let randomNumberMultiplied = randomNumber * 10;  // 0 - 9.99999999999
let roundedRandomNumberMultipled = Math.ceil( randomNumberMultiplied );  // 1-10

let randNum = Math.ceil( Math.random() * 10 );

console.log(randNum);
*/

const getRandomNumber = (max = 10) => {
	return Math.ceil( Math.random() * max );
}

let numberToGuess = getRandomNumber(10);

let answer = prompt("Please enter something");
console.log("Your answer was:", answer);

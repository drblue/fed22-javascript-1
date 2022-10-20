let test = "JavaScript 101";
let student = "Newbie Coder";
let points = 1337;

// string concatenation
// let msg = "Hi " + student + ", your results on " + test + " was " + points + " points.";
// console.log(msg);

// ES6 Template Literals (Template Strings)
let msg = `Hi ${student}, your results on ${test} was ${points}.`;
console.log(msg);

/*
let html = "<article>" +
           "  <p>Lorem ipsum dolor simet.</p>" +
           "</article>";
*/

let html = `<article>
				<p>"Template Strings", they're awesome!</p>
			</article>`;

let output = `Hi, my name is ${student} and I know ${test}`;

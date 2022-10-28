/**
 * Truthy/falsy
 */

/*
let username = ""
let msg;  // "Welcome, anonymous visitor" / "Welcome Johan!"
if (!username) {
	username = "anonymous visitor";
}

msg = `Welcome ${username}!`;
console.log(msg);
*/

/**
 * Ternary Operator
 */
let username = "";
/*
let msg;

if (username) {
	msg = "You have a name, wow!";
} else {
	msg = "Y U HAS NO NAME?!!";
}
*/

let msg = (username)
	? "You have a name, wow!"
	: "Y U HAS NO NAME?!!";

console.log(msg);

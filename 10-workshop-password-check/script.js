/**
 * Workshop: Password Checker
 *
 * Skriv kod som kollar att lösenordet i variabeln password har
 * - minst 6 tecken varav minst två specialtecken enligt nedan
 * - minst 8 tecken varav minst ett specialtecken enligt nedan
 * - eller har minst 12 tecken och minst 1 bindestreck
 * - eller har minst 16 tecken
 */

let password;
// password = "password"; // inte giltigt
// password = "pa$sword"; // giltigt
// password = "p@ssw%rd"; // giltigt
password = "pa$$word"; // giltigt
// password = "secretpassword"; // inte giltigt
// password = "secret-password"; // giltigt
// password = "such-password-much-secure-very-long"; // giltigt

const specialChars = [
	"@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
];

// set status variable to initial value false
let hasSpecialChar = false

// check for any special chars in password
// for each specialChar in specialChars
//   does password include specialChar?
//   if true, set hasSpecialChar to true
for (let i = 0; i < specialChars.length; i++) {
	const specialChar = specialChars[i]
	if (password.includes(specialChar)) {
		hasSpecialChar = true
	}
}

console.log(`🕵🏻 Checking password "${password}"`);

// Har lösenordet minst 16 tecken?
if (password.length >= 16) {
	// Yes!
	console.log("- ✅ Great! That's a long password!");

// Har lösenordet minst 12 tecken OCH minst 1 bindestreck?
} else if (password.length >= 12 && password.includes('-')) {
	console.log("- ✅ Great! That's a pretty good password!");

// Har lösenordet minst 8 tecken OCH minst 1 specialtecken?
} else if (password.length >= 8 && hasSpecialChar) {
	console.log("- ✅ Great! Such password, much secure, very hard to crack!");

} else {
	// Inga andra krav uppfylldes
	console.log("- 🚨 Insecure password, my grandma can crack it!");
}

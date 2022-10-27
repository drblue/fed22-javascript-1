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
password = "p@ssw%rd"; // giltigt
// password = "pa$$word"; // giltigt
// password = "secretpassword"; // inte giltigt
// password = "secret-password"; // giltigt
// password = "such-password-much-secure-very-long"; // giltigt

console.log(`🕵🏻 Checking password '${password}'`);

const specialChars = [
	"@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
];

let specialCharCount = 0

// iterate (loop) over each item in specialChars
for (let i = 0;  // only executed once, at the beginning of the loop
	i < specialChars.length;  // should we continue another round?
	i++  // AFTER each round, increase i by 1
) {
	const specialChar = specialChars[i]
	console.log(`At index ${i}, does password contain '${specialChar}'?`, password.includes(specialChar));

	if (password.includes(specialChar)) {
		specialCharCount++
	}
}

console.log("Loop is done, found:", specialCharCount);

if (password.length >= 16) {
	console.log("- ✅ Great! That's a long password!");

} else if (password.length >= 12 && password.includes('-')) {
	console.log("- ✅ Great! That's a pretty good password!");

} else if (password.length >= 8 && specialCharCount) {
	console.log("- ✅ Great! Such password, much secure, very hard to crack!");

} else if (password.length >= 6 && specialCharCount >= 2) {
	console.log("- ✅ Great! Such password, much secure, VERY hard to crack!");

} else {
	console.log("- 🚨 Insecure password, my grandma can crack it!");
}

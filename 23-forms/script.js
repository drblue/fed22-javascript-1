/**
 * Forms
 *
 */

const passwordForm = document.querySelector('#passwordForm');

passwordForm.addEventListener('submit', e => {
	// prevent form from being submitted
	e.preventDefault();

	// console.log("form submitted and default behaviour prevented");

	// get the password that the user submitted
	const password = passwordForm.password.value;

	console.log(`🕵🏻 Checking password '${password}'`);
	if (password.length >= 16) {
		alert("- ✅ Great! That's a long password!");

	} else if (password.length >= 12 && password.includes('-')) {
		alert("- ✅ Great! That's a pretty good password!");

	} else if (password.length >= 8 && countSpecialChars(password)) {
		alert("- ✅ Great! Such password, much secure, very hard to crack!");

	} else if (password.length >= 6 && countSpecialChars(password) >= 2) {
		alert("- ✅ Great! Such password, much secure, VERY hard to crack!");

	} else {
		alert("- 🚨 Insecure password, my grandma can crack it!");
	}
});

const specialChars = [
	"@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
];

const countSpecialChars = (pass) => {
	let specialCharCount = 0

	// iterate (loop) over each item in specialChars
	for (let i = 0;  // only executed once, at the beginning of the loop
		i < specialChars.length;  // should we continue another round?
		i++  // AFTER each round, increase i by 1
	) {
		const specialChar = specialChars[i]
		// console.log(`At index ${i}, does '${pass}' contain '${specialChar}'?`, pass.includes(specialChar));

		if (pass.includes(specialChar)) {
			specialCharCount++
		}
	}

	return specialCharCount;
}

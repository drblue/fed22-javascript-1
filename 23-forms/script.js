/**
 * Forms
 *
 */

const contactForm = document.querySelector('#contact');

contactForm.addEventListener('submit', e => {
	// prevent form from being submitted
	e.preventDefault();

	console.log("form submitted but prevented default behaviour");

	console.log("First name:", contactForm.first_name.value);
	console.log("Last name:", contactForm.last_name.value);
});

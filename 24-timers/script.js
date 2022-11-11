/**
 * Timers
 *
 */

const btnScareMe = document.querySelector('#btnScareMe');
const ghostEl = document.querySelector('#ghost');

btnScareMe.addEventListener('click', () => {
	// hide button
	btnScareMe.classList.add('hide');

	console.log("Starting timer for scaring user");

	// start timer
	setTimeout( () => {
		// this will be executed after 2000 milliseconds (2 seconds)
		console.log("Scaring user...");
		ghostEl.classList.remove('hide');  // show ghost

		console.log("Starting timer for showing button again");

		// timers for everyone!
		setTimeout(() => {
			console.log("Showing button again...");
			ghostEl.classList.add('hide');  // hide ghost again
			btnScareMe.classList.remove('hide');  // show button again
		}, 4000);
	}, 2000 );
});

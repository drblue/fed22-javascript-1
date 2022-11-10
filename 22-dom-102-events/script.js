/**
 * DOM 102 + events
 *
 */

// get a reference to the button
const btnAdd = document.querySelector('#add');

// WHEN someone CLICKS on the BUTTON
btnAdd.addEventListener('click', () => {
	// DO this
	console.log("oh, nice");

	// GET reference to ALL `li` elements and their LENGTH
	const liCount = document.querySelectorAll('li').length;

	document.querySelector('ul').innerHTML += `<li>list item ${liCount + 1}</li>`;
});

// för varje `li`
document.querySelectorAll('li').forEach(liEl => {

	// lägg till en click-eventlyssnare som loggar något till konsolen
	liEl.addEventListener('click', (e) => {
		console.log("yey someone clicked on me", e.target);

		// if target has class `completed`, remove it
		// if target DOES NOT have class `completed`, add it
		e.target.classList.toggle("completed");
	});
});

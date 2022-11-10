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

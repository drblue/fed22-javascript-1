/**
 * DOM 102 + events
 *
 * classList (used on an element)
 * - add		adds a class (if it doesn't already exist)
 * - remove		removes a class (if it doesn't already exist)
 * - toggle		adds a class if it doesn't already exist, otherwise removes it
 * - replace	replaces a class with another class
 * - contains	returns true/false if class exists
 */

// get a reference to the button
const btnAdd = document.querySelector('#add');

// WHEN someone CLICKS on the BUTTON
btnAdd.addEventListener('click', (e) => {
	// DO this
	console.log("oh, nice", e.target);

	// GET reference to ALL `li` elements and their LENGTH
	const liCount = document.querySelectorAll('li').length;

	// will *REPLACE* all content in the element with
	// a NEW string that contains both the old and the new content
	document.querySelector('ul').innerHTML += `<li>list item ${liCount + 1}</li>`;

	/*
	// ANOTHER way to create elements that does NOT replace the old content,
	// only appends it

	// create a new `li` element and add some content
	const newLiEl = document.createElement('li');
	newLiEl.innerText = "i am new list item 👶🏽";

	// append the new element to the `ul` list
	document.querySelector('ul').append(newLiEl);
	*/
});

// lyssna efter klick på hela listan
document.querySelector('ul').addEventListener('click', (e) => {
	console.log("hello, i am Saman, you clicked me", e);

	// OM tagName är LI, GÖR någonting
	// (annars gör ingenting)
	if (e.target.tagName === "LI") {
		e.target.classList.toggle("completed");

		// STOP event from bubbling up (propagate)
		// e.stopPropagation();
	}
});

/*
// lyssna efter klick på body
document.querySelector('body').addEventListener('click', (e) => {
	console.log("hello i am body, someone clicked me or my children");
});
*/

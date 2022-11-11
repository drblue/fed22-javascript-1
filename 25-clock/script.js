/**
 * Clock 🕰️
 *
 */

// get reference to element with id `clock`
const clockEl = document.querySelector('#clock');

// we could stop the time by calling `clearInterval(clockId)`
// start interval-timer with 1000 ms interval
const clockId = setInterval( () => {
	// get current date and time
	const now = new Date();

	// output current time to `#clock`-element
	clockEl.innerText = now.toLocaleTimeString();
}, 1000);

/**
 * Clock 🕰️
 *
 */

// get reference to element with id `clock`
const clockEl = document.querySelector('#clock');

const tick = () => {
	// get current date and time
	const now = new Date();

	// output current time to `#clock`-element
	clockEl.innerText = now.toLocaleTimeString();

	if (now.getDay() === 5 && now.getHours() >= 15) {
		clockEl.innerText += ' 🥳';
	}
}

// we could stop the time by calling `clearInterval(clockId)`
// start interval-timer with 1000 ms interval
const clockId = setInterval(tick, 1000);

tick();

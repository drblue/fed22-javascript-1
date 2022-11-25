/**
 * Chuck Norris Joke of the Day
 *
 * <https://api.chucknorris.io/>
 * <https://api.chucknorris.io/jokes/random>
 */

const getJoke = async () => {
	const response = await fetch('https://api.chucknorris.io/jokes/random');
	if (!response.ok) {
		throw new Error("Response was not OK!");
	}

	const joke = await response.json();

	document.querySelector('#joke').innerText = joke.value;
}

document.querySelector('#getJokeBtn').addEventListener('click', () => {
	getJoke();
});

// Start of with a joke
getJoke();

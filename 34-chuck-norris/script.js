/**
 * Chuck Norris Joke of the Day
 *
 * <https://api.chucknorris.io/>
 * <https://api.chucknorris.io/jokes/random>
 */

const getJoke = () => {
	fetch('https://api.chucknorris.io/jokes/random')
		.then(response => {
			if (!response.ok) {
				throw new Error("Response was not OK!");
			}

			return response.json();
		})
		.then(joke => {
			document.querySelector('#joke').innerText = joke.value;

		})
		.catch(err => {
			console.log("ERROR: Could not fetch joke. Reason:", err);

			document.querySelector('#joke').innerText = "ERROR: You don't summon Chuck Norris, Chuck Norris summons you";
		});
}

document.querySelector('#getJokeBtn').addEventListener('click', () => {
	getJoke();
});

// Start of with a joke
getJoke();

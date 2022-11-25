/**
 * async/await
 *
 */

/*
fetch('data/dogs.json')
	.then(response => {
		if (!response.ok) {
			throw new Error("Response was not OK!");
		}

		return response.json();
	})
	.then(data => {
		console.log("Gots data:", data);
	})
	.catch(err => {
		console.log("Something blew up 😢:", err);
	});
*/

const getJSON = async (url) => {
	// fetch url
	const response = await fetch(url);

	// check if response was ok
	if (!response.ok) {
		throw new Error("Response was not OK!");
	}

	// parse from json
	const data = await response.json();

	// profit 💰
	return data;
}

const res = getJSON('data/dogs.json')
	.then(data => {
		console.log("Data:", data);
	});

console.log("res:", res);

/**
 * Fetch 🐶
 *
 */

fetch('data/cats.json')
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

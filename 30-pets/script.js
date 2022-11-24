/**
 * Async pets
 *
 */

const getJSON = (url, callback) => {
	// Create a new XML Http Request
	const request = new XMLHttpRequest();

	// Attach an event-listener to the request
	request.addEventListener('readystatechange', () => {
		// Check if readyState is 4 (=== DONE)
		if (request.readyState === 4) {

			// Was the request successful (200 = OK)?
			if (request.status === 200) {
				// Request was 200 OK!

				// take the STRING in responseText and PARSE it into JavaScript object
				const data = JSON.parse(request.responseText);

				// invoke(call) callback
				callback( undefined, data );

			} else {
				// Something went wrong :'(
				console.log("ERROR ERROR DANGER WILL ROBINSON!");

				// invoke(call) callback
				callback( "Could not get data" );
			}
		}
	});

	request.open('GET', url);  // Set request to GET data
	request.send();  // Send the request
	console.log("Request sent!");
}


// Get cattos 🐱
getJSON('data/cats.json', (err, cats) => {
	if (err) {
		alert("Could not get list of cats! Error was: " + err);
		return;
	}

	// Got cats!
	console.log("Got list of cats:", cats);

	// Get doggos 🐶
	getJSON('data/dogs.json', (err, dogs) => {
		// Got woofs!
		console.log("Got list of dogs:", dogs);

		// Get flying projectiles 🦜🚀
		getJSON('data/birds.json', (err, birds) => {
			// Got birds!
			console.log("Got list of birds", birds);

		})
	})
});

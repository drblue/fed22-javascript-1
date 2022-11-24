/**
 * XMLHttpRequest
 *
 */

const getUsers = (callback) => {
	// Create a new XML Http Request
	const request = new XMLHttpRequest();

	// Attach an event-listener to the request
	request.addEventListener('readystatechange', () => {
		// Is request done?
		if (request.readyState === 4) {    // 4 = DONE

			// Was the request successful?
			if (request.status === 200) {
				// 200 OK

				// take the STRING in responseText and PARSE it into JavaScript object
				const data = JSON.parse(request.responseText);

				// invoke(call) callback
				callback( data );

			} else {
				// Something went wrong :'(
				console.log("ERROR ERROR DANGER WILL ROBINSON!");
			}
		}
	});

	// Set request to GET data from 'https://jsonplaceholder.typicode.com/users'
	request.open('GET', 'https://jsonplaceholder.typicode.com/lolcats');

	// Send the request
	request.send();

	console.log("Request sent!");
}

// Get users and output their names to DOM
getUsers( (users) => {
	console.log("Hello, I'm going to output users to DOM");

	// Loop over all users
	users.forEach(user => {
		// Append a listitem for each user
		document.querySelector('#users').innerHTML += `<li>${user.name}</li>`;
	});
} );

// Get users and console.log their names
getUsers( (users) => {
	console.log("Hello, I'm going to console.log the names");

	// Loop over all users
	users.forEach(user => {
		// Console.log their name
		console.log(user.name);
	});
} );

// Done?
console.log("All requests sent!");

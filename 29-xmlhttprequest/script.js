/**
 * XMLHttpRequest
 *
 */

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

			console.log("Got me sum data:");
			console.table(data);

			// Loop over all users
			data.forEach(user => {
				// Append a listitem for each user
				document.querySelector('#users').innerHTML += `<li>${user.name}</li>`;
			});

		} else {
			// Something went wrong :'(
			console.log("ERROR ERROR DANGER WILL ROBINSON!");
		}
	}
});

// Set request to GET data from 'https://jsonplaceholder.typicode.com/users'
request.open('GET', 'https://jsonplaceholder.typicode.com/users');

// Send the request
request.send();

// Done?
console.log("Request sent!");

/**
 * Promises 101
 *
 */

/*
let teacherIsNice = false;

const willWeGetTheAnswersToTheExam = () => {
	return new Promise( (resolve, reject) => {
		// do something that takes some time to do
		// and when done, either resolve or reject the promise
		setTimeout(() => {
			if (teacherIsNice) {
				// resolve promise
				const data = [42, 1337, 1, 13];
				resolve(data);
			} else {
				// reject promise
				reject("YOU NO ANSWERS GET");
			}
		}, 2000);
	} );
}

// Get promise of answers
willWeGetTheAnswersToTheExam()
	.then( (data) => {
		// Yay promise was fulfilled (a.k.a. resolved)
		console.log("Yay teacher is nice", data);
		alert("🥳 Promise has been fulfilled! YAY!");
	} )
	.catch( (err) => {
		// Noooo, promise was broken (a.k.a. rejected)
		console.log("BAD TEACH 😢", err);
		alert("😔 YOU ALWAYS MAKE PROMISES BUT NEVER HOLD THEM!");
	} );

console.log("Promise started");
*/


const getJSON = (url) => {
	return new Promise( (resolve, reject) => {
		// Get the data we promised
		const request = new XMLHttpRequest();

		request.addEventListener('readystatechange', () => {
			if (request.readyState === 4) {
				if (request.status === 200) {
					const data = JSON.parse(request.responseText);
					resolve(data);  // resolve promise and pass along the data

				} else {
					reject(`Could not get data, response status: ${request.status}`);  // reject promise and pass along reason
				}
			}
		});

		request.open('GET', url);  // Set request to GET data
		request.send();  // Send the request
	} );
}

console.log("Getting data...");
getJSON('data/cats.json')
	.then(cats => {
		console.log("Got cats?", cats);

		getJSON('data/dogs.json')
			.then(dogs => {
				console.log("Got dogs?", dogs);
			})
			.catch(err => {
				console.log("No doggos found, reason:", err);
			});

	})
	.catch(err => {
		console.error("NO CATS 4 U! Reason:", err);
	});

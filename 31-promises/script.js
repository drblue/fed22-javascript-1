/**
 * Promises 101
 *
 */

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

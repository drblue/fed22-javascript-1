/**
 * Promises 101
 *
 */

let teacherIsNice = true;

const willWeGetTheAnswersToTheExam = () => {
	return new Promise( (resolve, reject) => {
		// do something that takes some time to do
		// and when done, either resolve or reject the promise
		setTimeout(() => {
			if (teacherIsNice) {
				// resolve promise
				resolve();
			} else {
				// reject promise
				reject();
			}
		}, 2000);
	} );
}

// Get promise of answers
willWeGetTheAnswersToTheExam()
	.then( () => {
		// Yay promise was fulfilled (a.k.a. resolved)
		console.log("Yay teacher is nice");
		alert("🥳 Promise has been fulfilled! YAY!");
	} )
	.catch( () => {
		// Noooo, promise was broken (a.k.a. rejected)
		console.log("BAD TEACH 😢");
		alert("😔 YOU ALWAYS MAKE PROMISES BUT NEVER HOLD THEM!");
	} );

console.log("Promise started");

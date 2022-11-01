/**
 * Guess the number
 *
 * STEG 1
 * ✅ Sätt ett tal i en variabel.
 * ✅ Be användaren att gissa talet med hjälp av `prompt()`.
 * ✅ Om användarens gissning är fel, fråga efter en ny gissning.
 * ✅ Om användarens gissning är rätt, visa en alert med ett grattis-meddelande.
 * ✅ Om användaren skriver in talet 0 så ska spelet avslutas.
 *
 * STEG 1.5
 * Berätta för användaren om gissningen är för låg eller för hög. Naturligtvis
 * ska de få gissa igen efter detta.
 *
 * STEG 2
 * Slumpa talet som användaren ska gissa, så att de inte gissar rätt varje gång.
 *
 * STEG 3
 * Spara ner hur många gissningar som krävdes. Visa antalet gissningar när
 * användaren gissat rätt.
 *
 * STEG 4
 * Efter att man gissat rätt så slumpa fram ett nytt tal och starta om spelet
 * på nytt.
 * Spara en "highscore", dvs hur få gånger som krävts för att gissa rätt.
 * Om användaren gissar rätt på fler gånger, visa "Tyvärr du gissade rätt på
 * ${tries} antal försök men din highscore är ${highscore}".
 * Om användaren gissar rätt på färre gånger, visa "YAY NEW HIGHSCORE! ${highscore}"
 *
 */

const getRandomNumber = (max = 10) => {
	return Math.ceil( Math.random() * max );
}

let numberToGuess = 5;
let continueGame = true;

while (continueGame) {
	// Ask user for guess
	let guess = Number( prompt("Please guess a number between 1-10") );
	console.log("Guessed number:", guess, typeof guess);

	if (guess === numberToGuess) {
		// Guess was correct
		console.log("Guess was correct! 🥳");
		alert("Great success!");
		continueGame = false;

	} else if (guess === 0) {
		// User rage-quit
		console.log("Guess was 0, quitting game");
		alert("Y U GIVE UP?!");
		continueGame = false;

	}
}

console.log("Game ended");

/**
 * Workshop: Password Checker
 *
 * Skriv kod som kollar att lösenordet i variabeln password har
 * - minst 6 tecken varav minst två specialtecken enligt nedan
 * - minst 8 tecken varav minst ett specialtecken enligt nedan
 * - eller har minst 12 tecken och minst 1 bindestreck
 * - eller har minst 16 tecken
 */

let password;
// password = "password"; // inte giltigt
// password = "pa$sword"; // giltigt
// password = "p@ssw%rd"; // giltigt
password = "pa$$word"; // giltigt
// password = "secretpassword"; // inte giltigt
// password = "secret-password"; // giltigt
// password = "such-password-much-secure-very-long"; // giltigt

const specialChars = [
	"@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
];

/**
 * XMLHttpRequest
 *
 */

// Create a new XML Http Request
const request = new XMLHttpRequest();

// Set request to GET data from 'https://jsonplaceholder.typicode.com/users'
request.open('GET', 'https://jsonplaceholder.typicode.com/users');

// Send the request
request.send();

// Done?
console.log("Request sent!");

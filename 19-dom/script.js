/**
 * DOM - Document Object Model
 */

/*
const firstLink = document.querySelector('#link-1');

// Get the element's parent
const firstLinkParent = firstLink.parentElement;

// Get the parent's next sibling
const firstLinkParentNextSibling = firstLinkParent.nextElementSibling;

// Get the first paragraph on the page
const firstParagraph = document.querySelector('p');

// Log the first paragraphs HTML
console.log(firstParagraph.innerHTML);

// Log the first paragraphs text
console.log(firstParagraph.innerText);

// Get the first paragraph with 'error'-class on the page
const firstErrorParagraph = document.querySelector('p.error');

// Log the first error-paragraphs HTML
console.log(firstErrorParagraph.innerHTML);

// Log the first error-paragraphs text
console.log(firstErrorParagraph.innerText);

// We can also change the content of an element
firstParagraph.innerText = "Look ma, my first paragraph!";
firstParagraph.innerText += " Oh I forgot this!";
*/

/*
const alertEl = document.querySelector('.alert');
console.log('alertEl:', alertEl);

console.log('alertEl innerHTML:', alertEl.innerHTML);
console.log('alertEl innerText:', alertEl.innerText);
console.log('alertEl textContent:', alertEl.textContent);

const linkListEl = document.querySelector('ul');
console.log('linkListEl:', linkListEl.children);  // HTMLCollection, does not have `.forEach()`-method

// Convert HTMLCollection to Array
const liEls = Array.from(linkListEl.children);  // now we can use `.forEach()`

// OR, we can use querySelector and querySelectorAll on the linkListEl
const liEls2 = linkListEl.querySelectorAll('li');
*/

/*
// get the first link in the document
const firstLinkEl = document.querySelector('a');
console.log('firstLinkEl:', firstLinkEl);

// get the 'href' attribute on the first link
console.log('firstLinkEl href:', firstLinkEl.getAttribute('href'));

// change the 'href' attribute on the first link
firstLinkEl.setAttribute('href', 'https://www.bing.com');
*/

const alertEl = document.querySelector('.alert');
console.log('alertEl:', alertEl);

// change content of alert-element, does NOT interpret HTML-tags
alertEl.innerText = "I <strong>LOVE</strong> JavaScript! ";

// change content of alert-element, DOES interpret HTML-tags
alertEl.innerHTML = "I <strong>LOVE</strong> JavaScript! ";

// append to existing content
alertEl.innerHTML += "I <strong>LOVE</strong> JavaScript! ";
alertEl.innerHTML += "I <strong>LOVE</strong> JavaScript! ";

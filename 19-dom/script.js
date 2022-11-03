/**
 * DOM - Document Object Model
 */

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

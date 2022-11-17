/**
 * Todos
 *
 * STEG 1
 * Loopa över todos och för varje todo, skriv ut en
 * `<li class="list-group-item">` till #todos med titeln på todo:n.
 *
 * STEG 2
 * Koppla ihop formuläret så att det skapas en nytt TODO-objekt som
 * stoppas in i `todos`-array:en när formuläret submit:as.
 * Glöm inte rendera ut den uppdaterade listan till DOM!
 *
 * STEG 3
 * När man klickar på en todo, hitta todo:n som klicket skedde på,
 * leta upp todo-objektet och ändra `completed` till `true`.
 * Glöm inte rendera ut den uppdaterade listan till DOM!
 *
 */

// get references to DOM elements
const todosEl = document.querySelector('#todos');
const newTodoFormEl = document.querySelector('#new-todo-form');

// list of todos
const todos = [
	{
		title: "Learn basic JavaScript",
		completed: true,
	},
	{
		title: "Learn DOM",
		completed: false,
	},
	{
		title: "Take over the world",
		completed: false,
	},
];

/*
// troligen lite effektivare, men är samtidigt beroende av en variabel
// från scope:t ovanför
let str = '';
todos.forEach(todo => {
	str += `<li class="list-group-item">${todo.title}</li>`;
});
todosEl.innerHTML = str;
*/

// todosEl.innerHTML = '';
todos.forEach(todo => {
	todosEl.innerHTML += `<li class="list-group-item">${todo.title}</li>`;
});

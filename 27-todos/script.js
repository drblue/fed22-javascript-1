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

// Render todos to DOM
const renderTodos = () => {
	console.log("rendering todos...");

	todosEl.innerHTML = '';
	todos.forEach(todo => {
		if (todo.completed) {
			todosEl.innerHTML += `<li class="list-group-item completed">${todo.title}</li>`;
		} else {
			todosEl.innerHTML += `<li class="list-group-item">${todo.title}</li>`;
		}

		// todosEl.innerHTML += todo.completed
		// 	? `<li class="list-group-item completed">${todo.title}</li>`
		// 	: `<li class="list-group-item">${todo.title}</li>`;
	});
}
renderTodos();

// Listen for click-events on `#todos` (the `<ul>`)
todosEl.addEventListener('click', (e) => {
	// console.log("You clicked on either the whole list, or on a listitem", e.target);

	// check if user clicked on a LI element
	if (e.target.tagName === "LI") {
		// console.log("YAY you clicked on a todo (LI)", e.target);
		// console.log("The clicked todo's title is:", e.target.innerText);
		const clickedTodoTitle = e.target.innerText;

		// search todos for the todo with the title clickedTodoTitle
		const clickedTodo = todos.find( (todo) => {
			return todo.title === clickedTodoTitle;
		} );
		console.log("found clicked todo", clickedTodo);

		// change completed-status of found todo
		clickedTodo.completed = true;
		console.log("changed todo completed to true");

		// render updated todos
		renderTodos();
	}
});

// Create a new todo when form is submitted
newTodoFormEl.addEventListener('submit', (e) => {
	// Prevent form from being submitted (to the server)
	e.preventDefault();

	// Create and push new todo into array
	todos.push({
		title: newTodoFormEl.newTodo.value,
		completed: false,
	});
	console.log("created new todo...");

	// Render new todo to DOM
	renderTodos();

	// Empty input field
	// newTodoFormEl.newTodo.value = '';

	// Reset form
	newTodoFormEl.reset();
});

/*
// STOP USER FROM RESETTING FORM 😈
newTodoFormEl.addEventListener('reset', e => {
	// YOU NO RESET FORM, FORM RESETS YOU!
	e.preventDefault();

	alert("YOU NO RESET FORM, FORM RESETS YOU!");
});
*/

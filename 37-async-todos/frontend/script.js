/**
 * Async Todos
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
let todos = [];

// Render todos to DOM
const renderTodos = () => {
	console.log("rendering todos...");

	const lis = todos.map(todo => {
		let cssClasses = "list-group-item";

		if (todo.completed) {
			cssClasses += " completed";   // "list-group-item completed"
		}

		return `
			<li class="${cssClasses}" data-todo-id="${todo.id}">
				${todo.title}
			</li>
		`;
	});

	todosEl.innerHTML = lis.join('');
}
renderTodos();

// Listen for click-events on `#todos` (the `<ul>`)
todosEl.addEventListener('click', (e) => {
	// console.log("You clicked on either the whole list, or on a listitem", e.target);

	// check if user clicked on a LI element
	if (e.target.tagName === "LI") {
		// console.log("YAY you clicked on a todo (LI)", e.target);
		// console.log("The clicked todo's title is:", e.target.innerText);

		// get the `data-todo-id` attribute from the LI element
		const clickedTodoId = e.target.dataset.todoId;     // `data-todo-id`
		// console.log("You clicked on the listitem for todo with id:", clickedTodoId);

		// search todos for the todo with the id todoId
		const clickedTodo = todos.find( (todo) => {
			return todo.id == clickedTodoId;
		} );
		console.log("found clicked todo", clickedTodo);

		// change completed-status of found todo
		clickedTodo.completed = !clickedTodo.completed;
		console.log("toggling todo completed");

		// render updated todos
		renderTodos();
	}
});

// Create a new todo when form is submitted
newTodoFormEl.addEventListener('submit', (e) => {
	// Prevent form from being submitted (to the server)
	e.preventDefault();

	// Extract all todo ids
	// const todoIds = todos.map(todo => todo.id);    // [1, 2, 3]
	// const maxTodoId = Math.max(...todoIds);   // 3
	// const newTodoId = maxTodoId + 1;    // 4

	const maxTodoId = todos.reduce((maxId, todo) => {
		return Math.max(todo.id, maxId);

		// return (todo.id > maxId)
		// 	? todo.id
		// 	: maxId;

		// if (todo.id > maxId) {
		// 	return todo.id;
		// }

		// return maxId;
	}, 0);
	const newTodoId = maxTodoId + 1;    // 4

	// Create and push new todo into array
	todos.push({
		id: newTodoId,
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

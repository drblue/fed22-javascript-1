import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

interface ITodo {
	id?: number,
	title: string,
	completed: boolean,
}

// Local variable containing all the todos from the server
let todos: ITodo[] = []

/**
 * Post a todo to the server
 */
const createTodo = async (newTodo: ITodo) => {
	const res = await fetch('http://localhost:3001/todos', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(newTodo),
	})

	if (!res.ok) {
		throw new Error(`${res.status} ${res.statusText}`)
	}

	return await res.json() as ITodo
}

/**
 * Fetch todos from server
 */
const fetchTodos = async () => {
	const res = await fetch('http://localhost:3001/todos')
	if (!res.ok) {
		throw new Error(`${res.status} ${res.statusText}`)
	}

	return await res.json() as ITodo[]
}

/**
 * Get todos from server, update `todos`-array and render todos.
 */
const getTodos = async () => {
	// Fetch todos from server and update local copy
	todos = await fetchTodos()

	// Render todos
	renderTodos()
}

/**
 * Render todos to DOM
 */
const renderTodos = () => {
	// Render not completed todos
	document.querySelector('#todos')!.innerHTML = todos
		.filter(todo => !todo.completed)
		.map(todo => `
			<li class="list-group-item">
				${todo.title}
			</li>
		`)
		.join('')

	// Render completed todos
	document.querySelector('#completed-todos')!.innerHTML = todos
		.filter(todo => todo.completed)
		.map(todo => `
			<li class="list-group-item">
				${todo.title}
			</li>
		`)
		.join('')
}

/**
 * Listen for when the Create New Todo form is submitted
 */
document.querySelector('#new-todo-form')?.addEventListener('submit', async e => {
	e.preventDefault()

	const newTodoTitle = document.querySelector<HTMLInputElement>('#newTodo')?.value
	if (!newTodoTitle) {
		alert("That's not a todo")
		return
	}

	// Create a new Todo object
	const newTodo: ITodo = {
		title: newTodoTitle,
		completed: false,
	}

	// POST todo to server
	await createTodo(newTodo)

	// Get the new list of todos from the server
	getTodos()
})

getTodos()

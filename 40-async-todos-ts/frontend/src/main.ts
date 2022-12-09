import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

interface ITodo {
	id: number,
	title: string,
	completed: boolean,
}

// Local variable containing all the todos from the server
let todos: ITodo[] = []

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

getTodos()

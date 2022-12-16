import { fetchTodos, createTodo } from './api'
import { ITodo } from './interfaces'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

// Local variable containing all the todos from the server
let todos: ITodo[] = []

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

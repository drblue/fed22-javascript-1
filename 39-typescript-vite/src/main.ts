import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

const todosList = document.querySelector('#todos')!
const newTodoForm = document.querySelector('#new-todo-form')

// list of todos
const todos: string[] = []

// render todos
const renderTodos = () => {
	todosList.innerHTML = ''

	todos.forEach(todo => {
		todosList.innerHTML += `<li class="list-group-item">${todo}</li>`
	})
}

// create a new todo form
newTodoForm?.addEventListener('submit', e => {
	e.preventDefault()

	const newTodoTitle = document.querySelector<HTMLInputElement>('#new-todo-title')?.value || ''
	if (newTodoTitle.length < 3) {
		alert("Too short todo")
		return
	}

	// push todo into list of todos
	todos.push(newTodoTitle)

	// render all todos
	renderTodos()
})

// render all todos
renderTodos()

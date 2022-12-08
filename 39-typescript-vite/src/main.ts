import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

const todosList = document.querySelector('#todos')!
const newTodoForm = document.querySelector('#new-todo-form')

type Todo = {
	title: string,
	completed: boolean,
}

// list of todos
const todos: Todo[] = []

// render todos
const renderTodos = () => {
	// replace todosList content
	todosList.innerHTML = todos
		.map(todo =>
			`<li class="list-group-item ${todo.completed ? 'completed' : ''}">
				${todo.title}
			</li>`
		)
		.join('')
}

// create a new todo form
newTodoForm?.addEventListener('submit', e => {
	e.preventDefault()

	const newTodoTitle = document.querySelector<HTMLInputElement>('#new-todo-title')!.value
	if (newTodoTitle.length < 3) {
		alert("Too short todo")
		return
	}

	// push todo into list of todos
	const newTodo: Todo = {
		title: newTodoTitle,
		completed: false,
	}
	todos.push(newTodo)

	// empty input
	document.querySelector<HTMLInputElement>('#new-todo-title')!.value = ''

	// render all todos
	renderTodos()
})

// render all todos
renderTodos()

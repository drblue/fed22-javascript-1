import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

const todosList = document.querySelector('#todos')!
const newTodoForm = document.querySelector('#new-todo-form')

type Todo = {
	id: number,
	title: string,
	completed: boolean,
}

// get json-todos from localStorage
const json = localStorage.getItem('todos') ?? '[]'

// parse json-todos into an array of Todo-objects
const todos: Todo[] = JSON.parse(json)

// render todos
const renderTodos = () => {
	// replace todosList content
	todosList.innerHTML = todos
		.map(todo =>
			`<li class="list-group-item ${todo.completed ? 'completed' : ''}" data-todo-id="${todo.id}">
				${todo.title}
			</li>`
		)
		.join('')
}

// save todos
const saveTodos = () => {
	// convert todos-array to JSON
	const json = JSON.stringify(todos)

	// save JSON to localStorage
	localStorage.setItem('todos', json)
}

// listen for click-events on the todo list
todosList.addEventListener('click', e => {
	const target = (e.target as HTMLElement)

	// check if click was on a `li` element
	if (target.tagName === "LI") {
		// find id of clicked todo
		const todoId = Number(target.dataset.todoId)

		// find the todo with the id of the clicked todo
		const foundTodo = todos.find(todo => todo.id === todoId)

		// if we found the todo, toggle its completed status
		if (foundTodo) {
			foundTodo.completed = !foundTodo.completed

			/**
			 * save todos to localStorage
			 */
			saveTodos()
		}

		// at last, re-render todo list
		renderTodos()
	}
})

// create a new todo form
newTodoForm?.addEventListener('submit', e => {
	e.preventDefault()

	const newTodoTitle = document.querySelector<HTMLInputElement>('#new-todo-title')!.value
	if (newTodoTitle.length < 3) {
		alert("Too short todo")
		return
	}

	// find maximum id in the todos-array
	const todoIds = todos.map(todo => todo.id)   // todoIds = [1, 2, 3]
	const maxId = Math.max(0, ...todoIds)  // 3

	// push todo into list of todos
	const newTodo: Todo = {
		id: maxId + 1,
		title: newTodoTitle,
		completed: false,
	}
	todos.push(newTodo)

	/**
	 * save todos to localStorage
	 */
	saveTodos()

	// empty input
	document.querySelector<HTMLInputElement>('#new-todo-title')!.value = ''

	// render all todos
	renderTodos()
})

// render all todos
renderTodos()

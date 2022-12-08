import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

const todosList = document.querySelector('#todos')!
const newTodoForm = document.querySelector('#new-todo-form')

type Todo = {
	id: number,
	title: string,
	completed: boolean,
}

// list of todos
const todos: Todo[] = [
	{
		id: 1,
		title: "Learn basic JavaScript",
		completed: true,
	},
	{
		id: 2,
		title: "Learn advanced JavaScript",
		completed: true,
	},
	{
		id: 3,
		title: "Learn basic TypeScript",
		completed: false,
	},
]

// render todos
const renderTodos = () => {
	console.log("todos", todos)

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

	// find maximum id in the todos-array
	const todoIds = todos.map(todo => todo.id)   // todoIds = [1, 2, 3]
	const maxId = Math.max(...todoIds)  // 3

	// push todo into list of todos
	const newTodo: Todo = {
		id: maxId + 1,
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

import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

interface ITodo {
	id: number,
	title: string,
	completed: boolean,
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
	// Fetch todos from server
	const omgdata = await fetchTodos()
	console.log(omgdata)

	// Update `todos`-array

	// Render todos
}

getTodos()

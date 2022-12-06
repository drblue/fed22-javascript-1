import './style.css'

const todosList = document.querySelector('#todos')
const newTodoForm = document.querySelector('#new-todo-form')

const getRandomNumber = (max: number = 10) => {
	return Math.ceil( Math.random() * max )
}
const num = getRandomNumber(40)
console.log("Random number:", num)

newTodoForm?.addEventListener('submit', e => {
	e.preventDefault()

	const inputNewTodoTitle = document.querySelector<HTMLInputElement>('#new-todo-title')!
	const newTodoTitle = inputNewTodoTitle.value

	if (todosList) {
		todosList.innerHTML += `<li>${newTodoTitle}</li>`
	}
})

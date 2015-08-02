import {dispatch} from '../dispatcher'

// Note actions are state-less. It's must for isomorphic app.

export function addTodo(title) {
  dispatch(addTodo, title)
}

// https://babeljs.io/docs/learn-es6/#destructuring
export function onNewTodoFieldChange({target: {name, value}}) {
  dispatch(onNewTodoFieldChange, {name, value})
}

export function toggleTodo(todo) {
  dispatch(toggleTodo, todo)
}

export function destroyTodo(todo) {
  dispatch(destroyTodo, todo)
}

export function clearCompleted() {
  dispatch(clearCompleted)
}

export function toggleAll(checked) {
  dispatch(toggleAll, {checked})
}

export function saveTodo(todo, props) {
  dispatch(saveTodo, {todo, props})
}

export function addHundredTodos() {
  dispatch(addHundredTodos)
}

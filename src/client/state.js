import State from '../lib/state'

// const initialState = process.env.IS_BROWSER
//   ? window._appState
//   : require('../server/initialstate')

const state = new State({
  newTodo: {
    title: ''
  },
  todos: {}
}, reviver)

function reviver(key, value) {
  if (key == 'todos')
    return value.toOrderedMap()
  return value.toMap()
}

export default state
export const newTodoCursor = state.cursor(['newTodo'])
export const todosCursor = state.cursor(['todos'])

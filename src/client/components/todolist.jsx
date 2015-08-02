import React from 'react'
import TodoItem from './todoitem'
import immutable from 'immutable'
import {addons} from 'react/addons'

export default React.createClass({
  // Try add hunderds todos. Typing new todo is still superfast.
  mixins: [addons.PureRenderMixin],

  propTypes: {
    // Whenever component prop is an immutable structure, use PureRenderMixin.
    todos: React.PropTypes.instanceOf(immutable.OrderedMap)
  },

  render() {
    return (
      <ul id="todo-list">
        {this.props.todos.map((todo, i) => {
          return <TodoItem todo={todo} key={todo.get('id')} />
          // toObject will not be required for React 0.13
        }).toObject()}
      </ul>
    )
  }

})

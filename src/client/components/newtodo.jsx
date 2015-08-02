import React from 'react'
import immutable from 'immutable'
import {addTodo, onNewTodoFieldChange} from '../todos/actions'
import {addons} from 'react/addons'

export default React.createClass({
  mixins: [addons.PureRenderMixin],

  propTypes: {
    todo: React.PropTypes.instanceOf(immutable.Map)
  },

  onKeyDown(e) {
    if (e.key == 'Enter')
      addTodo(e.target.value)
  },

  render() {
    const todo = this.props.todo

    return (
      <input
        autoFocus="true"
        id="new-todo"
        name="title"
        onChange={onNewTodoFieldChange}
        onKeyDown={this.onKeyDown}
        placeholder="What needs to be done?"
        value={todo.get('title')}
      />
    )
  }

})

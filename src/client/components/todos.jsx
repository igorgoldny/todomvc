import NewTodo from './newtodo'
import React from 'react'
import ReactRouter from 'react-router'
import TodoList from './todolist'
import TodosFooter from './todosfooter'
import {allCompleted, getCompleted, getNewTodo, getRemaining, getTodos} from '../todos/store'
import {toggleAll} from '../todos/actions'

export default React.createClass({
  mixins: [ReactRouter.State],

  render() {
    const toggleAllChecked = getTodos().size > 0 && allCompleted()
    const todos = this.isActive('active')
      ? getRemaining()
      : this.isActive('completed')
        ? getCompleted()
        : getTodos()

    return (
      <section id="todoapp">
        <header id="header">
          <h1>todos</h1>
          <NewTodo todo={getNewTodo()} />
        </header>
        <section id="main">
          <input
            checked={toggleAllChecked}
            id="toggle-all"
            onChange={() => toggleAll(!toggleAllChecked)}
            type="checkbox"
          />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <TodoList todos={todos} />
        </section>
        <TodosFooter />
      </section>
    )
  }

})

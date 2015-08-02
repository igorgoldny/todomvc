import DocumentTitle from 'react-document-title'
import React from 'react'
import state from '../state'
import {RouteHandler} from 'react-router'
import {addHundredTodos} from '../todos/actions'

// Leverage webpack require goodness for feature toggle based dead code removal.
require('../../../assets/css/app.styl')

export default React.createClass({
  componentDidMount() {
    state.on('change', () => {
      // Try hundreds todos with and without PureRenderMixin.
      console.time('whole app re-rendered')
      this.forceUpdate(() => {
        console.timeEnd('whole app re-rendered')
      })
    })

    // For Om-like app state persistence. Press shift+ctrl+s to save app state
    // and shift+ctrl+l to load.
    document.addEventListener('keypress', e => {
      if (!e.shiftKey || !e.ctrlKey) return
      switch (e.keyCode) {
        case 19: /* s */
          window._appState = state.save()
          window._appStateString = JSON.stringify(window._appState)
          console.log('app state saved')
          console.log('copy the state to your clipboard by calling copy(_appStateString)')
          console.log('for dev type _appState and press enter')
          break
        case 12: /* l */
          const stateStr = window.prompt('Path the serialized state into the input')
          const newState = JSON.parse(stateStr)
          if (!newState) return
          state.load(newState)
          break
      }
    })
  },

  render() {
    return (
      <DocumentTitle title={'TodoMVC'}>
        <div className="page">
          <RouteHandler />
          <footer id="info">
            <p>Double-click to edit a todo</p>
          </footer>
        </div>
      </DocumentTitle>
    )
  }
})

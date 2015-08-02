import DocumentTitle from 'react-document-title'
import Html from './html'
import Promise from 'bluebird'
import React from 'react'
import Router from 'react-router'
import routes from '../client/routes'

function render(Handler, config) {
  const appHtml = `<div id="app">${React.renderToString(<Handler />)}</div>`
  const appScriptSrc = config.isProduction
    ? '/build/app.js?v=' + config.version
    : 'http://localhost:8888/build/app.js'
  const scriptsHtml = `
    <script src="${appScriptSrc}"></script>
  `
  const title = DocumentTitle.rewind()
  return '<!DOCTYPE html>' + React.renderToStaticMarkup(
    <Html
      bodyHtml={appHtml + scriptsHtml}
      isProduction={config.isProduction}
      title={title}
      version={config.version}
    />
  )
}

export default (path, config) => {

  return new Promise((resolve, reject) => {
    Router.run(routes, path, (Handler, state) => {
      const html = render(Handler, config)
      const isNotFound = state.routes.some(route => route.name == 'not-found')
      resolve({
        html: html,
        status: isNotFound ? 404: 200
      })
    })
  })

}

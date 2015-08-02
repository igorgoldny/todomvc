## Features

- Written in [babeljs.io](https://babeljs.io/), the best ES6 and ES7 transpiler.
It handles future JavaScripts with [React JSX](http://facebook.github.io/react/docs/jsx-in-depth.html) syntax spiced by [Flowtype](http://flowtype.org/) type [annotations](http://flowtype.org/docs/type-annotations.html#_) already. Sourcemaps
enabled by default.
- [React](http://facebook.github.io/react/), [Flux](https://facebook.github.io/flux/), [react-router](https://github.com/rackt/react-router), [immutable.js](http://facebook.github.io/immutable-js/), and more awesomeness.
- Isomorphic architecture with state-less stores, server side rendering, and routing inside expressjs.
- [jest](https://facebook.github.io/jest) unit testing.
- Global immutable app state like Om with cursors, so app state can be snapshotted and reloaded. Undo redo is super easy.
- The state of art performance thanks to [immutable.js](http://facebook.github.io/immutable-js) and [PureRenderMixin](http://facebook.github.io/react/docs/pure-render-mixin.html) combo.
- Well tuned dev stack based on [gulp.js](http://gulpjs.com/) and [webpack](http://webpack.github.io/) configured both for dev and production.
- CSS livereload and webpack module hot reload, so you can tweak React in real time.
- Vanilla [Flux](https://facebook.github.io/flux/), remember what I wrote about frameworks?
- Isomorphic 404 and 500 pages.

## Install

```
  npm install --global gulp
  git clone https://github.com/steida/todomvc.git
  cd todomvc
  npm install
```

## Run

- `gulp` run app in development mode
- `gulp -p` run app in production mode

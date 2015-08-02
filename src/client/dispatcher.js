import {Dispatcher} from 'flux'

const dispatcher = new Dispatcher

export function register(callback: Function): string {
  return dispatcher.register(callback)
}

export function dispatch(action: Function, data: ?Object) {
  dispatcher.dispatch({action, data})
}

import EventEmitter from 'eventemitter3'
import Immutable from 'immutable'

export default class State extends EventEmitter {

  constructor(state, reviver: ?Function) {
    this._state = null
    this._reviver = reviver
    this._states = []
    this._statePos = 0;
    this.load(state || {})
  }

  load(state: Object) {
    this.set(Immutable.Map.isMap(state)
      ? state
      : Immutable.fromJS(state, this._reviver)
    )
  }

  set(state) {
    if (this._state === state) return
    this._state = state    
    if (!this.isNewStateSameAsRedo(state)) 
      this._states.length = this._statePos;    
    this._states.push(state)
    this._statePos++;
    this.emit('change', this._state)
  }

  isNewStateSameAsRedo(state) {
    if (!this.canRedo) return false
    return state.equals(this._states[this._statePos])    
  }

  get canUndo() {
    return this._statePos > 1;
  }  

  get canRedo() {
    return this._statePos < this._states.length;
  }

  undo() {
    this.gotostep(this._statePos - 1)    
  }

  redo() {
    this.gotostep(this._statePos + 1)    
  }

  gotostep(pos) {
    this._statePos = pos;
    this._state = this._states[pos - 1]
    this.emit('change', this._state)   
  }

  get() {
    return this._state
  }

  save(): Object {
    return this._state.toJS()
  }

  toConsole() {
    console.log(JSON.stringify(this.save()))
  }

  cursor(path) {
    return (update) => {
      if (update) {
        this.set(this._state.updateIn(path, update))
      }
      else
        return this._state.getIn(path)
    }
  }
}

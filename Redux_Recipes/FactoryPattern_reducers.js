import { createStore } from 'redux'

function incrementReducer(state, action) {
  console.log(" Increment action:", action);
  return state;
}

function decrementReducer(state, action) {
  console.log(" Decremnet action:", action);
  return state;
}

function createReducer(initialState, handlers) {
  return function (state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    }
    return state;
  }
}

const reducer = createReducer([], {
  'INCREMENT': incrementReducer,
  'DECREMENT': decrementReducer
})

console.log(reducer.toString());

const store = createStore(reducer);
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'DEFAULT' });
import { createStore, combineReducers } from "redux";

function counterWithName(name) {
  return function (state = 0, action) {
    switch (action.type) {
      case 'INC_' + name:
        return state + 1;
      case 'DEC_' + name:
        return state - 1
      default:
        return state;
    }
  }
}

const finalReducer = combineReducers({
  counterA: counterWithName('A'),
  counterB: counterWithName('B'),
  counterC: counterWithName('c')
})

const store = createStore(finalReducer);
store.subscribe(() => console.log(store.getState()))
store.dispatch({ type: 'INC_A' });

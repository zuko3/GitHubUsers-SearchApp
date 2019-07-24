import { createStore } from 'redux'

function actionCreatorFactory(type) {
  return function (payload) {
    return {
      type: type,
      payload: payload
    }
  }
}


function reducer(state, action) {
  console.log(action);
  return state;
}


const store = createStore(reducer);
const increment = actionCreatorFactory("@type/INCREMENT");
const decrement = actionCreatorFactory("@type/DECREMENT");

store.dispatch(increment({ a: 1 }));
store.dispatch(decrement({ b: 1 }));
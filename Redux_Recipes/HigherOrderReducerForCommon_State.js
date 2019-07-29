import { createStore, combineReducers } from "redux";

function AsyncReducer(constants, initialState) {
  return function (state = initialState, action) {
    switch (action.type) {
      case constants[0]:
        return {
          ...state,
          isFetching: true,
          data: null,
          error: false
        }
      case constants[1]:
        return {
          ...state,
          isFetching: false,
          data: action.payload,
          error: false,
        }
      case constants[2]:
        return {
          ...state,
          isFetching: false,
          data: null,
          error: true
        }
      default: return state;
    }
  }
}

const userReducer = AsyncReducer([
  "USER_REQUEST",
  "USER_SUCCESS",
  "USER_FAILURE"
], { name: 'userReducer' })

const todosReducer = AsyncReducer([
  "TODOS_REQUEST",
  "TODOS_SUCCESS",
  "TODOS_FAILURE"
], { name: 'todosReducer' })

const finalReducer = combineReducers({
  userReducer,
  todosReducer
})

const store = createStore(finalReducer);
store.subscribe(() => console.log(store.getState()));
store.dispatch({ type: 'USER_REQUEST' });
store.dispatch({ type: 'USER_SUCCESS', payload: { myname: 'rahul' } });
store.dispatch({ type: 'TODOS_REQUEST' });

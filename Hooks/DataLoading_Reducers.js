import React, { Component, useState, useEffect, useReducer } from 'react';
import { render } from 'react-dom';

function dataFetchReducer(state, action) {
  console.log("action dispatched:", action)
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        isLoading: true,
        isError: false,
        data: []
      }
    case 'FETCH_SUCCESS':
      return {
        isLoading: false,
        isError: false,
        data: action.payload
      }
    case 'FETCH_ERROR':
      return {
        isLoading: false,
        isError: true,
        data: []
      }
    default:
      return state;
  }
}

async function fetchData(dispatch) {
  try {
    dispatch({ type: 'FETCH_INIT' });
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    dispatch({ type: 'FETCH_SUCCESS', payload: data });
  } catch (e) {
    dispatch({ type: 'FETCH_ERROR' });
  }
}

function useFetcher() {
  const initialState = {
    isLoading: false,
    isError: false,
    data: []
  }
  const [state, dispatch] = useReducer(dataFetchReducer, initialState);
  useEffect(() => {
    fetchData(dispatch)
  }, [])
  return [state];
}


function App() {
  const [{ data, isLoading, isError }] = useFetcher();
  return (
    <div>
      <h1>App</h1>
      {isLoading ? <h1>Loading ... </h1> : null}
      {!isLoading && isError ? <h1>Error</h1> : null}
      {data.map((item, index) => <li key={index}>{item.title}</li>)}
    </div>
  )
}



render(<App />, document.getElementById('root'));

import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';

function useFetcher() {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])
  const [isError, setIsError] = useState(false)
  useEffect(() => {
    setData([]);
    setIsLoading(true);
    setIsError(false);

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(res => {
        setIsLoading(false);
        setData(res);
      }).catch(er => {
        setIsLoading(false);
        setIsError(true);
      })
  }, []);
  return [data, isLoading, isError]
}


function App() {
  const [data, isLoading, isError] = useFetcher();
  return (
    <div>
    <h1>App</h1>
      {isLoading ? <h1>Loading ... </h1> : null}
      {!isLoading && isError ? <h1>Loading</h1> : null}
      {data.map((item, index) => <li key={index}>{item.title}</li>)}
    </div>
  )
}


render(<App />, document.getElementById('root'));

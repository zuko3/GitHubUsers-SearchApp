import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const foods = [{
    name: 'cherries',
    picture: 'https://www.w3schools.com/w3images/cherries.jpg',
    description: "The Perfect Sandwich, A Real NYC ClassicJust some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
},
{
    name: 'sandwich',
    picture: 'https://www.w3schools.com/w3images/sandwich.jpg',
    description: "The Perfect Sandwich, A Real NYC ClassicJust some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
}
];

ReactDOM.render(<App foods={[]} />, document.getElementById('root'));
setTimeout(()=>ReactDOM.render(<App foods={foods} />, document.getElementById('root')),2000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

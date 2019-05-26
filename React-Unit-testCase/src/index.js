import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App2} from "./App2";
import registerServiceWorker from './registerServiceWorker';
import {Gravatar} from "./Gravatar";
import { FetchExample } from "./FetchExample";

ReactDOM.render(
<div>
    <App2 />
    <Gravatar/>
    <FetchExample />
</div>
, document.getElementById('root'));
registerServiceWorker();

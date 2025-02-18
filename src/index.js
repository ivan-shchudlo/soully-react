import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from '../src/App/App';


import { Provider } from 'react-redux';
import store from './store';

import { configureFakeBackend } from './helpers'
configureFakeBackend();

ReactDOM.render(
    
    <Provider store={store}>
        <App />
        
    </Provider>
, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//console.log("log2 "+store.getState())
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import Store from './redux/store/Store';
import {Provider} from 'react-redux';


ReactDOM.render(
    <Provider store={Store}>
        <Router>
            <App />
        </Router>
    </Provider>
, document.getElementById('root'));


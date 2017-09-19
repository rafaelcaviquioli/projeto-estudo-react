import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Router from './router';
import createStore from './createStore';
import TokenService from './components/security/token-service';

const statusLogin = new TokenService().isNullOfEmpty() ? 0 : 1;

const state = { login: { status: statusLogin } };
const store = createStore(state);

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import Login from './components/login/login';
import PrivateRoute from './components/security/private-route';
import PageNotFound from './components/http-errors/page-not-found';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Switch>
                    <PrivateRoute exact path="/" component={App} />
                    <Route exact path="/login" component={Login} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </Router>
    </Provider>
    , document.getElementById('root')
);

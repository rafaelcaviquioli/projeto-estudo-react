import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';

import Login from './components/login/login';
import Home from './components/home';
import PrivateRoute from './components/security/private-route';
import PageNotFound from './components/http-errors/page-not-found';

const Router = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route cmponent={PageNotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default Router;

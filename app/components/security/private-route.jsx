import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import isLogged from './is-logged';

const PrivateRoute = ({ component: Component, ...otherProps }) => (
    <Route
        {...otherProps}
        render={props => (
            isLogged() ? (<Component {...props} />) :
                (
                    <Redirect to={
                        {
                            pathname: '/login',
                            state: { from: props.location },
                        }
                    }
                    />
                )
        )}
    />
);

export default PrivateRoute;
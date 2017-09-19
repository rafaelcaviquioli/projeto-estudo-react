import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends React.Component {

    render() {
        const { component: Component, ...otherProps } = this.props;

        return (<Route {...otherProps}
            render={props => (
                this.props.stateLogin === 1 ? (<Component {...props} />) :
                    (
                        <Redirect to={
                            {
                                pathname: '/login',
                                state: { from: props.location },
                            }
                        }
                        />
                    )
            )} />
        );
    }
};

const mapStateToProps = state => ({
    stateLogin: state.login.status
});

export default connect(mapStateToProps, null)(PrivateRoute);
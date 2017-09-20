import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as loginActions from '../login/actions';
import TokenService from '../security/token-service';

class PrivateRoute extends React.Component {

    componentWillMount(){
        if(this.props.stateLogin !== 1){

            const token = new TokenService().getToken();

            if(token !== '' && token !== undefined && token !== null){
                this.props.loadUserStoreByToken();
            }
        }
    }
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
const mapDispatchToProps = dispatch => ({
    loadUserStoreByToken: (token) => {
        dispatch(loginActions.loadUserStoreByToken(token));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
import emailPasswordToAuthorization from '../../services/api/user/emailPasswordToAuthorization';
import ApiUser from '../../services/api/user';
import * as types from './actions-types';
import TokenService from '../security/token-service';

const authenticationSuccessful = (token) => (dispatch) => {
    new TokenService().setToken(token);

    const apiUser = new ApiUser();

    return apiUser.getUser().then((result) => {
        dispatch({ type: types.LOGIN, token, user: result });

        return result;
    });
}

const login = (email, password) => (dispatch) => {
    dispatch({ type: types.LOGOUT });

    const authorization = emailPasswordToAuthorization(email, password);

    const apiUser = new ApiUser();
    dispatch({ type: types.LOADING, status: true });

    return apiUser.login(authorization)
        .then((result) => {
            const token = result.data['auth-jwt'];

            dispatch(authenticationSuccessful(token)).then((user) => {
                dispatch({ type: types.LOADING, status: false });

                window.location = '/';
            });
        })
        .catch((error) => {
            console.log(error);

            dispatch({ type: types.LOGOUT });
            dispatch({ type: types.LOGIN_FAILED });
            dispatch({ type: types.LOADING, status: false });
        });
}
const loadUserStoreByToken = (token) => (dispatch) => {
    dispatch(authenticationSuccessful(token)).then((user) => {
        dispatch({ type: types.LOADING, status: false });

        window.location = '/';
    });
}
export { login, authenticationSuccessful, loadUserStoreByToken }
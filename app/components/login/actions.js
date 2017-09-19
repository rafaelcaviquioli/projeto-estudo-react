import emailPasswordToAuthorization from '../../services/api/user/emailPasswordToAuthorization';
import ApiUser from '../../services/api/user';
import * as types from './actions-types';
import TokenService from '../security/token-service';

const login = (email, password) => (dispatch) => {
    dispatch({ type: types.LOGOUT });

    const authorization = emailPasswordToAuthorization(email, password);

    const apiUser = new ApiUser();
    dispatch({ type: types.LOADING, status: true });

    return apiUser.login(authorization)
        .then((result) => {
            const token = result.data['auth-jwt'];

            dispatch({ type: types.LOGIN, token });
            dispatch({ type: types.LOADING, status: false });

            const tokenService = new TokenService();
            tokenService.setToken(token);
            const data = tokenService.getData();




            window.location = '/';
        })
        .catch((error) => {
            console.log(error);

            dispatch({ type: types.LOGOUT });
            dispatch({ type: types.LOGIN_FAILED });
            dispatch({ type: types.LOADING, status: false });
        });
}

const loadUserStoreByToken = (token) => (dispatch) => {
    
}
export { login, loadUserStoreByToken }
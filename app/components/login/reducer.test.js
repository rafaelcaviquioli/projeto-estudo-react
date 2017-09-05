import thunk from 'redux-thunk';
import loginReducer from './reducer';
import * as types from './actions-types';
import * as actions from './actions';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import localStorage from 'mock-local-storage';
import TokenService from '../security/token-service';
import config from '../../services/api/config';

describe('Login reducer', () => {
    const urlAuth = config.host + '/auth';

    global.window = {};

    window.localStorage = global.localStorage;

    let mock;

    beforeEach(() => {
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        mock.reset();
    });

    const composeState = (state = {}) =>
        (initialState = {}) => {
            return { ...initialState, success: false, token: '' };
        };
    const tokenExpected = '6ger1thr6rt1h65wr1g32df1gh65wrh1rth65w1h';
    const mainReducer = combineReducers({
        login: loginReducer,
    });

    it('Should register true login at store when login successful', () => {
        mock.onGet(urlAuth).reply(200, {
            'auth-jwt': tokenExpected
        });

        const store = createStore(mainReducer, applyMiddleware(thunk));

        return store.dispatch(actions.login('usuario@email.com', 'senha'))
            .then(() => {
                const loginState = store.getState().login;

                expect(loginState.success).toEqual(true);
            });
    });

    it('Should register token equals token expected at store when login successful', () => {
        mock.onGet(urlAuth).reply(200, {
            'auth-jwt': tokenExpected
        });

        const store = createStore(mainReducer, applyMiddleware(thunk));

        return store.dispatch(actions.login('usuario@email.com', 'senha'))
            .then(() => {
                const loginState = store.getState().login;

                expect(loginState.token).toEqual(tokenExpected);
            });
    });

    it('Should register token at local storage when http status code 200', () => {
        mock.onGet(urlAuth).reply(200, {
            'auth-jwt': tokenExpected
        });

        const store = createStore(mainReducer, applyMiddleware(thunk));

        return store.dispatch(actions.login('usuario@email.com', 'senha'))
            .then(() => {
                const tokenLocalStorage = new TokenService().getToken();

                expect(tokenLocalStorage).toEqual(tokenExpected);
            });
    });

    it('Should register failed true at store when http status code 401', () => {
        mock.onGet(urlAuth).reply(401);

        const store = createStore(mainReducer, applyMiddleware(thunk));

        return store.dispatch(actions.login('usuario@email.com', 'senha'))
            .then(() => {
                const loginState = store.getState().login;

                expect(loginState.failed).toEqual(true);
            });
    });
});
import * as types from './actions-types';

export default function reducer(state, action) {
    switch (action.type) {
        case types.LOGIN:
            return { ...state, status: 1, token: action.token };

        case types.LOGOUT:
            return { ...state, status: 0, token: null };

        case types.LOADING:
            return { ...state, loading: action.status };

        case types.LOGIN_FAILED:
            return { ...state, status: -1 };

        case types.LOGIN_ERROR:
            return { ...state, error: true };

        default:
            return { ...state };
    }
}

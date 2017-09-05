import * as types from './actions-types';

const initialState = { loading: false }

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN:
            return { ...state, success: true, token: action.token };

        case types.LOGOUT:
            return { ...initialState, success: false, failed: false, token: null };

        case types.LOADING:
            return { ...state, loading: action.status };

        case types.LOGIN_FAILED:
            return { ...state, failed: true };

        case types.LOGIN_ERROR:
            return { ...state, error: true };

        default:
            return { ...state };
    }
}
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import reducerLogin from './components/login/reducer';

export default (initialState = {}) => {
    const reducers = combineReducers({
        login: reducerLogin,
        form: formReducer
    });

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        reducers,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
}

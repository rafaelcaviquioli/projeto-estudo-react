import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form'

import thunk from 'redux-thunk';
import reducerLogin from './components/login/reducer';

const reducer = combineReducers({
    login: reducerLogin,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

//const store = createStore(reducer, applyMiddleware(thunk));

export default store;

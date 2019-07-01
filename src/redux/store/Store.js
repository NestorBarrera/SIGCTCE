import {createStore, combineReducers, applyMiddleware} from 'redux';
import promiseMiddleware  from 'redux-promise-middleware';

import {
    NEW_USERS_REDUCER,
    GET_USERS_REDUCER
} from '../reducers/UsersReducer';


const CATALOGO =combineReducers({
    stateUsers: GET_USERS_REDUCER,
    responseNewUser: NEW_USERS_REDUCER
});

const Store= createStore(CATALOGO, applyMiddleware(promiseMiddleware));
export default Store;
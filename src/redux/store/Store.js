import {createStore, combineReducers, applyMiddleware} from 'redux';
import promiseMiddleware  from 'redux-promise-middleware';

/////USUARIOS//
import {
    NEW_USERS_REDUCER,
    GET_USERS_REDUCER,
    DELETE_USER_REDUCER
} from '../reducers/UsersReducer';

///BENEFICIARIOS///
import {
    NEW_BENE_REDUCER,
    GET_BENE_REDUCER,
    DELETE_BENE_REDUCER
} from '../reducers/BeneReducer';

///CURSOS//
import {
    NEW_CURSOS_REDUCER,
    GET_CURSOS_REDUCER,
    DELETE_CURSOS_REDUCER
} from '../reducers/CursosReducer';

const CATALOGO =combineReducers({
    stateUsers: GET_USERS_REDUCER,
    responseNewUser: NEW_USERS_REDUCER,
    responseDeleteUser: DELETE_USER_REDUCER,
    stateBene: GET_BENE_REDUCER,
    responseNewBene: NEW_BENE_REDUCER,
    responseDeleteBene: DELETE_BENE_REDUCER,
    stateCursos: GET_CURSOS_REDUCER,
    responseNewCursos: NEW_CURSOS_REDUCER,
    responseDeleteCursos: DELETE_CURSOS_REDUCER
});

const Store= createStore(CATALOGO, applyMiddleware(promiseMiddleware));
export default Store;
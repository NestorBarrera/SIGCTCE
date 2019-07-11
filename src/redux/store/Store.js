import {createStore, combineReducers, applyMiddleware} from 'redux';
import promiseMiddleware  from 'redux-promise-middleware';

/////USUARIOS//
import {
    NEW_USER_REDUCER,
    GET_USERS_REDUCER,
    GET_USER_REDUCER,
    DELETE_USER_REDUCER,
    UPDATE_USER_REDUCER
} from '../reducers/UsersReducer';

///BENEFICIARIOS///
import {
    NEW_BENE_REDUCER,
    GET_BENES_REDUCER,
    GET_BENE_REDUCER,
    DELETE_BENE_REDUCER,
    UPDATE_BENE_REDUCER
} from '../reducers/BeneReducer';

///CURSOS//
import {
    NEW_CURSOS_REDUCER,
    GET_CURSOS_REDUCER,
    GET_CURSO_REDUCER,
    DELETE_CURSOS_REDUCER,
    UPDATE_CURSOS_REDUCER
} from '../reducers/CursosReducer';

const CATALOGO =combineReducers({
    //Usuarios//
    stateUsers: GET_USERS_REDUCER,
    stateUser: GET_USER_REDUCER,
    responseNewUser: NEW_USER_REDUCER,
    responseDeleteUser: DELETE_USER_REDUCER,
    responseUpdateUser: UPDATE_USER_REDUCER,
    ///Beneficiarios///
    stateBenes: GET_BENES_REDUCER,
    stateBene: GET_BENE_REDUCER,
    responseNewBene: NEW_BENE_REDUCER,
    responseDeleteBene: DELETE_BENE_REDUCER,
    responseUpdateBene: UPDATE_BENE_REDUCER,
    ////Cursos y Talleres ////
    stateCursos: GET_CURSOS_REDUCER,
    stateCurso: GET_CURSO_REDUCER,
    responseNewCursos: NEW_CURSOS_REDUCER,
    responseDeleteCursos: DELETE_CURSOS_REDUCER,
    responseUpdateCursos:UPDATE_CURSOS_REDUCER
});

const Store= createStore(CATALOGO, applyMiddleware(promiseMiddleware));
export default Store;
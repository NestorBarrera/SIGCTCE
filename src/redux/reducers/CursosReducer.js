const GET_CURSOS_REDUCER = (state = [], action) =>{
    switch(action.type){
        case "GET_CURSOS_PENDING": return state;
        case "GET_CURSOS_FULFILLED": return action.payload.data;
        case "GET_CURSOS_REJECTED": return state;
        default: return state;
    }
};

const NEW_CURSOS_REDUCER = (state = {}, action) =>{
    switch(action.type){
        case "NEW_CURSOS_PENDING": return {status: "Pending"};
        case "NEW_CURSOS_FULFILLED": return action.payload.data;
        case "NEW_CURSOS_REJECTED": return {status : "Error"};
        default: return state;
    }
};

const DELETE_CURSOS_REDUCER = (state = {}, action) =>{
    switch(action.type){
        case "DELETE_CURSOS_PENDING": return {status: "Pending"};
        case "DELETE_CURSOS_FULFILLED": return action.payload.data;
        case "DELETE_CURSOS_REJECTED": return {status : "Error"};
        default: return state;
    }
};

export {
    NEW_CURSOS_REDUCER,
    GET_CURSOS_REDUCER,
    DELETE_CURSOS_REDUCER
};
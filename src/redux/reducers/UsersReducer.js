const GET_USERS_REDUCER = (state = [], action) =>{
    switch(action.type){
        case "GET_USERS_PENDING": return state;
        case "GET_USERS_FULFILLED": return action.payload.data;
        case "GET_USERS_REJECTED": return state;
        default: return state;
    }
};

const NEW_USERS_REDUCER = (state = {}, action) =>{
    switch(action.type){
        case "NEW_USERS_PENDING": return {status: "Pending"};
        case "NEW_USERS_FULFILLED": return action.payload.data;
        case "NEW_USERS_REJECTED": return {status : "Error"};
        default: return state;
    }
};

export {
    NEW_USERS_REDUCER,
    GET_USERS_REDUCER
};
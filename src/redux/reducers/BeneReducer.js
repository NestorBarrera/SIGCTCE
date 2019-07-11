const GET_BENE_REDUCER = (state = [], action) =>{
    switch(action.type){
        case "GET_BENE_PENDING": return state;
        case "GET_BENE_FULFILLED": return action.payload.data;
        case "GET_BENE_REJECTED": return state;
        default: return state;
    }
};
const GET_BENES_REDUCER = (state = [], action) =>{
    switch(action.type){
        case "GET_BENES_PENDING": return state;
        case "GET_BENES_FULFILLED": return action.payload.data;
        case "GET_BENES_REJECTED": return state;
        default: return state;
    }
};

const NEW_BENE_REDUCER = (state = {}, action) =>{
    switch(action.type){
        case "NEW_BENE_PENDING": return {status: "Pending"};
        case "NEW_BENE_FULFILLED": return action.payload.data;
        case "NEW_BENE_REJECTED": return {status : "Error"};
        default: return state;
    }
};
const UPDATE_BENE_REDUCER = (state = {}, action) =>{
    switch(action.type){
        case "UPDATE_BENE_PENDING": return {status: "Pending"};
        case "UPDATE_BENE_FULFILLED": return action.payload.data;
        case "UPDATE_BENE_REJECTED": return {status : "Error"};
        default: return state;
    }
};

const DELETE_BENE_REDUCER = (state = {}, action) =>{
    switch(action.type){
        case "DELETE_BENE_PENDING": return {status: "Pending"};
        case "DELETE_BENE_FULFILLED": return action.payload.data;
        case "DELETE_BENE_REJECTED": return {status : "Error"};
        default: return state;
    }
};

export {
    NEW_BENE_REDUCER,
    GET_BENE_REDUCER,
    GET_BENES_REDUCER,
    DELETE_BENE_REDUCER,
    UPDATE_BENE_REDUCER
};
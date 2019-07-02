const GET_BENE_REDUCER = (state = [], action) =>{
    switch(action.type){
        case "GET_BENE_PENDING": return state;
        case "GET_BENE_FULFILLED": return action.payload.data;
        case "GET_BENE_REJECTED": return state;
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

export {
    NEW_BENE_REDUCER,
    GET_BENE_REDUCER
};
import axios from 'axios';

const BASE_URL= "http://" +window.location.hostname + ":8110";

const GET_USER_ACTION = () =>{
    return{
        type: "GET_USERS",
        payload: axios.get(BASE_URL + '/getUsers')
    };
}

const NEW_USER_ACTION =(name,app,apm,edad,sexo,tel,email,passwd,area,level,active) =>{
    return{
        type: "NEW_USER",
        payload: axios({
            method: 'post',
            url: BASE_URL + '/user/signup',
            data:{
                name,app,apm,edad,sexo,tel,email,passwd,area,level,active
            },
            config: {
                headers:{
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }
        })
    };
}

const DELETE_USER_ACTION =(id) =>{
    return{
        type: "DELETE_USER",
        payload: axios.get(BASE_URL + '/user/delete' + id)
    };
} 


export {
    GET_USER_ACTION,
    NEW_USER_ACTION,
    DELETE_USER_ACTION
};
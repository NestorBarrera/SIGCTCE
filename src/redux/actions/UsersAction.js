import axios from 'axios';

const BASE_URL= "http://" +window.location.hostname + ":8110";

const GET_USER_ACTIONS = () =>{
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


export {
    GET_USER_ACTIONS,
    NEW_USER_ACTION
};
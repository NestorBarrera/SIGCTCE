import axios from 'axios';

const BASE_URL= "http://" +window.location.hostname + ":8110";

const GET_BENE_ACTION = () =>{
    return{
        type: "GET_BENE",
        payload: axios.get(BASE_URL + '/getBenefi')
    };
}

const NEW_BENE_ACTION =(nombre,app,apm,fecha,edad,sexo,curp,tel,email) =>{
    return{
        type: "NEW_BENE",
        payload: axios({
            method: 'post',
            url: BASE_URL + '/beneficiario/signup',
            data:{
                nombre,app,apm,fecha,edad,sexo,curp,tel,email
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
    GET_BENE_ACTION,
    NEW_BENE_ACTION
};
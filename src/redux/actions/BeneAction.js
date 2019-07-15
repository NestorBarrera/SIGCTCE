import axios from 'axios';

const BASE_URL= "http://" +window.location.hostname + ":8110";
////////////
const GET_BENE_ACTION = (id) =>{
    return{
        type: "GET_BENE",
        payload: axios.get(BASE_URL + '/getBenefi/'+id)
    };
}
///////////
const GET_BENES_ACTION = () =>{
    return{
        type: "GET_BENES",
        payload: axios.get(BASE_URL + '/getBenefi')
    };
}

const NEW_BENE_ACTION =(nombre,app,apm,date,edad,sexo,curp,tel,email) =>{
    return{
        type: "NEW_BENE",
        payload: axios({
            method: 'post',
            url: BASE_URL + '/beneficiario/signup',
            data:{
                nombre,app,apm,date,edad,sexo,curp,tel,email
            },
            config: {
                headers:{
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }
        })
    };
}
const UPDATE_BENE_ACTION =(id,nombre,app,apm,date,edad,sexo,curp,tel,email) =>{
    return{
        type: "UPDATE_BENE",
        payload: axios({
            method: 'put',
            url: BASE_URL + '/beneficiario/edit/'+id,
            data:{
                nombre,app,apm,date,edad,sexo,curp,tel,email
            },
            config: {
                headers:{
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }
        })
    };
}

const DELETE_BENE_ACTION =(id) =>{
    return{
        type: "DELETE_BENE",
        payload: axios.get(BASE_URL + '/beneficiario/delete/' + id)
    };
} 

export {
    GET_BENE_ACTION,
    GET_BENES_ACTION,
    NEW_BENE_ACTION,
    DELETE_BENE_ACTION,
    UPDATE_BENE_ACTION
};
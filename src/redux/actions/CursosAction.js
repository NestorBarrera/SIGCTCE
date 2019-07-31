import axios from 'axios';

const BASE_URL= "http://" +window.location.hostname + ":8110";

const GET_CURSOS_ACTION = () =>{
    return{
        type: "GET_CURSOS",
        payload: axios.get(BASE_URL + '/getCursos')
    };
}
const GET_CURSO_ACTION = (id) =>{
    return{
        type: "GET_CURSO",
        payload: axios.get(BASE_URL + '/getCursos/'+id)
    };
}

const NEW_CURSOS_ACTION =(nombrecurso,descri,ponente,resena,time,datein,datefi,area,tipo,capacity) =>{
    return{
        type: "NEW_CURSOS",
        payload: axios({
            method: 'post',
            url: BASE_URL + '/Cursos/signup',
            data:{
                nombrecurso,descri,ponente,resena,time,datein,datefi,area,tipo,capacity
            },
            config: {
                headers:{
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }
        })
    };
}
const UPDATE_CURSOS_ACTION =(id,nombrecurso,descri,ponente,resena,time,datein,datefi,area,tipo,capacity) =>{
    return{
        type: "UPDATE_CURSOS",
        payload: axios({
            method: 'put',
            url: BASE_URL + '/Cursos/edit/'+id,
            data:{
                nombrecurso,descri,ponente,resena,time,datein,datefi,area,tipo,capacity
            },
            config: {
                headers:{
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }
        })
    };
}
const DELETE_CURSOS_ACTION =(id) =>{
    return{
        type: "DELETE_CURSOS",
        payload: axios.get(BASE_URL + '/Cursos/delete/' + id)
    };
} 


export {
    GET_CURSOS_ACTION,
    GET_CURSO_ACTION,
    NEW_CURSOS_ACTION,
    DELETE_CURSOS_ACTION,
    UPDATE_CURSOS_ACTION
};
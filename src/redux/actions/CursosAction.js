import axios from 'axios';

const BASE_URL= "http://" +window.location.hostname + ":8110";

const GET_CURSOS_ACTION = () =>{
    return{
        type: "GET_CURSOS",
        payload: axios.get(BASE_URL + '/getCursos')
    };
}

const NEW_CURSOS_ACTION =(nombrecurso,descri,ponente,sexo,time,datein,datefi,area,tipo,capacity) =>{
    return{
        type: "NEW_CURSOS",
        payload: axios({
            method: 'post',
            url: BASE_URL + '/Cursos/signup',
            data:{
                nombrecurso,descri,ponente,sexo,time,datein,datefi,area,tipo,capacity
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
    NEW_CURSOS_ACTION,
    DELETE_CURSOS_ACTION
};
import React,{Component}from'react';
import { connect} from 'react-redux';
import {GET_CURSO_ACTION} from '../redux/actions/CursosAction';

class VistaCurso extends Component{
    constructor(props) {
        super(props);
        this.state = {
         showAlert: false
        };
    }
    componentDidMount(){
        let id = JSON.parse(localStorage.getItem("cursoId"));
        this.props.getCurso(id);
    }
    componentWillReceiveProps(nextProps){
        const NewProps = nextProps;

        if(NewProps.responseUpdateCursos.success === "OK"){
            window.location.href = "/principal";
        }
    }

    _renderItem = () =>{
        let {nombrecurso,descri,ponente,sexo,time,datein,datefi,capacity}=this.props.stateCurso;
            return(
                <section className="container">
                <div className="col-12 col-md-7">
                     <img src="../image/curso.jpg" class="card-img-top" height="200px"/>
                    
                            <h1 className="card-title"> {nombrecurso || ""}</h1>
                            <a><strong>Descripcion:</strong> {descri || ""} </a>
                            <a><strong>Ponente:</strong>{ponente || ""} </a>
                            <a><strong>sexo:</strong>{sexo || ""} </a>
                            <a><strong>Horario:</strong>{time || ""} </a>
                            <p className="card-text"><strong>Fecha de inicio:</strong>{datein || ""}</p>
                            <p className="card-text"><strong>Horario de inicio:</strong> {datefi || ""}</p>
                            <p className="card-text"><strong>Capacidad de personas:</strong> {capacity || ""}</p>
                            <button type="button" className="btn btn-primary" onClick={()=>{
                                window.location.href="RegistroCursos"
                            }} ><center> Inscribirse</center></button>
                       
                </div> 
            </section>
            );
    }
    render(){
        return(
            <section className="container">
                <div style={{marginTop: '15px'}}>
                <div className="row justify-content-center" >
                                {this._renderItem()}
                    </div>
                </div>
                
            </section>  
        );
    }
}
const mapStateToProps =({stateCurso,responseUpdateCursos}) => {
    return{
        stateCurso: stateCurso,
        responseUpdateCursos: responseUpdateCursos
    };
}

const mapDispatchToProps=(dispatch)=>{
    return{
        getCurso: (id)=>dispatch(GET_CURSO_ACTION(id))
    };
};
    const ConnectCursos= connect(mapStateToProps,mapDispatchToProps)(VistaCurso);
    export default ConnectCursos;
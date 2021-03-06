import React,{Component}from'react';
import { connect} from 'react-redux';
import {GET_CURSO_ACTION} from '../../redux/actions/CursosAction';

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
        let {_id,nombrecurso,descri,ponente,sexo,time,datein,datefi,capacity}=this.props.stateCurso;
            return(
                <div className="col-12 col-md-9">
                    <div className="row justify-content-center">
                        <div className="col-md-5">
                            <img src={"http://localhost:8110/image/cursos/"+_id+"-curso.png"} className="card-img" height='300px' width='600px'/>
                        </div>

                        <div className="col-md-7">
                            <div className="card-body" style={{textAlign:"center"}}>
                                <h1 className="card-title"> {nombrecurso || ""}</h1>
                                <p><strong>Descripcion:</strong> {descri || ""} </p>
                                <p><strong>Ponente:</strong>{ponente || ""} </p>
                                <p><strong>Reseña del Ponente:</strong>{sexo || ""} </p>
                                <p><strong>Horario:</strong>{time || ""} </p>
                                <p className="card-text"><strong>Fecha de inicio:</strong>{datein || ""}</p>
                                <p className="card-text"><strong>Horario de inicio:</strong> {datefi || ""}</p>
                                <p className="card-text"><strong>Capacidad de personas:</strong> {capacity || ""}</p>
                                <div className="btn-group " role="group" style={{marginTop: "10px"}}>
                                    <button type="button" className="btn btn-primary" onClick={()=>{
                                            window.location.href="Cursos"
                                        }} ><center> Regresar</center></button>

                                    <button type="button" className="btn btn-success" onClick={()=>{
                                        window.location.href="RegistroBeneficiarios2"
                                    }} ><center> Inscribirse</center></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
    }
    render(){
        return(
            <section className="container" style={{marginTop: '15px'}}>
                <div className="row justify-content-center" >
                    {this._renderItem()}
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
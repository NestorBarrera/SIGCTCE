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
        let {nombrecurso,descri,ponente,sexo,time,datein,datefi,capacity}=this.props.stateCurso;
            return(
        <section className="container">
            <div className="responsive">
                <div className="mb-3" style={{maxWidth: '800px'}}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src="../image/card.jpg" className="card-img" height='300px' width='600px'/>
                        </div>

                        <div className="col-md-8">
                            <div className="card-body">
                            <h1 className="card-title"> {nombrecurso || ""}</h1>
                            <p><strong>Descripcion:</strong> {descri || ""} </p>
                            <p><strong>Ponente:</strong>{ponente || ""} </p>
                            <p><strong>Reseña del Ponente:</strong>{sexo || ""} </p>
                            <p><strong>Horario:</strong>{time || ""} </p>
                            <p className="card-text"><strong>Fecha de inicio:</strong>{datein || ""}</p>
                            <p className="card-text"><strong>Horario de inicio:</strong> {datefi || ""}</p>
                            <p className="card-text"><strong>Capacidad de personas:</strong> {capacity || ""}</p>
                        <div className="btn-group " role="group" >
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
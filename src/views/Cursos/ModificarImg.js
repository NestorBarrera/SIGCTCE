import React,{Component} from 'react';
import {GET_CURSO_ACTION,UPDATE_CURSOS_ACTION} from '../../redux/actions/CursosAction';
import {connect} from 'react-redux';

class ModificarImg extends Component{
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
    handleSubmit() {
        if(this.refs.nombrecurso.value === "" ||
            this.refs.descri.value === "" ||
            this.refs.ponente.value === "" ||
            this.refs.resena.value === "" ||
            this.refs.time.value === "" ||
            this.refs.datein.value === "" ||
            this.refs.datefi.value === "" ||
            this.refs.area.value === "" ||
            this.refs.tipo.value === "" ||
            this.refs.capacity.value === ""

            ){
                this.setState({
                    showAlert: true
                });
            }else{ 
                let id = JSON.parse(localStorage.getItem("cursoId"));
                this.props.updateCursos(
                    id,
                    this.refs.nombrecurso.value,
                    this.refs.descri.value,
                    this.refs.ponente.value,
                    this.refs.resena.value,
                    this.refs.time.value,
                    this.refs.datein.value,
                    this.refs.datefi.value,
                    this.refs.area.value,
                    this.refs.tipo.value,
                    this.refs.capacity.value);
            }
    }

    _renderAlert = () =>{
        if(this.state.showAlert){
            return(
                <div className="alert alert-danger alert-dismissible fade show" role="alert"> 
                    <strong>¡Atención!</strong> Favor de Ingresar todos los datos
                 </div>
            );
        }else{
            return null;
        }
    }

    render(){
        let {nombrecurso,descri,ponente,resena,time,datein,datefi,area,tipo,capacity}=this.props.stateCurso;
        return(
            <section className="container">
                <div className="limiter">
                    <div className="container-login100">
                        <div className="row wrap-login100">
                            <div className="login100-form-title">
                                <span className="login100-form-title-1">Modifica tu Imagen de tú curso o taller</span>
                            </div>

                            <div className="text-center w-100" style={{paddingTop:"15px"}}>
                                <img className="rounded hidalgo" src="image/logo.png" alt="IHJ Logo"/>
                            </div>

                            <div className=" login100-form" noValidate>

                                {this._renderAlert()}

                                <div className="col-12 mb-3">
                                <label htmlFor="img"><strong> Selecciona la  Nueva Imagen:</strong></label><br/>
                                    <input name="img" type="file" onChange={this.handleInputChange}/>
                                    <input type="hidden" name="MAX_FILE_SIZE" defaultValue="3000000"/>
                                </div>

                                <div className="btn-group w-100" role="group" >
                                        <button  className="btn btn-primary" onClick={()=>{
                                            window.location.href="Principal"
                                        }}>Cancelar</button>
                                        <button  className="btn btn-success" onClick={this.handleSubmit.bind(this)}> 
                                        Guardar
                                        </button>
                                </div>
                            </div>
                        </div>
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
        getCurso: (id)=>dispatch(GET_CURSO_ACTION(id)),
        updateCursos:(id,nombrecurso,descri,ponente,resena,time,datein,datefi,area,tipo,capacity)=>dispatch(UPDATE_CURSOS_ACTION(id,nombrecurso,descri,ponente,resena,time,datein,datefi,area,tipo,capacity))
    };
};

const ConnectCursos= connect(mapStateToProps,mapDispatchToProps)(ModificarImg);
export default ConnectCursos;
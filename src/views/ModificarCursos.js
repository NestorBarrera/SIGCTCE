import React,{Component} from 'react';
import {GET_CURSO_ACTION,UPDATE_CURSOS_ACTION} from '../redux/actions/CursosAction';
import {connect} from 'react-redux';

class ModificarCursos extends Component{
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
            this.refs.sexo.value === "" ||
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
                    this.refs.sexo.value,
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
        let {nombrecurso,descri,ponente,sexo,time,datein,datefi,area,tipo,capacity}=this.props.stateCurso;
        return(
            <section className="container">
                <div className="limiter">
                    <div className="container-login100">
                        <div className="row wrap-login100">
                            <div className="login100-form-title">
                                <span className="login100-form-title-1">Registra tú curso o taller</span>
                            </div>

                            <div className="text-center w-100" style={{paddingTop:"15px"}}>
                                <img className="rounded hidalgo" src="image/logo.png" alt="IHJ Logo"/>
                            </div>

                            <div className=" login100-form" noValidate>

                                {this._renderAlert()}

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="nombrecurso">Nombre del curso o taller: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="nombrecurso" ref="nombrecurso" required
                                        placeholder="Nombre aqui ..."
                                        defaultValue={nombrecurso || ""}
                                    />
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="descri">Descripción: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="descri" ref="descri" required
                                        placeholder="Descripción del curso"
                                        defaultValue={descri || ""}
                                    />
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="ponente">Ponente: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="ponente" ref="ponente" required
                                        placeholder="Nombre del ponente"
                                        defaultValue={ponente || ""}
                                    />
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="sexo">Sexo: </label>
                                    
                                        <select className="custom-select" id="sexo" ref="sexo" onChange={this.handleInputChange} required>
                                        <option defaultValue={sexo || ""}>{sexo || ""}</option>
                                        <option defaultValue="Masculino">Masculino</option>
                                        <option defaultValue="Femenino">Femenino</option>
                                        </select>
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="time">Horario: </label>
                                    <input 
                                        type="time" className="form-control" 
                                        id="time" ref="time" required
                                        placeholder="Ingresa horario"
                                        defaultValue={time || ""}
                                    />
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="datein">Fecha de inicio: </label>
                                    <input 
                                        type="date" className="form-control" 
                                        id="datein" ref="datein" required
                                        placeholder="Ingresa la fecha ..."
                                        defaultValue={datein || ""}
                                    />
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="datefi">Fecha de terminación: </label>
                                    <input 
                                        type="date" className="form-control" 
                                        id="datefi" ref="datefi" required
                                        placeholder="Ingresa la fecha ..."
                                        defaultValue={datefi || ""}
                                    />
                                </div>

                                

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="area">Area: </label>
                                    
                                        <select className="custom-select" id="area" ref="area" onChange={this.handleInputChange} required>
                                        <option defaultValue={area || ""}>{area || ""}</option>
                                        <option defaultValue="Salud Juvenil">Salud Juvenil</option>
                                        <option defaultValue="Poder Joven">Poder Joven</option>
                                        <option defaultValue="Emprendedores">Emprendedores</option>
                                        </select>
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="tipo">Tipo: </label>
                                    
                                        <select className="custom-select" id="tipo" ref="tipo" onChange={this.handleInputChange} required>
                                        <option defaultValue={tipo || ""}>{tipo || ""}</option>
                                        <option defaultValue="Curso">Curso</option>
                                        <option defaultValue="Taller">Taller</option>
                                        </select>                                    
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="capacity">Capacidad de personas: </label>
                                    <input 
                                        type="number" className="form-control" 
                                        id="capacity" ref="capacity" required
                                        placeholder="Ingresa la capacidad ..."
                                        defaultValue={capacity || ""}
                                        max="30"
                                        min="15"
                                    />
                                </div>

                                <div className="btn-group w-100" role="group" >
                                        <button  className="btn btn-primary" onClick={()=>{
                                            window.location.href="Principal"
                                        }}>Cancelar</button>
                                        <button  className="btn btn-success" onClick={this.handleSubmit.bind(this)}> 
                                        Registrar
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
        updateCursos:(id,nombrecurso,descri,ponente,sexo,time,datein,datefi,area,tipo,capacity)=>dispatch(UPDATE_CURSOS_ACTION(id,nombrecurso,descri,ponente,sexo,time,datein,datefi,area,tipo,capacity))
    };
};

const ConnectCursos= connect(mapStateToProps,mapDispatchToProps)(ModificarCursos);
export default ConnectCursos;
import React,{Component} from 'react';
import {GET_CURSO_ACTION} from '../redux/actions/CursosAction';
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
  /*  componentWillReceiveProps(nextProps){
        //const ActualProps = this.props;
        const NewProps = nextProps;

        if(NewProps.responseNewCursos.success === "OK"){
            window.location.href = "/principal";
        }
    }*/
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }

    handleSubmit() {
        if(this.state.nombrecurso === undefined ||
            this.state.descri === undefined ||
            this.state.ponente === undefined ||
            this.state.sexo === undefined ||
            this.state.time === undefined ||
            this.state.fechini === undefined ||
            this.state.fechinal === undefined ||
            this.state.area === undefined ||
            this.state.active === undefined ||
            this.state.capacity === undefined

            ){
                this.setState({
                    showAlert: true
                });
            }else{ 
                this.props.addCursos(
                    this.state.nombrecurso,
                    this.state.descri,
                    this.state.ponente,
                    this.state.sexo,
                    this.state.time,
                    this.state.fechini,
                    this.state.fechinal,
                    this.state.area,
                    this.state.active,
                    this.state.capacity);
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
        let {nombrecurso,descri,ponente,sexo,time,fechini,fechinal,area,active,capacity}=this.props.stateCurso;
        let valActive="SI";
        if(active !== undefined && active){
            valActive="SI";
        }else{
            valActive="NO";
        }
        console.log(this.props.stateCurso);
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
                                        id="nombrecurso" name="nombrecurso" required
                                        placeholder="Nombre aqui ..."
                                        defaultValue={nombrecurso || ""}
                                    />
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="descri">Descripción: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="descri" name="descri" required
                                        placeholder="Descripción del curso"
                                        defaultValue={descri || ""}
                                    />
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="ponente">Ponente: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="ponente" name="ponente" required
                                        placeholder="Nombre del ponente"
                                        defaultValue={ponente || ""}
                                    />
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="sexo">Sexo: </label>
                                    
                                        <select className="custom-select" id="sexo" name="sexo" onChange={this.handleInputChange} required>
                                        <option defaultValue={sexo || ""}>{sexo || ""}</option>
                                        <option value="Masculino">Masculino</option>
                                        <option value="Femenino">Femenino</option>
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
                                    <label htmlFor="fechini">Fecha de inicio: </label>
                                    <input 
                                        type="date" className="form-control" 
                                        id="fechini" ref="fechini" required
                                        placeholder="Ingresa la fecha ..."
                                        defaultValue={fechini || ""}
                                    />
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="fechinal">Fecha de terminación: </label>
                                    <input 
                                        type="date" className="form-control" 
                                        id="fechinal" ref="fechinal" required
                                        placeholder="Ingresa la fecha ..."
                                        defaultValue={fechinal || ""}
                                    />
                                </div>

                                

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="area">Area: </label>
                                    
                                        <select className="custom-select" id="area" name="area" onChange={this.handleInputChange} required>
                                        <option defaultValue={area || ""}>{area || ""}</option>
                                        <option value="Salud Juvenil">Salud Juvenil</option>
                                        <option value="Poder Joven">Poder Joven</option>
                                        <option value="Emprendedores">Emprendedores</option>
                                        </select>
                                </div>

                               

                                

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="active">Tipo: </label>
                                    
                                        <select className="custom-select" id="active" name="active" onChange={this.handleInputChange} required>
                                        <option defaultValue={active || ""}>{active || ""}</option>
                                        <option value="Curso">Curso</option>
                                        <option value="Taller">Taller</option>
                                        </select>                                    
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="capacity">Capacidad de personas: </label>
                                    <input 
                                        type="number" className="form-control" 
                                        id="capacity" name="capacity" required
                                        placeholder="Ingresa la capacidad ..."
                                        defaultValue={capacity || ""}
                                        max="30"
                                        min="15"
                                    />
                                </div>

                                <div className="col-12 mt-3">
                                <button  className="btn btn-success login100-form-btn" onClick={this.handleSubmit.bind(this)}> 
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
const mapStateToProps =({stateCurso}) => {
    return{
        stateCurso: stateCurso
    };
}

const mapDispatchToProps=(dispatch)=>{
    return{
        getCurso: (id)=>dispatch(GET_CURSO_ACTION(id))
    };
};

const ConnectCursos= connect(mapStateToProps,mapDispatchToProps)(ModificarCursos);
export default ConnectCursos;
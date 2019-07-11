import React,{Component} from 'react';
import {NEW_CURSOS_ACTION} from '../redux/actions/CursosAction';
import {connect} from 'react-redux';

class RegistroCursos extends Component{

    constructor(props) {
        super(props);
        this.state = {
         showAlert: false
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillReceiveProps(nextProps){
        //const ActualProps = this.props;
        const NewProps = nextProps;

        if(NewProps.responseNewCursos.success === "OK"){
            window.location.href = "/principal";
        }
    }
    
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
            this.state.datein === undefined ||
            this.state.datefi === undefined ||
            this.state.area === undefined ||
            this.state.tipo === undefined ||
            this.state.capacity === undefined

            ){
                this.setState({
                    showAlert: true
                });
            }else{ 
            console.log(this.state);
            
                this.props.addCursos(
                    this.state.nombrecurso,
                    this.state.descri,
                    this.state.ponente,
                    this.state.sexo,
                    this.state.time,
                    this.state.datein,
                    this.state.datefi,
                    this.state.area,
                    this.state.tipo,
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
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa el nombre del curso o taller
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="descri">Descripción: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="descri" name="descri" required
                                        placeholder="Descripción del curso"
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa la descripción
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="ponente">Ponente: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="ponente" name="ponente" required
                                        placeholder="Nombre del ponente"
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa tu nombre
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="sexo">Sexo: </label>
                                    
                                        <select className="custom-select" id="sexo" name="sexo" onChange={this.handleInputChange} required>
                                        <option value="">Selecciona tu sexo</option>
                                        <option value="Masculino">Masculino</option>
                                        <option value="Femenino">Femenino</option>
                                        </select>
                                        <div className="invalid-feedback">Selecciona tu sexo</div>
                                    
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="time">Horario: </label>
                                    <input 
                                        type="time" className="form-control" 
                                        id="time" name="time" required
                                        placeholder="Ingresa horario"
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa el horario
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="fechini">Fecha de inicio: </label>
                                    <input 
                                        type="date" className="form-control" 
                                        id="datein" name="datein" required
                                        placeholder="Ingresa la fecha ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa la fecha de inicio
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="datefi">Fecha de terminación: </label>
                                    <input 
                                        type="date" className="form-control" 
                                        id="datefi" name="datefi" required
                                        placeholder="Ingresa la fecha ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa la fecha de fin
                                    </div>
                                </div>

                                

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="area">Area: </label>
                                    
                                        <select className="custom-select" id="area" name="area" onChange={this.handleInputChange} required>
                                        <option value="">Selecciona una area</option>
                                        <option value="Salud Juvenil">Salud Juvenil</option>
                                        <option value="Poder Joven">Poder Joven</option>
                                        <option value="Emprendedores">Emprendedores</option>
                                        </select>
                                        <div className="invalid-feedback">Selecciona un area</div>
                                    
                                </div>

                               

                                

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="tipo">Tipo: </label>
                                    
                                        <select className="custom-select" id="tipo" name="tipo" onChange={this.handleInputChange} required>
                                        <option value="">Selecciona</option>
                                        <option value="Curso">Curso</option>
                                        <option value="Taller">Taller</option>
                                        </select>
                                        <div className="invalid-feedback">Selecciona</div>
                                    
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="capacity">Capacidad de personas: </label>
                                    <input 
                                        type="number" className="form-control" 
                                        id="capacity" name="capacity" required
                                        placeholder="Ingresa la capacidad ..."
                                        onChange={this.handleInputChange}
                                        max="30"
                                        min="15"
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa la capacidad de personas
                                    </div>
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

const mapStateToProps =({responseNewCursos}) => {
    return{
        responseNewCursos: responseNewCursos
    };
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addCursos: (nombrecurso,descri,ponente,sexo,time,datein,datefi,area,tipo,capacity)=> dispatch(NEW_CURSOS_ACTION(nombrecurso,descri,ponente,sexo,time,datein,datefi,area,tipo,capacity))
    };
};

const ConnectCursos= connect(mapStateToProps,mapDispatchToProps)(RegistroCursos);
export default ConnectCursos;
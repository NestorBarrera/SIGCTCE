import React,{Component} from 'react';
import {NEW_CURSOS_ACTION} from '../../redux/actions/CursosAction';
import {connect} from 'react-redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

class RegistroCursos extends Component{
    constructor(props) {
        super(props);
        this.state = {
         showAlert: false,
         errors:[]
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
        let target = event.target;

        let value = null;
        let name = target.name;

        switch(target.type){
            case "checkbox":
                value =target.checked;
                break;

                case "file":
                    value= target.files[0];
                    break;
            default:
                value= target.value;
                break;
        }
        this.setState({
            [name]: value
        });
    }

    handleSubmit() {
        let err = [];
        let capacity = parseInt(this.state.capacity)
        if(this.state.nombrecurso === undefined ||
            this.state.descri === undefined ||
            this.state.ponente === undefined ||
            this.state.resena === undefined ||
            this.state.time === undefined ||
            this.state.datein === undefined ||
            this.state.datefi === undefined ||
            this.state.area === undefined ||
            this.state.tipo === undefined ||
            this.state.capacity === undefined){
            err.push("Ingresa todos los datos solicitados");
                
            }else{
                if(capacity < 15 || capacity > 33){
                    err.push("Verifica la capacidad de tu curso");
                }
            }
            
            if(err.length !==0){
                this.setState({
                    errors: err,
                    showAlert: true
                })
            }else{ 
                let data = new FormData();
                    data.append('nombrecurso',this.state.nombrecurso);
                    data.append('descri',this.state.descri);
                    data.append('ponente',this.state.ponente);
                    data.append('resena',this.state.resena);
                    data.append('time',this.state.time);
                    data.append('datein',this.state.datein);
                    data.append('datefi',this.state.datefi);
                    data.append('area',this.state.area);
                    data.append('tipo',this.state.tipo);
                    data.append('capacity',this.state.capacity);
                    data.append('img',this.state.img);
                    this.props.addCursos(data);
            }
    }

    _renderAlert = () =>{
        if(this.state.showAlert){
            const MySwal = withReactContent(Swal);

            MySwal.fire({
                type: 'error',
                title: 'Por favor',
                text: "Llena todos los campos por favor"
            });

            this.setState({
                showAlert: false
            });
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
                                    <label htmlFor="resena">Reseña de Ponente: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="resena" name="resena" required
                                        placeholder="Ingresa tu reseña"
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresar su reseña
                                    </div>
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
                                        <option value="Salud Juvenil">Salud Juvenil Realizada</option>
                                        <option value="Jovenes Emprendedores">Jovenes Emprendedores del Estado Beneficiados</option>
                                        <option value="Vinculacion">Vinculación de Jóvenes con Instituciónes Públicas y Privadas Concertadas</option>
                                        <option value="Espacios de Expresión">Espacios de Expresión Artística para la Juventud Aperturados</option>
                                        <option value="Participación Juvenil">Participación Juvenil en Organizaciones Beneficiada</option>
                                        <option value="Servicios de Consulta">Servicios de Consulta en Centros Poder Joven Otorgados</option>
                                        <option value="Programas Televisivos">Programas Televisivos de Expreción Elaborados</option>
                                        <option value="Programas Poder Joven Producidos">Programas Poder Joven Producidos</option>
                                        <option value="Espacios Informativos">Espacios Informativos de Apoyos Gubernamentales para Jóvenes Aperturados</option>
                                        <option value="Jóvenes Emprendedores">Jóvenes Emprendedores en la Casa del Emprendedor Poder Joven Hidalgo Atendidos</option>
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
                                        max="33"
                                        min="15"
                                    />
                                </div>

                                <div className="col-12 mb-3">
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

const mapStateToProps =({responseNewCursos}) => {
    return{
        responseNewCursos: responseNewCursos
    };
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addCursos: (datos)  => dispatch(NEW_CURSOS_ACTION(datos))
    };
};

const ConnectCursos= connect(mapStateToProps,mapDispatchToProps)(RegistroCursos);
export default ConnectCursos;
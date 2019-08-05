import React,{Component} from 'react';
import {GET_USER_ACTION,UPDATE_USER_ACTION} from '../../redux/actions/UsersAction';
import {connect} from 'react-redux';

class ModificarUser extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showAlert: false
        };
    }
    componentDidMount(){
        let id = JSON.parse(localStorage.getItem("userId"));
        this.props.getUser(id);
    }
    componentWillReceiveProps(nextProps){
        const NewProps = nextProps;

        if(NewProps.responseUpdateUser.success === "OK"){
            window.location.href = "/user";
        }
    }
    handleSubmit() {
        if(this.refs.name.value === "" || 
            this.refs.app.value === "" ||
            this.refs.apm.value === "" ||
            this.refs.edad.value === "" ||
            this.refs.sexo.value === "" ||
            this.refs.tel.value === "" ||
            this.refs.email.value === "" ||
            this.refs.password.value === "" ||
            this.refs.area.value === "" ||
            this.refs.level.value === "" ||
            this.refs.active.value === ""
            ){
                this.setState({
                    showAlert: true
                });
        }else { 
            let id = JSON.parse(localStorage.getItem("userId"));
            let active = null;
            if(this.refs.active.value === "SI"){
                active = true;
            } else{
                active = false;
            }
        
            this.props.updateUser(
                id,
                this.refs.name.value,
                this.refs.app.value,
                this.refs.apm.value,
                this.refs.edad.value,
                this.refs.sexo.value,
                this.refs.tel.value,
                this.refs.email.value,
                this.refs.password.value,
                this.refs.area.value,
                this.refs.level.value,
                active
            );
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
        let {name,app,apm,edad,sexo,tel,email,password,area,level,active}=this.props.stateUser;
        let valActive="SI";
        if(active !== undefined && active){
            valActive="SI";
        }else{
            valActive="NO";
        }
        
        return(
            <section className="container">
                <div className="limiter">
                    <div className="container-login100">
                        <div className="row wrap-login100">
                            <div className="login100-form-title">
                                <span className="login100-form-title-1"></span>
                            </div>

                            <div className="text-center  w-100" style={{paddingTop:"15px"}}>
                                <img className="rounded hidalgo" src="Image/Logo.png" alt="IHJ Logo"/>
                            </div>

                            <div className=" login100-form" noValidate>

                                {this._renderAlert()}

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="name">Nombre(s): </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="name" ref="name" required
                                        placeholder="Tu nombre aqui ..."
                                        defaultValue={name || ""}
                                    />
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="app">Apellido Paterno: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="app" ref="app" required
                                        placeholder="Tu apellido aqui ..."
                                        defaultValue={app || ""}
                                    />
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="apm">Apellido Materno: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="apm" ref="apm" required
                                        placeholder="Tu apellido aqui ..."
                                        defaultValue={apm || ""}
                                    />
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="edad">Edad: </label>
                                    <input 
                                        type="number" className="form-control" 
                                        id="edad" ref="edad" required
                                        placeholder="Tu edad aqui ..."
                                        defaultValue={edad || ""}
                                        max="29"
                                        min="18"
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
                                    <label htmlFor="tel">Telefono: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="tel" ref="tel" required
                                        placeholder="Tu telefono aqui ..."
                                        defaultValue={tel || ""}
                                        max="10"
                                        min="10"
                                    />
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="email">Email: </label>
                                    <input 
                                        type="email" className="form-control" 
                                        id="email" ref="email" required
                                        placeholder="Tu email aqui ..."
                                        defaultValue={email || ""}
                                    />
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="password">Contraseña: </label>
                                    <input 
                                        type="password" className="form-control" 
                                        id="password" ref="password" required
                                        placeholder="Tu contraseña aqui ..."
                                        defaultValue={password || ""}
                                        min="8"
                                    />
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="area">Area: </label>
                                        <select className="custom-select" id="area" ref="area" onChange={this.handleInputChange} required>
                                        <option defaultValue={area || ""}>{area || ""}</option>
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
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="level">Nivel: </label>
                                        <select className="custom-select" id="level" ref="level" onChange={this.handleInputChange} required>
                                        <option defaultValue={level || ""}>{level || ""}</option>
                                        <option value="Administrador">Administrador</option>
                                        <option value="Coordinador">Coordinador</option>
                                        </select>
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="active">Activo: </label>
                                        <select className="custom-select" id="active" ref="active" onChange={this.handleInputChange} required>
                                        <option defaultValue={active || ""}>{valActive || ""}</option>
                                        <option value={true}>SI</option>
                                        <option value={false}>NO</option>
                                        </select>
                                </div>

                                <div className="btn-group w-100" role="group" >
                                        <button  className="btn btn-primary" onClick={()=>{
                                            window.location.href="User"
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
const mapStateToProps =({stateUser,responseUpdateUser}) => {
    return{
        stateUser: stateUser,
        responseUpdateUser: responseUpdateUser
    };
}

const mapDispatchToProps=(dispatch)=>{
    return{
        getUser: (id)=>dispatch(GET_USER_ACTION(id)),
        updateUser: (id,name,app,apm,edad,sexo,tel,email,password,area,level,active)=>dispatch(UPDATE_USER_ACTION(id,name,app,apm,edad,sexo,tel,email,password,area,level,active))
    };
};


const ConnectUsers= connect(mapStateToProps,mapDispatchToProps)(ModificarUser);
export default ConnectUsers;
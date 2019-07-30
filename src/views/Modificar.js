import React,{Component} from 'react';
import {NEW_USER_ACTION} from '../redux/actions/UsersAction';
import {connect} from 'react-redux';

class Modificar extends Component{

    constructor(props) {
        super(props);
        this.state = {
            showAlert: false,
            errors:[]
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillReceiveProps(nextProps){
        const NewProps = nextProps;

        if(NewProps.responseNewUser.success === "OK"){
            window.location.href = "/User";
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
        let err = [];
        let edad = parseInt(this.state.edad);
        if(this.state.name ===undefined || 
            this.state.app ===undefined ||
            this.state.apm ===undefined ||
            this.state.edad ===undefined ||
            this.state.sexo ===undefined ||
            this.state.tel ===undefined ||
            this.state.email ===undefined ||
            this.state.password ===undefined ||
            this.state.area ===undefined ||
            this.state.level ===undefined ||
            this.state.active ===undefined){
            err.push("Ingresa todos los datos solicitados");

        }else{
            if(this.state.tel.length !==10){
                err.push("Verifica tu numero de telefono");
            }
    
            if(this.state.password.length !==8){
                err.push("Contraseña minimo de 8 caracteres");
            }
    
            if(edad < 18 || edad>29){
                err.push("Verifica tu edad");
            }
        }
        

        if(err.length !==0){
            this.setState({
                errors: err,
                showAlert: true
            })
        }else { 
            this.props.addUsers(
                this.state.name,
                this.state.app,
                this.state.apm,
                this.state.edad,
                this.state.sexo,
                this.state.tel,
                this.state.email,
                this.state.password,
                this.state.area,
                this.state.level,
                this.state.active);
        } 
    }

    _renderAlert = () =>{
        if(this.state.showAlert){
            return this.state.errors.map((error,index)=>{
                return(
                    <div className="col-12" key={index}>
                        <div className="alert alert-danger alert-dismissible fade show" role="alert"> 
                            <p className="w-100 mb-0">{error}</p>
                        </div>
                    </div>
                );
        })
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
                                        id="name" name="name" required
                                        placeholder="Tu nombre aqui ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa tu nombre
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="app">Apellido Paterno: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="app" name="app" required
                                        placeholder="Tu apellido aqui ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa tu apellido
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="apm">Apellido Materno: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="apm" name="apm" required
                                        placeholder="Tu apellido aqui ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa tu apellido
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="edad">Edad: </label>
                                    <input 
                                        type="number" className="form-control" 
                                        id="edad" name="edad" required
                                        placeholder="Tu edad aqui ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa tu edad
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="sexo">Sexo: </label>
                                        <select className="custom-select" id="sexo" ref="sexo" onChange={this.handleInputChange} required>
                                        <option value="">Selecciona tu sexo</option>
                                        <option value="Masculino">H</option>
                                        <option value="Femenino">M</option>
                                        </select>
                                        <div className="invalid-feedback">Selecciona tu sexo</div>
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="tel">Telefono: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="tel" name="tel" required
                                        placeholder="Tu telefono aqui ..."
                                        onChange={this.handleInputChange}
                                        max="10"
                                        min="10"
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa tu telefono
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="email">Email: </label>
                                    <input 
                                        type="email" className="form-control" 
                                        id="email" name="email" required
                                        placeholder="Tu email aqui ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback" id="msj1">
                                        Por favor ingresa tu email
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="password">Contraseña: </label>
                                    <input 
                                        type="password" className="form-control" 
                                        id="password" name="password" required
                                        placeholder="Tu contraseña aqui ..."
                                        onChange={this.handleInputChange}
                                        min="8"
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa tu contraseña
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="area">Area: </label>
                                        <select className="custom-select" id="area" ref="area" onChange={this.handleInputChange} required>
                                        <option value="">Selecciona una area</option>
                                        <option value="Salud Juvenil">Salud Juvenil</option>
                                        <option value="Poder Joven">Poder Joven</option>
                                        <option value="Emprendedores">Emprendedores</option>
                                        </select>
                                        <div className="invalid-feedback">Selecciona un area</div>
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="level">Nivel: </label>
                                        <select className="custom-select" id="level" ref="level" onChange={this.handleInputChange} required>
                                        <option value="">Selecciona un nivel</option>
                                        <option value="Administrador">Administrador</option>
                                        <option value="Coordinador">Coordinador</option>
                                        </select>
                                        <div className="invalid-feedback">Selecciona un nivel</div>
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="active">Activo: </label>
                                        <select className="custom-select" id="active" ref="active" onChange={this.handleInputChange} required>
                                        <option value="">Selecciona un estatus</option>
                                        <option value={true}>SI</option>
                                        <option value={false}>NO</option>
                                        </select>
                                        <div className="invalid-feedback">Selecciona un estatus</div>
                                </div>
                                <div className="btn-group w-100" role="group" >
                                        <button  className="btn btn-primary" onClick={()=>{
                                            window.location.href="User"
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
const mapStateToProps =({responseNewUser}) => {
    return{
        responseNewUser: responseNewUser
    };
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addUsers: (name,app,apm,edad,sexo,tel,email,password,area,level,active)=> dispatch(NEW_USER_ACTION(name,app,apm,edad,sexo,tel,email,password,area,level,active))
    };
};

const ConnectUsers= connect(mapStateToProps,mapDispatchToProps)(Modificar);
export default ConnectUsers;
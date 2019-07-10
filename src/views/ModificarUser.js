import React,{Component} from 'react';
import {GET_USER_ACTION} from '../redux/actions/UsersAction';
import {connect} from 'react-redux';

class ModificarUser extends Component{

    constructor(props) {
        super(props);
        this.state = {
            showAlert: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount(){
        let id = JSON.parse(localStorage.getItem("userId"));
        this.props.getUser(id);
    }

    /*componentWillReceiveProps(nextProps){
        //const ActualProps = this.props;
        const NewProps = nextProps;

        if(NewProps.responseNewUser.success === "OK"){
            window.location.href = "/User";
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
            this.state.active ===undefined
            ){
                this.setState({
                    showAlert: true
                });
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
        console.log(this.props.stateUser);
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
                                        <select className="custom-select" id="sexo" name="sexo" onChange={this.handleInputChange} required>
                                        <option defaultValue={sexo || ""}>{sexo || ""}</option>
                                        <option value="Masculino">Masculino</option>
                                        <option value="Femenino">Femenino</option>
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
                                        <option value="Salud Juvenil">Salud Juvenil</option>
                                        <option value="Poder Joven">Poder Joven</option>
                                        <option value="Emprendedores">Emprendedores</option>
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
                                        <option defaultValue={active || ""}>{active || ""}</option>
                                        <option value={true}>SI</option>
                                        <option value={false}>NO</option>
                                        </select>
                                </div>

                                <div className="col-12 mt-3">
                                    <button  className="btn btn-success login100-form-btn" onClick={this.handleSubmit.bind(this)}>
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
const mapStateToProps =({stateUser}) => {
    return{
        stateUser: stateUser
    };
}

const mapDispatchToProps=(dispatch)=>{
    return{
        getUser: (id)=>dispatch(GET_USER_ACTION(id))
    };
};


const ConnectUsers= connect(mapStateToProps,mapDispatchToProps)(ModificarUser);
export default ConnectUsers;
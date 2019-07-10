import React,{Component} from 'react';
import {GET_BENE_ACTION} from '../redux/actions/BeneAction';
import {connect} from 'react-redux';


class ModificarBene extends Component{

    constructor(props) {
        super(props);
        this.state = {
            showAlert: false
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    componentDidMount(){
        let id = JSON.parse(localStorage.getItem("beneId"));
        this.props.getBene(id);
    }

   /* componentWillReceiveProps(nextProps){
        //const ActualProps = this.props;
        const NewProps = nextProps;

        if(NewProps.responseNewBene.success === "OK"){
            window.location.href = "/beneficiarios";
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
        if(this.state.nombre ===undefined ||
            this.state.app ===undefined ||
            this.state.apm ===undefined ||
            this.state.date ===undefined ||
            this.state.edad ===undefined ||
            this.state.sexo ===undefined ||
            this.state.curp ===undefined ||
            this.state.tel ===undefined ||
            this.state.email ===undefined
            ){
                this.setState({
                    showAlert: true
                });
        }else{ 
            
            
            this.props.addBene(
                this.state.nombre,
                this.state.app,
                this.state.apm,
                this.state.date,
                this.state.edad,
                this.state.sexo,
                this.state.curp,
                this.state.tel,
                this.state.email);
        }   
    }

    _renderAlert = () =>{
        if(this.state.showAlert){
            return(
                <div className="alert alert-danger alert-dismissible fade show" role="alert"> 
                    <strong>¡Atención!</strong> Ingresa todos los datos
                 </div>
            );
        }else{
            return null;
        }
    }

    render(){
        let {nombre,app,apm,date,edad,sexo,curp,tel,email}=this.props.stateBene;
        let valActive="SI";
       
        console.log(this.props.stateBene);
        return(
            <section className="container">
                <div className="limiter">
                    <div className="container-login100">
                        <div className="row wrap-login100">
                            <div className="login100-form-title">
                                <span className="login100-form-title-1">Registra beneficiarios</span>
                            </div>

                            <div className="text-center w-100" style={{paddingTop:"15px"}}>
                                <img className="rounded hidalgo" src="image/logo.png" alt="IHJ Logo"/>
                            </div>

                            <div className=" login100-form" noValidate>
                                {this._renderAlert()}

                            <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="nombre">Nombre(s): </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="nombre" ref="nombre" required
                                        placeholder="Tu nombre aqui ..."
                                        defaultValue={nombre || ""}
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
                                    <label htmlFor="date">Fecha de nacimiento: </label>
                                    <input 
                                        type="date" className="form-control" 
                                        id="date" ref="date" required
                                        placeholder="Tu fecha aqui ..."
                                        defaultValue={date || ""}
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
                                    <label htmlFor="curp">CURP: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="curp" ref="curp" required
                                        placeholder="Tu email aqui ..."
                                        defaultValue={curp || ""}
                                        maxLength="18"
                                        minLength="18"
                                    />
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

                                <div className="col-12 mt-3">
                                    <button className="btn btn-success login100-form-btn" onClick={this.handleSubmit.bind(this)}>
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
const mapStateToProps =({stateBene}) => {
    return{
        stateBene: stateBene
    };
}

const mapDispatchToProps=(dispatch)=>{
    return{
        getBene: (id)=>dispatch(GET_BENE_ACTION(id))
    };
};

const ConnectBene= connect(mapStateToProps,mapDispatchToProps)(ModificarBene);
export default ConnectBene;
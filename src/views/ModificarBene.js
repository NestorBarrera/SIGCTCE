import React,{Component} from 'react';
import {GET_BENE_ACTION, UPDATE_BENE_ACTION} from '../redux/actions/BeneAction';
import {connect} from 'react-redux';


class ModificarBene extends Component{

    constructor(props) {
        super(props);
        this.state = {
            showAlert: false
        };
    }
    componentDidMount(){
        let id = JSON.parse(localStorage.getItem("beneId"));
        this.props.getBene(id);
    }

    componentWillReceiveProps(nextProps){
        //const ActualProps = this.props;
        const NewProps = nextProps;

        if(NewProps.responseUpdateBene.success === "OK"){
            window.location.href = "/beneficiarios";
        }
    }
    
  /*  handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }*/

    handleSubmit() {
        if(this.refs.nombre.value ==="" ||
            this.refs.app.value ==="" ||
            this.refs.apm.value ==="" ||
            this.refs.date.value ==="" ||
            this.refs.edad.value ==="" ||
            this.refs.sexo.value ==="" ||
            this.refs.curp.value ==="" ||
            this.refs.tel.value ==="" ||
            this.refs.email.value ===""
            ){
                this.setState({
                    showAlert: true
                });
        }else{ 
            let id = JSON.parse(localStorage.getItem("beneId"));
          
            this.props.updateBene(
                this.refs.nombre.value,
                this.refs.app.value,
                this.refs.apm.value,
                this.refs.date.value,
                this.refs.edad.value,
                this.refs.sexo.value,
                this.refs.curp.value,
                this.refs.tel.value,
                this.refs.email.value);
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
                                        <option defaultValue="Masculino">Masculino</option>
                                        <option defaultValue="Femenino">Femenino</option>
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

                                <div className="btn-group w-100" role="group" >
                                        <button  className="btn btn-primary" onClick={()=>{
                                            window.location.href="Beneficiarios"
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
const mapStateToProps =({stateBene,responseUpdateBene}) => {
    return{
        stateBene: stateBene,
        responseUpdateBene:responseUpdateBene
    };
}

const mapDispatchToProps=(dispatch)=>{
    return{
        getBene: (id)=>dispatch(GET_BENE_ACTION(id)),
        updateBene:(id,nombre,app,apm,date,edad,sexo,curp,tel,email)=>dispatch(UPDATE_BENE_ACTION(id,nombre,app,apm,date,edad,sexo,curp,tel,email))
    };
};

const ConnectBene= connect(mapStateToProps,mapDispatchToProps)(ModificarBene);
export default ConnectBene;
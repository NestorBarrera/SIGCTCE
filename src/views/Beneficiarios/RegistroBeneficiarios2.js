import React,{Component} from 'react';
import {NEW_BENE_ACTION} from '../../redux/actions/BeneAction';
import {GET_CURSOS_ACTION} from '../../redux/actions/CursosAction';
import {connect} from 'react-redux';


class RegistroBeneficiarios2 extends Component{
    componentDidMount(){
        this.props.getCursos()
    }
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

        if(NewProps.responseNewBene.success === "OK"){
            window.location.href = "/cursos";
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
        if(this.state.nombre ===undefined ||
            this.state.app ===undefined ||
            this.state.apm ===undefined ||
            this.state.date ===undefined ||
            this.state.edad ===undefined ||
            this.state.sexo ===undefined ||
            this.state.curp ===undefined ||
            this.state.tel ===undefined ||
            this.state.email ===undefined ||
            this.state.curso ===undefined ){
            err.push("Ingresa todos los datos solicitados")
        }else{
            if(this.state.curp.length !== 18)
            err.push("Verifica tu CURP");
        
            if(this.state.tel.length !==10)
            err.push("Verifica tu numero de telefono");
        
            if(edad < 18 || edad > 29)
            err.push("Verifica tu edad");
        }
        
    
        if(err.length !==0){
            this.setState({
                errors: err,
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
                this.state.email,
                this.state.curso);
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
    _renderItem = () =>{
        return this.props.stateCursos.map((row)=>{
            return(
                <option>{row.nombrecurso} </option>
            );
        })
    }
    render(){
       // console.log(this.props.RegistroBeneficiarios2);
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
                                        id="nombre" name="nombre" required
                                        placeholder="Tu nombre aqui ..."
                                        onChange={this.handleInputChange}
                                    />
                                    
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="app">Apellido Paterno: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="app" name="app" required
                                        placeholder="Tu apellido aqui ..."
                                        onChange={this.handleInputChange}
                                    />
                                    
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="apm">Apellido Materno: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="apm" name="apm" required
                                        placeholder="Tu apellido aqui ..."
                                        onChange={this.handleInputChange}
                                    />
                                    
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="date">Fecha de nacimiento: </label>
                                    <input 
                                        type="date" className="form-control" 
                                        id="date" name="date" required
                                        placeholder="Tu fecha aqui ..."
                                        onChange={this.handleInputChange}
                                    />
                                   
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="edad">Edad: </label>
                                    <input 
                                        type="number" className="form-control" 
                                        id="edad" name="edad" required
                                        placeholder="Tu edad aqui ..."
                                        onChange={this.handleInputChange}
                                        max="29"
                                        min="18"
                                    />
                                   
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="sexo">Sexo: </label>
                                    
                                        <select className="custom-select" id="sexo" name="sexo" onChange={this.handleInputChange} required>
                                        <option value="">Selecciona tu sexo</option>
                                        <option value="Masculino">H</option>
                                        <option value="Femenino">M</option>
                                        </select>
                                        <div className="invalid-feedback">Selecciona tu sexo</div>
                                    
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="curp">CURP: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="curp" name="curp" required
                                        placeholder="Tu email aqui ..."
                                        onChange={this.handleInputChange}
                                        
                                    />
                                    
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="tel">Telefono: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="tel" name="tel" required
                                        placeholder="Tu telefono aqui ..."
                                        onChange={this.handleInputChange}
                                        
                                    />
                                    
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="email">Email: </label>
                                    <input 
                                        type="email" className="form-control" 
                                        id="email" name="email" required
                                        placeholder="Tu email aqui ..."
                                        onChange={this.handleInputChange}
                                    />
                                    
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="curso">Seleciona el Curso o Taller: </label>
                                    
                                        <select className="custom-select" id="curso" name="curso" onChange={this.handleInputChange} required>
                                        <option value="">Selecciona </option>
                                        {this._renderItem()}
                                        </select>
                                </div>
                                <div className="btn-group w-100" role="group" >
                                        <button  className="btn btn-primary" onClick={()=>{
                                            window.location.href="Cursos"
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

const mapStateToProps =({responseNewBene,stateCursos}) => {
    return{
        responseNewBene: responseNewBene,
        stateCursos: stateCursos
    };
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addBene: (nombre,app,apm,date,edad,sexo,curp,tel,email,curso)=> dispatch(NEW_BENE_ACTION(nombre,app,apm,date,edad,sexo,curp,tel,email,curso)),
        getCursos: ()=>dispatch(GET_CURSOS_ACTION())
    };
};

const ConnectBene2= connect(mapStateToProps,mapDispatchToProps)(RegistroBeneficiarios2);
export default ConnectBene2;
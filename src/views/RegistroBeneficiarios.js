import React,{Component} from 'react';
import {municipios,hidalgo} from '../components/data/data';


class RegistroBeneficiarios extends Component{

    constructor(props) {
        super(props);
        this.state = {
          zips:[],
          colonias:[]
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillReceiveProps(nextProps){
        //const ActualProps = this.props;
        const NewProps = nextProps;

        if(NewProps.responseNewUser.success === "OK"){
            window.location.href = "/";
        }
    }
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(name + ": ",value);

        if(name === "municipio"){
            var zips = [];
            var newZips = [];
            hidalgo.map((item,index) => {
                if(item.nombre === value){
                    zips.push(item.cp); 
                }
            })
            newZips = zips.filter(function(item, index, array) {
                return array.indexOf(item) === index;
            })

            this.setState({
                zips: [...newZips]
            });
            
        } else if(name === "cp"){
            var newCols = [];
            hidalgo.map((item,index) => {
                if(item.cp === value){
                    newCols.push(item.asentamiento);
                }
            })

            this.setState({
                colonias: [...newCols]
            });
        }
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit() {
        console.log(this.state);
        
        this.props.sendUser(
            this.state.nombre,
            this.state.app,
            this.state.apm,
            this.state.edad,
            this.state.sexo,
            this.state.telefono,
            this.state.municipio,
            this.state.cp,
            this.state.colonia,
            this.state.calle,
            this.state.numExt,
            this.state.email,
            this.state.password,
            this.state.area,
            this.state.level,
            this.state.active);
            
    }

    render(){
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

                            <form className="needs-validation login100-form" noValidate>

                            <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="nombre">Nombre(s): </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="nombre" name="nombre" required
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
                                    <label htmlFor="date">Fecha de nacimiento: </label>
                                    <input 
                                        type="date" className="form-control" 
                                        id="date" name="date" required
                                        placeholder="Tu fecha aqui ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa tu fecha de naciemento
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="number">Edad: </label>
                                    <input 
                                        type="number" className="form-control" 
                                        id="number" name="number" required
                                        placeholder="Tu edad aqui ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa tu edad
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
                                    <label htmlFor="text">CURP: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="text" name="text" required
                                        placeholder="Tu email aqui ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa tu CURP
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="telefono">Telefono: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="telefono" name="telefono" required
                                        placeholder="Tu telefono aqui ..."
                                        onChange={this.handleInputChange}
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
                                    <div className="invalid-feedback">
                                        Por favor ingresa tu email
                                    </div>
                                </div>

                                <div className="col-12 mt-3">
                                    <button type="submit" className="btn btn-success login100-form-btn">
                                        Registrar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}



export default RegistroBeneficiarios;
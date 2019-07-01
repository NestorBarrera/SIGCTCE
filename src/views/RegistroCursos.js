import React,{Component} from 'react';
import {municipios,hidalgo} from '../components/data/data';


class RegistroCursos extends Component{

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
                                <span className="login100-form-title-1">Registra tú curso o taller</span>
                            </div>

                            <div className="text-center w-100" style={{paddingTop:"15px"}}>
                                <img className="rounded hidalgo" src="image/logo.png" alt="IHJ Logo"/>
                            </div>

                            <form className="needs-validation login100-form" noValidate>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="nombrecurso">Nombre del curso: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="nombrecurso" name="nombrecurso" required
                                        placeholder="Nombre aqui ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa el nombre del curso
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
                                        Por favor ingresa la descripción del curso
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
                                    <label htmlFor="date">Fecha de inicio: </label>
                                    <input 
                                        type="date" className="form-control" 
                                        id="date" name="date" required
                                        placeholder="Ingresa la fecha ..."
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa la fecha de inicio
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="date">Fecha de terminación: </label>
                                    <input 
                                        type="date" className="form-control" 
                                        id="date" name="date" required
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
                                    <label htmlFor="active">Tipo: </label>
                                    
                                        <select className="custom-select" id="active" name="active" onChange={this.handleInputChange} required>
                                        <option value="">Selecciona</option>
                                        <option value={true}>Curso</option>
                                        <option value={false}>Taller</option>
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
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa la capacidad de personas
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



export default RegistroCursos;
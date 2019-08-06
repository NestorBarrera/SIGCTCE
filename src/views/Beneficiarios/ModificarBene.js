import React,{Component} from 'react';
import {GET_BENE_ACTION, UPDATE_BENE_ACTION} from '../../redux/actions/BeneAction';
import {connect} from 'react-redux';
import {entidades} from '../../components/data/estados';
import {municipios, hidalgo} from '../../components/data/data';
import {GET_CURSOS_ACTION} from '../../redux/actions/CursosAction';

class ModificarBene extends Component{

    constructor(props) {
        super(props);
        this.state = {
            showAlert: false,
            zips:[],
            colonias:[],
            errors:[]
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    componentDidMount(){
        let id = JSON.parse(localStorage.getItem("beneId"));
        this.props.getBene(id);
        this.props.getCursos();
    }

    componentWillReceiveProps(nextProps){
        const NewProps = nextProps;
        if(NewProps.responseUpdateBene.success === "OK"){
            window.location.href = "/beneficiarios";
        }
    }
    _validatecurp = () => {
        const consonantes = ["B","C","D","F","G","H","J","K","L","M","N","Ñ","P","Q","R","S","T","V","W","X","Y","Z"];
        const vocales = ["A","E","I","O","U"];

        if(this.state.fechaNac  !== undefined &&
             this.state.sexo !== undefined && 
            this.state.entidad !== undefined &&
            this.state.nombre !== undefined && 
            this.state.app !== undefined &&
            this.state.apm !== undefined ){

                let nombre = this.state.nombre.toUpperCase();
                let app = this.state.app.toUpperCase();
                let apm = this.state.apm.toUpperCase();
                let fecha= this.state.fechaNac.split("-");
                let anio = fecha[0].slice(2);
                let mes = fecha[1];
                let dia = fecha[2];
                let consonanteSeleccionada = false, vocalSeleccionada = false;
                let pp = "", pm = "", nom = "", pp2 = "", pm2 = "", nom2 = "",  contadorConsonantes = 0;

                pp = app.charAt(0);
                if(vocales.includes(app.charAt(0))){
                    for(let i=1;i<app.length;i++){
                        let c = app.charAt(i);
                        if(!vocalSeleccionada){
                            if(vocales.includes(c)){
                                pp += c;
                                vocalSeleccionada = true;
                            }
                        }
                    }
                } else{
                    for(let i=0;i<app.length;i++){
                        let c = app.charAt(i);
                        if(!vocalSeleccionada){
                            if(vocales.includes(c)){
                                pp += c;
                                vocalSeleccionada = true;
                                break;
                            } 
                        }
                    }
                }

                pm = apm.charAt(0);
                nom = nombre.charAt(0);

                consonanteSeleccionada = false;
                vocalSeleccionada = false;

                if(vocales.includes(app.charAt(0))){
                    for(let i=1;i<app.length;i++){
                        let c = app.charAt(i);
                        if(!consonanteSeleccionada){
                            if(consonantes.includes(c)){
                                if(c === "Ñ"){
                                    pp2 = "X";
                                    consonanteSeleccionada = true;
                                } else {
                                    pp2 = c;
                                    consonanteSeleccionada = true;
                                }
                            } 
                        }
                    }
                }else{
                    for(let i=1;i<app.length;i++){
                        let c = app.charAt(i);
                        if(!consonanteSeleccionada){
                            if(consonantes.includes(c)){
                                if(c === "Ñ"){
                                    pp2 = "X";
                                    consonanteSeleccionada = true;
                                } else {
                                    pp2 = c;
                                    consonanteSeleccionada = true;
                                }
                            } 
                        }
                    }
                }

                consonanteSeleccionada = false;

               
                if(vocales.includes(nombre.charAt(0))){
                    for(let i=1;i<nombre.length;i++){
                        let c = nombre.charAt(i);
                        if(!consonanteSeleccionada){
                            if(consonantes.includes(c)){
                                if(c === "Ñ"){
                                    nom2 = "X";
                                    consonanteSeleccionada = true;
                                } else {
                                    nom2 = c;
                                    consonanteSeleccionada = true;
                                }
                            }
                        }
                    }
                } else{
                    for(let i=1;i<nombre.length;i++){
                        let c = nombre.charAt(i);
                        if(!consonanteSeleccionada){
                            if(consonantes.includes(c)){
                                if(c === "Ñ"){
                                    nom2 = "X";
                                    consonanteSeleccionada = true;
                                } else {
                                    nom2 = c;
                                    consonanteSeleccionada = true;
                                } 
                            } 
                        }
                    }
                }

                console.log(pp + pm + nom + anio + mes + dia + this.state.sexo + this.state.entidad + pp2 + pm2 + nom2);
        }

        
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
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
        }else if(name === "cp"){
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
        let err = [];
        let edad = parseInt(this.state.edad);
        if(this.refs.nombre.value ==="" ||
            this.refs.app.value ==="" ||
            this.refs.apm.value ==="" ||
            this.refs.fechaNac.value ==="" ||
            this.refs.edad.value ==="" ||
            this.refs.sexo.value ==="" ||
            this.refs.curp.value ==="" ||
            this.refs.telefono.value ==="" ||
            this.refs.email.value ==="" ||
            this.refs.entidad.value ==="" ||
            this.refs.municipio.value ==="" ||
            this.refs.cp.value ==="" ||
            this.refs.colonia.value ==="" ||
            this.refs.calle.value ==="" ||
            this.refs.curso.value ===""){
            err.push("Ingresa todos los datos solicitados"); 
        }else{
            if(this.state.curp.length !==18)
                err.push("Verifica tu CURP");
            
            if(this.state.telefono.length !==10)
                err.push("Verifica tu numero de telefono");
            
            if(edad < 18 || edad>29)
                err.push("Verifica tu edad");
        }
        
        if(err.length !==0){
            this.setState({
                errors: err,
                showAlert: true
            });
        }else{ 
            let id = JSON.parse(localStorage.getItem("beneId"));
            this.props.updateBene(
                id,
                this.refs.nombre.value,
                this.refs.app.value,
                this.refs.apm.value,
                this.refs.fechaNac.value,
                this.refs.edad.value,
                this.refs.sexo.value,
                this.refs.curp.value,
                this.refs.telefono.value,
                this.refs.email.value,
                this.refs.entidad.value,
                this.refs.municipio.value,
                this.refs.cp.value,
                this.refs.colonia.value,
                this.refs.calle.value,
                this.refs.curso.value);
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
        let {nombre,app,apm,fechaNac,edad,sexo,curp,telefono,email,entidad,municipio,cp,colonia,calle,curso}=this.props.stateBene;
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
                                    <label htmlFor="fechaNac">Fecha de nacimiento: </label>
                                    <input 
                                        type="date" className="form-control" 
                                        id="fechaNac" ref="fechaNac" required
                                        placeholder="Tu fecha aqui ..."
                                        defaultValue={fechaNac || ""}
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
                                        <option defaultValue="H">Masculino</option>
                                        <option defaultValue="M">Femenino</option>
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
                                    <label htmlFor="telefono">Telefono: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="telefono" ref="telefono" required
                                        placeholder="Tu telefono aqui ..."
                                        defaultValue={telefono || ""}
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
                                    <label htmlFor="entidad">Estado de Nacimiento: </label>
                                        <select className="custom-select" id="entidad" name="entidad" onChange={this.handleInputChange} required>
                                        <option defaultValue={entidad || ""}>{entidad || ""}</option>
                                            {entidades.map((item,index) => {
                                                return(<option value={item.clave} key={index}>{item.nombre}</option>);
                                            })}
                                        </select>
                                        <div className="invalid-feedback">Selecciona una entidad</div>
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="municipio">Municipio: </label>
                                        <select className="custom-select" id="municipio" name="municipio" onChange={this.handleInputChange} required>
                                        <option defaultValue={municipio || ""}>{municipio || ""}</option>
                                            {municipios.map((item,index) => {
                                                return(<option value={item.name} key={index}>{item.name}</option>);
                                            })}
                                        </select>
                                        <div className="invalid-feedback">Selecciona un municipio</div>
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="cp">Codigo Postal: </label>
                                        <select className="custom-select" id="cp" name="cp" onChange={this.handleInputChange} required>
                                        <option defaultValue={cp || ""}>{cp || ""}</option>
                                            {this.state.zips.map((item,index) => {
                                                return(<option value={item} key={index}>{item}</option>);
                                            })}
                                        </select>
                                        <div className="invalid-feedback">Selecciona un codigo postal</div>
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="colonia">Colonia: </label>
                                        <select className="custom-select" id="colonia" name="colonia" onChange={this.handleInputChange} required>
                                        <option defaultValue={colonia || ""}>{colonia || ""}</option>
                                            {this.state.colonias.map((item,index) => {
                                                return(<option value={item} key={index}>{item}</option>);
                                            })}
                                        </select>
                                        <div className="invalid-feedback">Selecciona un colonia</div>
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="calle">Calle: </label>
                                    <input 
                                        type="text" className="form-control" 
                                        id="calle" name="calle" required
                                        placeholder="Tu calle aqui ..."
                                        defaultValue={calle || ""}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa tu calle
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="curso">Seleciona el Curso o Taller: </label>
                                    
                                        <select className="custom-select" id="curso" name="curso" onChange={this.handleInputChange} required>
                                        <option defaultValue={curso || ""}>{curso || ""}</option>
                                        {this._renderItem()}
                                        </select>
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
const mapStateToProps =({stateBene,responseUpdateBene,stateCursos}) => {
    return{
        stateBene: stateBene,
        responseUpdateBene:responseUpdateBene,
        stateCursos: stateCursos
    };
}

const mapDispatchToProps=(dispatch)=>{
    return{
        getBene: (id)=>dispatch(GET_BENE_ACTION(id)),
        getCursos: ()=>dispatch(GET_CURSOS_ACTION()),
        updateBene:(id,nombre,app,apm,fechaNac,edad,sexo,curp,telefono,email,entidad,municipio,cp,colonia,calle,curso)=>dispatch(UPDATE_BENE_ACTION(id,nombre,app,apm,fechaNac,edad,sexo,curp,telefono,email,entidad,municipio,cp,colonia,calle,curso))
    };
};

const ConnectBene= connect(mapStateToProps,mapDispatchToProps)(ModificarBene);
export default ConnectBene;
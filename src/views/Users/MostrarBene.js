import React, {Component} from 'react';
import { connect} from 'react-redux';
import {GET_BENES_ACTION, DELETE_BENE_ACTION} from '../../redux/actions/BeneAction';


class MostrarBene extends Component {
    componentDidMount(){
        this.props.getBenes()
    }

    componentWillReceiveProps(nextProps){
        const NewProps = nextProps;
        if(NewProps.responseDeleteBene.success === "OK"){
            this.props.getBenes();
        }
    }

    _renderItem = () =>{
        return this.props.stateBenes.map((row,index)=>{
            return(
                <tr key={index}>
                    <td>{row.nombre}</td>
                    <td>{row.app} {row.apm}</td>
                    <td>{row.date}</td>
                    <td>{row.edad}</td>
                    <td> {row.curp} </td>
                    <td> {row.tel} </td>
                    <td> {row.email} </td>
                    <td>
                    <button className="btn btn-warning icon-pencil" onClick={()=>{
                            let beneId=[];
                            beneId.push(row._id);
                            localStorage.setItem("beneId", JSON.stringify(beneId));
                            window.location.href="ModificarBene";
                        }
                    }>Modificar</button>
                    </td>
                    <td>
                    <button className="btn btn-danger icon-bin" onClick={this.props.deleteBene.bind(this,row._id)}>Eliminar</button>
                    </td>
                     
                </tr>
            );
        })
    }

    render() {
        return (

<div className="container" style={{marginTop:30}}>
    <div className="row justify-content-center" > 
         <div className="btn-group" role="group">
            <a href="PrincipalUser" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Cursos y Talleres</a>
        </div>  
    </div>
                <hr className="red small-margin"/><br/><h1><strong>Beneficiarios</strong> </h1>
     
<div className="input-group-append" style={{textAlign:"right"}}>
    <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true">Selecciona el Taller</button>
    <div className="dropdown-menu">
      <a className="dropdown-item" href="#">Curso Señas</a>
      <a className="dropdown-item" href="#">Curso de Ingles</a>
      <a className="dropdown-item" href="#">Taller de Arduino</a>
      <a className="dropdown-item" href="#">Taller de Fotografia</a>
    </div>
  </div>
  
            <div className="row justify-content-start">
                <div className="col-12 col-md-7">
                <table className="table table-responsive-hover">
                <thead  className="thead-dark">
                    <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellidos</th>
                    <th scope="col">Fecha de Nacimiento</th>
                    <th scope="col">Edad</th>
                    <th scope="col">Curp</th>
                    <th scope="col">Telefono</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Editar</th>
                    <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {this._renderItem()}
                </tbody>
               
                </table>
                </div>

            </div>
            
    </div>

        );
     }
    }
    const mapStateToProps =({stateBenes, responseDeleteBene})=>{
        return{
            stateBenes: stateBenes,
            responseDeleteBene: responseDeleteBene,
        };
    }
    
    const mapDispatchToProps=(dispatch)=>{
        return{
            getBenes: ()=>dispatch(GET_BENES_ACTION()),
            deleteBene:(id)=>dispatch(DELETE_BENE_ACTION(id))
        };
    };
    const ConnectBene= connect(mapStateToProps,mapDispatchToProps)(MostrarBene);
    export default ConnectBene;

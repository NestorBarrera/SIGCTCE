import React, {Component} from 'react';
import { connect} from 'react-redux';
import {GET_BENES_ACTION, DELETE_BENE_ACTION} from '../../redux/actions/BeneAction';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


class Beneficiarios extends Component {
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
                    <td>{row.fechaNac}</td>
                    <td>{row.edad}</td>
                    <td> {row.curp} </td>
                    <td> {row.telefono} </td>
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
                    <button className="btn btn-danger icon-bin" onClick={this.props.deleteBene.bind(this,row._id)}
                    >Eliminar</button>
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
            <a href="Principal" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Cursos y Talleres</a>
            <a href="User" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Usuarios</a>
        </div>  
    </div>
    <div  style={{textAlign:"right"}}>
         <a href="RegistroBeneficiarios" className="btn btn-light icon-user-plus" role="button" style={{fontSize:"25px"}}>Agregar</a>
     </div>

                <hr className="red small-margin"/><br/><h1><strong>Beneficiarios</strong> </h1><br/><br/>

            <div className="row justify-content-center">
                <div className="col-12 col-md-12">
                <table className="table table-hover">
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
    const ConnectBene= connect(mapStateToProps,mapDispatchToProps)(Beneficiarios);
    export default ConnectBene;

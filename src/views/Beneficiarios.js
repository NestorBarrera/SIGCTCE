import React, {Component} from 'react';
import { connect} from 'react-redux';
import {GET_BENE_ACTION, DELETE_BENE_ACTION} from '../redux/actions/BeneAction';


class Beneficiarios extends Component {
    componentDidMount(){
        this.props.getBene()
    }

    componentWillReceiveProps(nextProps){
        const NewProps = nextProps;
        if(NewProps.responseDeleteBene.success === "OK"){
            this.props.getBene();
        }
    }

    _renderItem = () =>{
        return this.props.stateBene.map((row,index)=>{
            return(
                <tr key={index}>
                    <td>{row.nombre}</td>
                    <td>{row.app} {row.apm}</td>
                    <td>{row.fecha}</td>
                    <td>{row.edad}</td>
                    <td> {row.curp} </td>
                    <td> {row.tel} </td>
                    <td> {row.email} </td>
                    <td>
                    <button className="btn btn-warning">Modificar</button>
                    </td>
                    <td>
                    <button className="btn btn-danger icon-bin" onClick={this.props.deleteBene.bind(this,row._id)}>Eliminar</button>
                    </td>
                     
                </tr>
            );
        })
    }

    render() {
    console.log(this.props.stateBene);
        return (

<div className="container" style={{marginTop:30}}>

    <div className="row justify-content-end">
        <div className="col-4">
            <a href="Principal" className="icon-circle-left" style={{fontSize:"25px"}}>Regresar </a>
        </div>
    </div>
    <div className="col-4">
            <a href="#" className="icon-users" style={{fontSize:"25px"}}> 2</a>
        </div>

                <hr className="red small-margin"/><br/><br/><br/>

            <div className="row justify-content-start">
                <div className="col-12 col-md-7">
                <table className="table table-hover">
                <thead>
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
            <a href=""> <span className="badge badge-pill badge-success icon-download" style={{fontSize:"18px"}}>PDF</span> </a>
  
            
    </div>

        );
     }
    }
    const mapStateToProps =({stateBene, responseDeleteBene})=>{
        return{
            stateBene: stateBene,
            responseDeleteBene: responseDeleteBene,
        };
    }
    
    const mapDispatchToProps=(dispatch)=>{
        return{
            getBene: ()=>dispatch(GET_BENE_ACTION()),
            deleteBene:(id)=>dispatch(DELETE_BENE_ACTION(id))
        };
    };
    const ConnectBene= connect(mapStateToProps,mapDispatchToProps)(Beneficiarios);
    export default ConnectBene;

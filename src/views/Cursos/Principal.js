import React, {Component} from 'react';
import { connect} from 'react-redux';
import {GET_CURSOS_ACTION, DELETE_CURSOS_ACTION} from '../../redux/actions/CursosAction';

class Principal extends Component {
    componentDidMount(){
        this.props.getCursos()
    }
    componentWillReceiveProps(nextProps){
        const NewProps = nextProps;
            if(NewProps.responseDeleteCursos.success === "OK"){
                this.props.getCursos();
            }
    }    
    _renderItem = () =>{
        return this.props.stateCursos.map((row,index)=>{
            return(
                <tr key={index}>
                    <td>{row.nombrecurso}</td>
                    <td>{row.descri}</td>
                    <td>{row.ponente}</td>
                    <td>{row.datein}</td>
                    <td>{row.datefi}</td>
                    <td> {row.area} </td>
                    <td> {row.capacity} </td>
                    <td>
                    <button className="btn btn-warning fas fa-user-edit" onClick={()=>{
                            let cursoId=[];
                            cursoId.push(row._id);
                            localStorage.setItem("cursoId", JSON.stringify(cursoId));
                            window.location.href="ModificarCursos";
                        }
                    }>Modificar</button>
                    </td>
                    <td>
                    <button className="btn btn-danger fas fa-trash-alt" onClick={this.props.deleteCursos.bind(this,row._id)}>Eliminar</button>
                    </td>
                    <td>
                    <button className="btn btn-success fas fa-edit" onClick={()=>{
                            let cursoId=[];
                            cursoId.push(row._id);
                            localStorage.setItem("cursoId", JSON.stringify(cursoId));
                            window.location.href="ModificarImg";
                        }
                    }>Modificar</button>
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
                        <a href="User" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Usuarios</a>
                        <a href="Beneficiarios" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Beneficiarios</a>
                    </div> 
                </div>
                <div  style={{textAlign:"right"}}>
                    <a href="RegistroCursos" className="btn btn-light fas fa-user-plus" role="button" style={{fontSize:"25px"}}>Agregar</a>
                </div>
                <hr className="red small-margin"/><br/><h1><strong>Cursos y Talleres</strong> </h1><br/><br/>
            
                        <div className="row justify-content-center">
                                <table className="table table-responsive-hover">
                                    <thead className="thead-dark">
                                        <tr>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Descripción</th>
                                        <th scope="col">Ponente</th>
                                        <th scope="col">Fecha Inicio</th>
                                        <th scope="col">Fecha Termino</th>
                                        <th scope="col">Área</th>
                                        <th scope="col">Capacidad</th>
                                        <th scope="col">Modificar</th>
                                        <th scope="col">Eliminar</th>
                                        <th scope="col">Modificar Imagen</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {this._renderItem()}
                                    </tbody>
                                </table>
                        </div>
            </div>
        );
    }
}
    const mapStateToProps =({stateCursos,responseDeleteCursos})=>{
        return{
            stateCursos: stateCursos,
            responseDeleteCursos: responseDeleteCursos,
        };
    }
    
    const mapDispatchToProps=(dispatch)=>{
        return{
            getCursos: ()=>dispatch(GET_CURSOS_ACTION()),
            deleteCursos:(id)=>dispatch(DELETE_CURSOS_ACTION(id))
        };
    };
    const ConnectCursos= connect(mapStateToProps,mapDispatchToProps)(Principal);
    export default ConnectCursos;
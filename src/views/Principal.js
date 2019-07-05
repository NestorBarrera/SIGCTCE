import React, {Component} from 'react';
import { connect} from 'react-redux';
import {GET_CURSOS_ACTION, DELETE_CURSOS_ACTION} from '../redux/actions/CursosAction';

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
                        <a href="#" className="badge badge-primary icon-eye">Ver</a>
                    </td>
                    <td>
                    <button className="btn btn-warning">Modificar</button>
                    </td>
                    <td>
                    <button className="btn btn-danger" onClick={this.props.deleteCursos.bind(this,row._id)}>Eliminar</button>
                    </td>
                     
                </tr>
            );
        })
    }

    render() {
        console.log(this.props.stateCursos);
        return (

<div className="container" style={{marginTop:30}}>
    <div className="row justify-content-center" >    
            <div className="">
                <nav className="menu">
                    <ul>
                        <li><a href="#">Talleres</a></li>
                        <li><a href="#">Cursos</a></li>
                        <li><a href="#">Usuarios</a></li>
                    </ul>
                </nav>
            </div> 
            <div className="row justify-content-end">
            <div class="col-4">
            <a href="RegistroCursos" className="icon-user-plus" style={{fontSize:"25px"}}>Agregar</a>
            </div>
         </div> 
        </div>
        

                <hr class="red small-margin"/><br/><br/><br/>

            <div className="row justify-content-center">
                <div className="">
                <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Ponente</th>
                    <th scope="col">Fecha Inicio</th>
                    <th scope="col">Fecha Termino</th>
                    <th scope="col">Área</th>
                    <th scope="col">Capacidad</th>
                    <th scope="col">Ver</th>
                    <th scope="col">Modificar</th>
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
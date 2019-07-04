import React, {Component} from 'react';
import { connect} from 'react-redux';
import {GET_USER_ACTION, DELETE_USER_ACTION} from '../redux/actions/UsersAction';

class User extends Component {

    componentDidMount(){
        this.props.getUsers();
    }

    componentWillReceiveProps(nextProps){
        const NewProps = nextProps;
        if(NewProps.responseDeleteUser.success === "OK"){
            this.props.getUsers();
        }
    }

    _renderItem = () =>{
        return this.props.stateUsers.map((row,index)=>{
            return(
                <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.app} {row.apm}</td>
                    <td>{row.email}</td>
                    <td>{row.password}</td> 
                    <td>{row.area}</td>
                    <td>{row.level}</td>
                    <td>
                    <button className="btn btn-warning icon-pencil">Modificar</button>
                    </td>
                    <td>
                    <button className="btn btn-danger" onClick={this.props.deleteUser.bind(this,row._id)}>Eliminar</button>
                    </td>  
                </tr>
            );
        })
    }

    render() {
        console.log(this.props.stateUsers);
        return (

            <div className="container" style={{marginTop:30}}>
                <div className="row justify-content-center" >    
                        <div className="">
                            <nav className="menu">
                                <ul>
                                    <li><a href="#">Talleres</a></li>
                                    <li><a href="#">Cursos</a></li>
                                    <li><a href="#">Usuarios</a></li>
                                    <li><a href="#">Beneficiarios</a></li>
                                </ul>
                            </nav>
                        </div>       
                </div>
    
                <div  style={{textAlign:"right"}}>
                    <a href="Modificar" className="icon-user-plus" style={{fontSize:"25px"}}>Agregar</a>
                </div>
      
                <hr className="red small-margin"/><br/><br/><br/>

           
                <div className="row justify-content-start">
                    <div className="col-12 col-md-7">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellidos</th>
                                <th scope="col">Email</th>
                                <th >Password</th>
                                <th scope="col">Area</th>
                                <th scope="col">Nivel</th>
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
   

    const mapStateToProps =({stateUsers, responseDeleteUser}) => {
        return{
            stateUsers: stateUsers,
            responseDeleteUser: responseDeleteUser,
        };
    }
    
    const mapDispatchToProps=(dispatch)=>{
        return{
            getUsers: ()=>dispatch(GET_USER_ACTION()),
            deleteUser:(id)=>dispatch(DELETE_USER_ACTION(id))
        };
    };
    
   

    const ConnectUsers= connect(mapStateToProps,mapDispatchToProps)(User);
    export default ConnectUsers;
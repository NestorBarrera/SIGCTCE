import React, {Component} from 'react';
import { connect} from 'react-redux';
import {GET_USERS_ACTION, DELETE_USER_ACTION} from '../redux/actions/UsersAction';

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
                    <button className="btn btn-warning icon-pencil" onClick={()=>{
                            let userId=[];
                            userId.push(row._id);
                            localStorage.setItem("userId", JSON.stringify(userId));
                            window.location.href="ModificarUser";
                        }
                    }>Modificar</button>
                    </td>
                    <td>
                    <button className="btn btn-danger icon-bin" onClick={this.props.deleteUser.bind(this,row._id)}>Eliminar</button>
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
                     <a href="Principal" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Curos y Talleres</a>
                     <a href="Beneficiarios" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Beneficiarios</a>
                    </div>     
                </div>
    
                <div  style={{textAlign:"right"}}>
                    <a href="Modificar" className="btn btn-light icon-user-plus" role="button" style={{fontSize:"25px"}}>Agregar</a>
                </div>
      
                <hr className="red small-margin"/><br/><h1><strong>Usuarios</strong> </h1><br/><br/>

           
                <div className="row justify-content-start">
                    <div className="col-12 col-md-7">
                        <table className="table table-hover">
                            <thead  className="thead-dark">
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
            getUsers: ()=>dispatch(GET_USERS_ACTION()),
            deleteUser:(id)=>dispatch(DELETE_USER_ACTION(id))
        };
    };
    
   

    const ConnectUsers= connect(mapStateToProps,mapDispatchToProps)(User);
    export default ConnectUsers;
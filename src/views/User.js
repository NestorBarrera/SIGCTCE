import React, {Component} from 'react';
class User extends Component {
    render() {
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
            <a href="#" className="icon-user-plus" style={{fontSize:"25px"}}>Agregar</a>
            </div>
      
                <hr className="red small-margin"/><br/><br/><br/>

           
                <div className="row justify-content-start">
                <div className="col-12 col-md-7">
                <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">NO.</th>
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
                    <tr>
                    <th scope="row">1</th>
                    <td>Alejandra</td>
                    <td>García Fernández</td>
                    <td>Fer@gmail.com</td>
                    <td>Gar8976</td>
                    <td>Poder Joven</td>
                    <td>Coordinador</td>
                    <td>
                    <a href="#" className="badge badge-warning icon-pencil">Modificar</a>
                    </td>
                    <td>
                    <a href="#" className="badge badge-danger icon-bin">Eliminar</a>
                    </td>
                    </tr>

                    <tr>
                    <th scope="row">2</th>
                    <td>Fernando</td>
                    <td>Pérez Gutiérrez</td>
                    <td>Fer89@gmail.com</td>
                    <td>Gat894566</td>
                    <td>Poder Juvenil</td>
                    <td>Coordinador</td>
                    <td>
                    <a href="#" className="badge badge-warning icon-pencil">Modificar</a>
                    </td>
                    <td>
                    <a href="#" className="badge badge-danger icon-bin">Eliminar</a>
                    </td>
                    </tr>

                    <tr>
                    <th scope="row">3</th>
                    <td>Beatriz</td>
                    <td>García García</td>
                    <td>Garcia@gmail.com</td>
                    <td>Beati9438</td>
                    <td>Emprendedores</td>
                    <td>Administrador</td>
                    <td>
                    <a href="#" className="badge badge-warning icon-pencil">Modificar</a>
                    </td>
                    <td>
                    <a href="#" className="badge badge-danger icon-bin">Eliminar</a>
                    </td>
                    </tr>                    


                    <tr>
                    <th scope="row">4</th>
                    <td>Guillermo</td>
                    <td>García González</td>
                    <td>Guiller@gmail.com</td>
                    <td>Garci7812</td>
                    <td>Emprendedores</td>
                    <td>Administrador</td>
                    <td>
                    <a href="#" className="badge badge-warning icon-pencil">Modificar</a>
                    </td>
                    <td>
                    <a href="#" className="badge badge-danger icon-bin">Eliminar</a>
                    </td>
                    </tr>
                   
                </tbody>
                </table>
                </div>

            </div>


            
    </div>

        );
     }
    }
    export default User;
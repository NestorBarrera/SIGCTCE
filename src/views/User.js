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
            <div className="row justify-content-end">
            <div class="col-4">
            <a href="#" className="icon-user-plus" style={{fontSize:"25px"}}>Agregar</a>
            </div>
         </div> 
    </div>
                <hr className="red small-margin"/><br/><br/><br/>

            <div className="row justify-content-center">
                <div className="col-12 col-md-7">
                <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">Num.#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Email</th>
                    <th scope="col">Área</th>
                    <th scope="col">Editar</th>
                    <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Roberto Hernandez Hernandez</td>
                    <td>Robert_89@gmail.com</td>
                    <td>Emprendedores</td>
                    <td>
                    <a href="#" className="badge badge-warning icon-pencil">Modificar</a>
                    </td>
                    <td>
                    <a href="#" className="badge badge-danger icon-bin">Eliminar</a>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jesus Morales Lara</td>
                    <td>Jesus_Mora@gmail.com</td>
                    <td>Emprendedores</td>
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

            <hr className="red small-margin"/><br/><br/><br/>

            <div className="row justify-content-center">
                <div className="col-12 col-md-7">
                <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">Num.#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Email</th>
                    <th scope="col">Área</th>
                    <th scope="col">Editar</th>
                    <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Nestor Barrera Caton</td>
                    <td>NesBar@gmail.com</td>
                    <td>Poder Joven</td>
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
            
            <hr className="red small-margin"/><br/><br/><br/>

            <div className="row justify-content-center">
                <div className="col-12 col-md-7">
                <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">Num.#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Email</th>
                    <th scope="col">Área</th>
                    <th scope="col">Editar</th>
                    <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Arturo Matias Moreno</td>
                    <td>Artur_15@gmail.com</td>
                    <td>Salud Juvenil</td>
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
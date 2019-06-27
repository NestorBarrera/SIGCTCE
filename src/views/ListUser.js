import React, {Component} from 'react';
class ListUser extends Component {
    render() {
        return (

<div className="container" style={{marginTop:30}}>
      
    <div className="row justify-content-end">
            <div class="col-4">
            <a href="#" className="icon-circle-left" style={{fontSize:"25px"}}>Regresar</a>
            </div>
         </div> 
         <div class="col-4">
            <a href="#" className="icon-users" style={{fontSize:"25px"}}> 4</a>
        </div>

                <hr className="red small-margin"/><br/><br/><br/>

            <div className="row justify-content-start">
                <div className="col-12 col-md-7">
                <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">NO.</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido Paterno</th>
                    <th scope="col">Apellido Materno</th>
                    <th scope="col">Email</th>
                    <th >Password</th>
                    <th scope="col">Area</th>
                    <th scope="col">Nivel</th>
                    <th>Fecha de Registro</th>
                    <th scope="col">Editar</th>
                    <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Alejandra</td>
                    <td>García</td>
                    <td>Fernández</td>
                    <td>Fer@gmail.com</td>
                    <td>Gar8976</td>
                    <td>Poder Joven</td>
                    <td>Coordinador</td>
                    <td>15-06-2019</td>
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
                    <td>Pérez</td>
                    <td>Gutiérrez</td>
                    <td>Fer89@gmail.com</td>
                    <td>Gat894566</td>
                    <td>Poder Juvenil</td>
                    <td>Coordinador</td>
                    <td>18-06-2019</td>
                    <td>
                    <a href="#" className="badge badge-warning icon-pencil">Modificar</a>
                    </td>
                    <td>
                    <a href="#" className="badge badge-danger icon-bin">Eliminar</a>
                    </td>
                    </tr>

                    <tr>
                    <th scope="row">2</th>
                    <td>Beatriz</td>
                    <td>García</td>
                    <td>García</td>
                    <td>Garcia@gmail.com</td>
                    <td>Beati9438</td>
                    <td>Emprendedores</td>
                    <td>Administrador</td>
                    <td>20-06-2019</td>
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
                    <td>García</td>
                    <td>González</td>
                    <td>Guiller@gmail.com</td>
                    <td>Garci7812</td>
                    <td>Emprendedores</td>
                    <td>Administrador</td>
                    <td>21-06-2019</td>
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
<a href=""> <span class="badge badge-pill badge-success icon-download" style={{fontSize:"18px"}}>PDF</span> </a>
            
    </div>
        

        );
     }
    }
    export default ListUser;
import React, {Component} from 'react';
class Principal extends Component {
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
                    </ul>
                </nav>
            </div> 
            <div className="row justify-content-end">
            <div class="col-4">
            <a href="#" className="icon-user-plus" style={{fontSize:"25px"}}>Agregar</a>
            </div>
         </div> 
        </div>
        

                <hr class="red small-margin"/><br/><br/><br/>

            <div className="row justify-content-center">
                <div className="">
                <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">#</th>
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
                    <tr>
                    <th scope="row">1</th>
                    <td>Taller de Fotografia digital Nivel Basico</td>
                    <td>Necesario acudir con Camara Fotografica</td>
                    <td>Rodrigo</td>
                    <td>04-06-2019</td>
                    <td>12-06-2019</td>
                    <td>Poder Joven</td>
                    <td>29</td>
                    <td>
                    <a href="#" class="badge badge-primary icon-eye">Ver</a>
                    </td>
                    <td>
                    <a href="#" class="badge badge-warning icon-pencil">Modificar</a>
                    </td>
                    <td>
                    <a href="#" class="badge badge-danger icon-bin">Eliminar</a>
                    </td>
                    </tr>
                   
                </tbody>
                </table>
                </div>

            </div>

            <hr class="red small-margin"/><br/><br/><br/>

    </div>

        );
     }
    }
    export default Principal;
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
        

                <hr class="red small-margin"/><br/><br/><br/>

            <div className="row justify-content-center">
                <div className="col-12 col-md-7">
                <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col"> Fecha</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Ponente</th>
                    <th scope="col">Ver</th>
                    <th scope="col">Modificar</th>
                    <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>04-06-2019</td>
                    <td>Taller de Fotografia digital Nivel Basico</td>
                    <td>Rodrigo</td>
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


            <div className="row justify-content-center">
                <div className="col-12 col-md-7">
                <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Ponente</th>
                    <th scope="col">Ver</th>
                    <th scope="col">Modificar</th>
                    <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">2</th>
                    <td>12-06-2019</td>
                    <td>Taller de Producción de Video</td>
                    <td>Elizabeth</td>
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

<div className="row justify-content-center">
    <div className="col-12 col-md-7">
    <table className="table table-hover">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Fecha </th>
        <th scope="col">Nombre</th>
        <th scope="col">Ponente</th>
        <th scope="col">Ver</th>
        <th scope="col">Modificar</th>
        <th scope="col">Eliminar</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <th scope="row">3</th>
        <td>17-06-2019</td>
        <td>Taller de Cómic y Narrativa Gráfica nivel básico</td>
        <td>Elizabeth</td>
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

            
    </div>

        );
     }
    }
    export default Principal;
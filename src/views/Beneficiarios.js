import React, {Component} from 'react';
class Beneficiarios extends Component {
    render() {
        return (

<div className="container" style={{marginTop:30}}>

    <div className="row justify-content-end">
        <div className="col-4">
            <a href="Principal" className="icon-circle-left" style={{fontSize:"25px"}}>Regresar </a>
        </div>
    </div>
    <div class="col-4">
            <a href="#" className="icon-users" style={{fontSize:"25px"}}> 2</a>
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
                    <tr>
                    <th scope="row">1</th>
                    <td>Manuel</td>
                    <td>Carrasco Martinez</td>
                    <td>12/10/1998</td>
                    <td>21</td>
                    <td>CAMJ900421HCHRRN05</td>
                    <td>5578498315</td>
                    <td>Carras42@gmail.com</td>
                    <td>
                    <a href="#" className="badge badge-warning icon-pencil">Modificar</a>
                    </td>
                    <td>
                    <a href="#" className="badge badge-danger icon-bin">Eliminar</a>
                    </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                    <th scope="row">2</th>
                    <td>Perla</td>
                    <td>Arias Hernandéz</td>
                    <td>27/07/1997</td>
                    <td>22</td>
                    <td>AIHP911101MCHRRR03</td>
                    <td>5578498315</td>
                    <td>Perlita@gmail.com</td>
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
    export default Beneficiarios;
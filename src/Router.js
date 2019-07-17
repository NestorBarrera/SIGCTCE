import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './views/Login';
import RegistroCursos from './views/RegistroCursos';
import Cursos from './views/Cursos';
import RegistroBeneficiarios from './views/RegistroBeneficiarios';
import Beneficiarios from './views/Beneficiarios';
import Principal from './views/Principal';
import Registro from './views/Users/Registro';
import User from './views/Users/User';
import Modificar from './views/Modificar';
import ModificarUser from './views/Users/ModificarUser';
import ModificarBene from './views/ModificarBene';
import ModificarCursos from './views/ModificarCursos';
import VistaCurso from './views/VistaCurso';
import RegistroBeneficiarios2 from './views/RegistroBeneficiarios2';

class Router extends Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/cursos" component={Cursos}/>
                <Route path="/registrocursos" component={RegistroCursos}/>
                <Route path="/registrobeneficiarios" component={RegistroBeneficiarios}/>
                <Route path="/beneficiarios" component={Beneficiarios}/>
                <Route path="/user" component={User}/>
                <Route path="/principal" component={Principal}/>
                <Route path="/registro" component={Registro}/>
                <Route path="/modificar" component={Modificar}/>
                <Route path="/modificaruser" component={ModificarUser}/>
                <Route path="/modificarbene" component={ModificarBene}/>
                <Route path="/modificarcursos" component={ModificarCursos}/>
                <Route path="/vistacurso" component={VistaCurso}/>
                <Route path="/registrobeneficiarios2" component={RegistroBeneficiarios2}/>
                
            </Switch>
        );
    }
}

export default Router;
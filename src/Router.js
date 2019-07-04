import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './views/Login';
import RegistroCursos from './views/RegistroCursos';
import Cursos from './views/Cursos';
import RegistroBeneficiarios from './views/RegistroBeneficiarios';
import Beneficiarios from './views/Beneficiarios';
import Principal from './views/Principal';
import Registro from './views/Registro';
import User from './views/User';
import Modificar from './views/Modificar';

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
                
            </Switch>
        );
    }
}

export default Router;
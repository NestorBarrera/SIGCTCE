import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './views/Login';
import RegistroCursos from './views/RegistroCursos';
import Cursos from './views/Cursos';
import RegistroBeneficiarios from './views/RegistroBeneficiarios';

class Router extends Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/cursos" component={Cursos}/>
                <Route path="/registrocursos" component={RegistroCursos}/>
                <Route path="/registrobeneficiarios" component={RegistroBeneficiarios}/>
            </Switch>
        );
    }
}

export default Router;
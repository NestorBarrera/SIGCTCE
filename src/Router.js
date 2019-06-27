import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './views/Login';
import RegistroCursos from './views/RegistroCursos';
import Cursos from './views/Cursos';
import RegistroBeneficiarios from './views/RegistroBeneficiarios';
import Beneficiarios from './views/Beneficiarios';
import ListUser from './views/ListUser';
import Principal from './views/Principal';
import NumBene from './views/NumBene';

class Router extends Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/cursos" component={Cursos}/>
                <Route path="/registrocursos" component={RegistroCursos}/>
                <Route path="/registrobeneficiarios" component={RegistroBeneficiarios}/>
                <Route path="/beneficiarios" component={Beneficiarios}/>
                <Route path="/listuser" component={ListUser}/>
                <Route path="/principal" component={Principal}/>
                <Route path="/numbene" component={NumBene}/>
                
            </Switch>
        );
    }
}

export default Router;
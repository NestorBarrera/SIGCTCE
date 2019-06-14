import React,{Component}from'react';
class Login extends Component{
    render(){
        return(
<form>
    <div align="center">
        <div className="container">
            <div className="row justify-content-center">
                    
                <div className="form-group col-md-8">
                    <label for="inputEmail4">Correo</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Ingresa tú correo eléctronico" />
                </div>
                    <div className="form-group col-md-8">
                        <label for="inputPassword4">Contraseña</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Ingresa tú contraseña" />
                    </div>
                </div>
                    
                <button type="submit" className="btn btn-primary">Sign in</button>
        </div>
    </div>
</form>
        );
    }
}
export default Login;
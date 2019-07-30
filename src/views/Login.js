import React,{Component}from'react';
class Login extends Component{
render(){
    return(

<section className="container">
    <div className="limiter">
        <div className="container-login100">
            <div className="row wrap-login100">
                <div className="login100-form-title">
                    <span className="login100-form-title-1">Inicia sesión</span>
                </div>

                    <div className="text-center w-100" style={{paddingTop:"15px"}}>
                        <img className="rounded hidalgo" src="image/logo.png" alt="IHJ Logo"/>
                    </div>

                    <form className="needs-validation login100-form" noValidate>
                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="email">Email: </label>
                                    <input 
                                        type="email" className="form-control" 
                                        id="email" name="email" required
                                        placeholder="Ingresa email"
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa tu email
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6 mb-3">
                                    <label htmlFor="password">Contraseña: </label>
                                    <input 
                                        type="password" className="form-control" 
                                        id="password" name="password" required
                                        placeholder="Ingresa contraseña"
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="invalid-feedback">
                                        Por favor ingresa tu contraseña
                                    </div>
                                </div>

                                <div className="col-12 mt-3">
                                    <button type="submit" className="btn btn-success login100-form-btn">
                                        Ingresar
                                    </button>
                                </div>
                    </form>
            </div>
        </div>
    </div>
</section>                






        );
    }
}
export default Login;
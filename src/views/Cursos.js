import React,{Component}from'react';
class Cursos extends Component{
    render(){
        return(
            //vista principal
            <section className="container">
                <div className="row justify-content-center" >
                    <div className="col-12 col-md-3">
                        <div className="card" style={{width: '12em'}}>
                        <div className="card-body">
                            <h5 className="card-title">Curso de señas</h5>
                            <p className="card-text">Fecha de inicio: 21/06/2019</p>
                            <p className="card-text">Horarios: 9:00am- 12:00pm</p>
                            <a href="#" class="card-link">Detalles</a>
                        </div>
                        </div> 
                    </div>

                    <div className="col-12 col-md-3">
                        <div className="card" style={{width: '12em'}}>
                        <div className="card-body">
                            <h5 className="card-title">Curso de señas</h5>
                            <p className="card-text">Fecha de inicio: 21/06/2019</p>
                            <p className="card-text">Horarios: 9:00am- 12:00pm</p>
                            <a href="#" class="card-link">Detalles</a>
                        </div>
                        </div> 
                    </div>

                    <div className="col-12 col-md-3">
                        <div className="card" style={{width: '12em'}}>
                        <div className="card-body">
                            <h5 className="card-title">Curso de señas</h5>
                            <p className="card-text">Fecha de inicio: 21/06/2019</p>
                            <p className="card-text">Horarios: 9:00am- 12:00pm</p>
                            <a href="#" class="card-link">Detalles</a>
                        </div>
                        </div> 
                    </div>

                    <div className="col-12 col-md-3">
                        <div className="card" style={{width: '12em'}}>
                        <div className="card-body">
                            <h5 className="card-title">Curso de señas</h5>
                            <p className="card-text">Fecha de inicio: 21/06/2019</p>
                            <p className="card-text">Horarios: 9:00am- 12:00pm</p>
                            <a href="#" class="card-link">Detalles</a>
                        </div>
                        </div> 
                    </div>
                </div>
                <button type="button" class="btn btn-primary">Agregar Curso</button>
            </section>                

            );
        }
    }
    export default Cursos;
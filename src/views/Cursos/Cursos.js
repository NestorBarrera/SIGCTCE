import React,{Component}from'react';
import { connect} from 'react-redux';
import {GET_CURSOS_ACTION} from '../../redux/actions/CursosAction';

class Cursos extends Component{
    componentDidMount(){
        this.props.getCursos()
    }

     _renderItem = () =>{
        return this.props.stateCursos.map((row,index)=>{
            return(
                <div className="col-12 col-md-4">
                     <img src="../image/curso.jpg" class="card-img-top" height="200px"/>
                    <div key={index} className="card" >
                        <div className="card-body">
                            <h3 className="card-title">{row.nombrecurso}</h3>
                            <a><strong>Ponente:</strong>{row.ponente} </a>
                            <p className="card-text"><strong>Fecha de inicio:</strong> {row.datein}</p>
                            <p className="card-text"><strong>Horario de inicio:</strong> {row.time}</p>
                            <button type="button" className="btn btn-primary" onClick={()=>{
                            let cursoId=[];
                            cursoId.push(row._id);
                            localStorage.setItem("cursoId", JSON.stringify(cursoId));
                            window.location.href="VistaCurso";
                        }
                    } ><center> Detalles</center></button>
                        </div>
                    </div>
                </div> 
            );
        })
    }

    render(){
        return(
            //vista principal
            <section className="container">
                <div style={{marginTop: '15px'}}>
                <div className="row justify-content-center" >
                                {this._renderItem()}
                    </div>
                </div>
                
            </section>                

            );
        }
    }
    const mapStateToProps =({stateCursos,})=>{
        return{
            stateCursos: stateCursos,
        };
    }
    
    const mapDispatchToProps=(dispatch)=>{
        return{
            getCursos: ()=>dispatch(GET_CURSOS_ACTION())
        };
    };
    const ConnectCursos= connect(mapStateToProps,mapDispatchToProps)(Cursos);
    export default ConnectCursos;
import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import FinancingList3 from "../Financing/financingList3";
import ScholarShipList3 from "../Scholarship/ScholarshipList3";
import {NavLink}  from 'react-router-dom'
import { Auth0Context } from "../../react-auth0-wrapper";
import '../../app.css';
import axios from "axios";

class Home extends Component {

    static contextType = Auth0Context;

    constructor()
    {
        super();
        this.state = {
            financings: [],
            scholarships: []
          };
    }

    componentDidMount() {
        this.fetchFinancings();
    }

    fetchFinancings() {
        fetch('/financing/')
            .then(res => res.json())
            .then(data => {
            this.setState({financings: data});
            console.log(this.state.financings);
        });
    }
    
    render()
    {
        const { loading } = this.context;
        if(loading){
            return(
                <div>
                    Loading...
                </div>
            );
        }

        return(
            <div className="App">
                <br></br>
                <div className="container-fluid">
                    <div className="row">
                        <div id="carouselExampleInterval" className="carousel-inner" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-interval="7000">
                                    <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBV1fUb.img?h=440&w=624&m=6&q=60&o=f&l=f" className="d-block w-100" alt="Harvard"></img>
                                    <div className="carousel-caption d-none d-md-block sized text-center">
                                        <h1 className="carousel">HARVARD</h1>
                                        <p className="carousel">La universidad de tus sueños nunca ha estado tan cerca, aprovecha esa oportunidad por la que has estudiado tanto</p>
                                    </div>
                                </div>
                                <div className="carousel-item" data-interval="7000">
                                    <img src="https://www.unipymes.com/wp-content/uploads/2017/11/uniandes.jpg" className="d-block w-100" alt="Los Andes"></img>
                                    <div className="carousel-caption d-none d-md-block sized text-center">
                                        <h1 className="carousel">ANDES</h1>
                                        <p className="carousel">La universidad de tus sueños nunca ha estado tan cerca, aprovecha esa oportunidad por la que has estudiado tanto</p>
                                    </div>
                                </div>
                                <div className="carousel-item" data-interval="7000">
                                    <img src="https://st1.agmeducation.com/media/2017/04/intro_about.jpg" className="d-block w-100" alt="..."></img>
                                    <div className="carousel-caption d-none d-md-block sized text-center">
                                        <h1 className="carousel">STANFORD</h1>
                                        <p className="carousel">La universidad de tus sueños nunca ha estado tan cerca, aprovecha esa oportunidad por la que has estudiado tanto</p>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg 12 text-center">
                                <br></br>
                                <h3>BKT ofrece la mejor opcion</h3>
                                <p className="sized-description">
                                    Somos una organización que trabaja por los sueños de los estudiantes más preparados de Colombia.
                                    Trabajamos cada día, para que tu puedas llegar tan lejos como esperas, perdemos el sueño por abrirte
                                    esa puerta que te llevará al comienzo de la mejor etapa de tu vida... aprovéchala. 
                                </p>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                        <h2 className="section">Más Buscados</h2>
                        <br></br>
                    </div>
                    <div className="row sectioned">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <h3 className="text-center">FINANCIACIONES</h3>
                            <FinancingList3/>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <h3 className="text-center">BECAS</h3>
                            <ScholarShipList3/>
                        </div>
                    </div>
                    <div className="row bg-dark">
                        <div className="col-lg-12 col-md-12 col-12 text-center">
                            <h1 className="foot">Reach us.</h1>
                            <h1><i class="fas fa-map-marker-alt foot"></i></h1>
                        </div>
                            <div className="col-lg-4 col-md-4 col-12">
                                    
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                                    <div className="containter text-center">
                                            <img src="https://cdn.advantis.co/wp-content/uploads/2018/08/Uniandes-2-1024x800.png" alt="Liceo Campo David logo" className="img-about-circular"></img>
                                    </div>
                                    <div className="row text-center block">
                                            <p className="carousel">
                                                Los Andes University, Bogota - Colombia. Cra 1 Nº 18A - 12.
                                            </p>
                                    </div>                                                
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                                    
                            </div>
                    </div>
               </div>
            </div>     
        )
    }

}
export default Home;
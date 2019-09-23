import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import FinancingList3 from "../Financing/financingList3";
import ScholarShipList3 from "../Scholarship/ScholarshipList3";
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
               </div>
            </div>
        )
    }

}
export default Home;
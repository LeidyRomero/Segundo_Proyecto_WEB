import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Financing from './components/Financing/financing';
import Scholarship from './components/Scholarship/Scholarship';
import Navegacion from "./components/Navegacion";
//import { useAuth0 } from "./react-auth0-wrapper";
import { Auth0Context } from "./react-auth0-wrapper";

import Review from './components/Review/Review'
import CreateReview from './components/Review/CreateReview'

class App extends Component {

    static contextType = Auth0Context;

    constructor(props)
    {
        super(props);
        this.state = {
            financings: [],
            scholarships: []
        };
    }
    /*COMENTARIO 1: LECTURA API DE BECAS Y FINANCIACION PARA ENVIARSELO A BACK*/ 
    /*TAMBIEN CONEXIONES CON BACK*/
    componentDidMount()
    {
        fetch("/financing/")
            .then(res=> res.json())
            .then(data=>{ 
                this.setState({financings : data})
            });

        fetch("/scholarship/")
            .then(res => res.json())
            .then(data => { 
                this.setState({scholarships : data})
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
                <div className="container-fluid" id="nav">
                    <Navegacion />
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-interval="10000">
                                    <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBV1fUb.img?h=440&w=624&m=6&q=60&o=f&l=f" class="d-block w-100" alt="..."></img>
                                </div>
                                <div className="carousel-item" data-interval="2000">
                                    <img src="" class="d-block w-100" alt="..."></img>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://st1.agmeducation.com/media/2017/04/intro_about.jpg" class="d-block w-100" alt="..."></img>
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
                    </div>
                    <hr></hr>
                    <div className="row">
                        hello
                    </div>
               </div>
            </div>
        )
    }


}
export default App;
import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Context } from "../../react-auth0-wrapper";
import '../../app.css'

class Home extends Component {

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
            <br></br>
            <div className="container-fluid">
                <div className="row">
                    <div id="carouselExampleInterval" className="carousel-inner" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-interval="7000">
                                <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBV1fUb.img?h=440&w=624&m=6&q=60&o=f&l=f" class="d-block w-100" alt="Harvard"></img>
                                <div class="carousel-caption d-none d-md-block carousel-size">
                                    <h2 className="carousel">HARVARD</h2>
                                    <p className="carousel">Its never been so close, get the oportunity to live your dreams & study in the best university</p>
                                </div>
                            </div>
                            <div className="carousel-item" data-interval="7000">
                                <img src="https://www.unipymes.com/wp-content/uploads/2017/11/uniandes.jpg" className="d-block w-100" alt="Los Andes"></img>
                                <div class="carousel-caption d-none d-md-block carousel-size">
                                    <h2 className="carousel">ANDES</h2>
                                    <p className="carousel">Its never been so close, get the oportunity to live your dreams & study in the best university</p>
                                </div>
                            </div>
                            <div className="carousel-item" data-interval="7000">
                                <img src="https://st1.agmeducation.com/media/2017/04/intro_about.jpg" class="d-block w-100" alt="..."></img>
                                <div class="carousel-caption d-none d-md-block carousel-size">
                                    <h2 className="carousel">STANFORD</h2>
                                    <p className="carousel">Its never been so close, get the oportunity to live your dreams & study in the best university</p>
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
export default Home;
import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Financing from "./components/Financing/financinglist"
import Navegacion from "./components/Navegacion";
//import { useAuth0 } from "./react-auth0-wrapper";
import { Auth0Context } from "./react-auth0-wrapper";

import Review from './Components/Review/Review'

class App extends Component {

    static contextType = Auth0Context;

    constructor(props)
    {
        super(props);
        this.state = {financing:[]};
    }
    /*COMENTARIO 1: LECTURA API DE BECAS Y FINANCIACION PARA ENVIARSELO A BACK*/ 
    /*TAMBIEN CONEXIONES CON BACK*/
    componentDidMount()
    {
        fetch("/financing/:id")
            .then(res=> res.json())
            .then(data=>{ 
                console.log("datos", data);
                this.setState({financing:data})
            });
    }

    renderComments()
    {
        console.log(this);
        return this.state.financing.map((c,i)=><Financing key = {i++} financing={c}></Financing>);
        /* El codigo anterior es lo mismo que el siguiente codigo
        let res = [];
        let i = 0;
        for(let c of this.state.comments)
        {
            res.push(<div key = {i++}>{c.text}</div>);
        }
        console.log(res);
        return res;
        */
    }

    /*COMENTARIO 2: POR FAVOR NO CAMBIEN LO QUE ESTA ENTRE EL COMENTARIO 1 Y 2*/



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
            <div className="App"
                <div className="container-fluid" id="nav">
                    <Navegacion />
                </div>
                <div className="container-fluid">    
                    <h1>FRONT</h1>
                    {this.renderComments()}
                </div>
            </div>
        )
    }


}
export default App;
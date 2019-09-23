import React, { Component } from "react";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FinancingList from "./components/Financing/FinancingList";
import Scholarship from "./components/Scholarship/Scholarship";
import Navegacion from "./components/Navegacion";
//import { useAuth0 } from "./react-auth0-wrapper";
import { Auth0Context } from "./react-auth0-wrapper";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home/Home";

class App extends Component {
  static contextType = Auth0Context;

  constructor(props) {
    super(props);
    this.state = {
      financings: [],
      scholarships: []
    };
  }
  /*COMENTARIO 1: LECTURA API DE BECAS Y FINANCIACION PARA ENVIARSELO A BACK*/

  /*TAMBIEN CONEXIONES CON BACK*/
  componentDidMount() {
    fetch("/financing/")
      .then(res => res.json())
      .then(data => {
        this.setState({ financings: data });
      });

    fetch("/scholarship/")
      .then(res => res.json())
      .then(data => {
        this.setState({ scholarships: data });
      });
  }

  render() {
    const { loading } = this.context;
    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <BrowserRouter>
        <div className="container-fluid" id="nav">
          <Navegacion />
        </div>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/financing" component={FinancingList} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;

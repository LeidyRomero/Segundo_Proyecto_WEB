import React, { Component } from "react";
//import { useAuth0 } from "../react-auth0-wrapper";
import { Auth0Context } from "../react-auth0-wrapper";
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink, withRouter}  from 'react-router-dom'
import '../app.css';


class Navegacion extends Component {

    static contextType = Auth0Context;

    render(){

      const { isAuthenticated, loginWithRedirect, logout } = this.context;

      return(

      <nav className="navbar navbar-expand-md navbar-light sticky-top">
          <a ><img src="bkt.PNG" height="28" alt="BKT"/></a>
          <a className="navbar-brand"><h3 className="text-dark">BKT</h3></a>

          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ml-auto">
              <NavLink to="/" > 
                <p className="a nav-item nav-link" id="btn-inicio">Inicio</p>
              </NavLink>
                <p  className="a nav-item nav-link" id="btn-becas">Becas</p>
              <NavLink to="/financing" >
                <p className="a nav-item nav-link" id="btn-financiacion">Financiación</p>
              </NavLink>
              <a className="nav-item nav-link" id="btn-comparador">Comparador</a>
                {!isAuthenticated && (<button className="nav-item nav-link nav-pills" id="btn-login" onClick={() => loginWithRedirect({})}>Iniciar Sesión</button>)}
                {isAuthenticated && (<button className="nav-item nav-link nav-pills" id="btn-login" onClick={() => logout()}>Cerrar Sesión</button>)}
              </div>
          </div>
      </nav>
      );
    }

}

export default Navegacion;
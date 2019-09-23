import React, { Component } from "react";
//import { useAuth0 } from "../react-auth0-wrapper";
import { Auth0Context } from "../react-auth0-wrapper";
import {NavLink, withRouter}  from 'react-router-dom'

class Navegacion extends Component {

    static contextType = Auth0Context;

    render(){

      const { isAuthenticated, loginWithRedirect, logout } = this.context;
      console.log("Is auth? " + isAuthenticated);

      return(

      <nav className="navbar navbar-expand-md navbar-light sticky-top">
          <a href=""><img src="bkt.PNG" height="28" alt="BLT"/></a>
          <a href="" className="navbar-brand"><h3 className="text-dark">BKT</h3></a>

          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ml-auto">
              <NavLink to="/" > <a className="nav-item nav-link" id="btn-inicio">Inicio</a></NavLink>
                <a  className="nav-item nav-link" id="btn-becas">Becas</a>
                <NavLink to="/financing" ><a className="nav-item nav-link" id="btn-financiacion">Financiación</a></NavLink>
                <a className="nav-item nav-link" id="btn-comparador">Comparador</a>
                <a className="nav-item nav-link"></a>
                {!isAuthenticated && (<button className="nav-item nav-link nav-pills" id="btn-login" onClick={() => loginWithRedirect({})}>Iniciar Sesión</button>)}
                {isAuthenticated && (<button className="nav-item nav-link nav-pills" id="btn-login" onClick={() => logout()}>Cerrar Sesión</button>)}
              </div>
          </div>
      </nav>
      );
    }

}

export default Navegacion;
import React, { Component } from "react";

class Navegacion extends Component {

    render(){
        return(

        <nav className="navbar navbar-expand-md navbar-light sticky-top">
            <a href=""><img src="bkt.PNG" height="28" alt="BLT"/></a>
            <a href="" className="navbar-brand"><h3>BKT</h3></a>

            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ml-auto">
                  <a href="#" className="nav-item nav-link" id="btn-inicio">Inicio</a>
                  <a href="#" className="nav-item nav-link" id="btn-becas">Becas</a>
                  <a href="#" className="nav-item nav-link" id="btn-financiacion">Financiación</a>
                  <a href="#" className="nav-item nav-link" id="btn-comparador">Comparador</a>
                  <a className="nav-item nav-link"></a>
                  <a href="#" className="nav-item nav-link nav-pills" id="btn-login">Iniciar Sesión</a>
                </div>
            </div>
        </nav>

        );
    }

}

export default Navegacion;
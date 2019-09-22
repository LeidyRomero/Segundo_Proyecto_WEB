import React from 'react';
import { Image, Container, Col, Row } from 'react-bootstrap';

const search = () => {
    let userInput= ''

    //Función para el input del usuario en la searchbar

    return(
        <div >
            <input className="form-control mr-sm-2" type="search" placeholder="Buscar en twitter"  onChange={(event) => {
            userInput = event.target.value;
        }} 
        ></input>
        </div>
    )
}

export default search;
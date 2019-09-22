import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Card, Button, Container, Col, Row } from "react-bootstrap";

class Scholarship extends Component {
    render() {
        return (
            <div className="Scholarship">
            
                <div>{this.props.scholarship.text}</div>
            </div>
        );
    }
}
/*Here is the object with the attributes */ 
Financing.propTypes = 
{ 
    financing:PropTypes.object.isRequired
}
export default Scholarship; 
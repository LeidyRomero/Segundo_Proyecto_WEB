import React, { Component } from 'react';
import PropTypes from "prop-types";
class Financing extends Component {
    render() {
        return (
            <div className="Financing">
                <button className="btn btn-info">buenas</button>
                <div>{this.props.financing.text}</div>
            </div>
        );
    }
}
/*Here is the object with the attributes */ 
Financing.propTypes = 
{ 
    financing:PropTypes.object.isRequired
}
export default Financing; 
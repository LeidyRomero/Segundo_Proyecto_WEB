import React, { Component } from 'react';
import PropTypes from "prop-types";
class financing extends Component {
    constructor() {
    super();
    this.state = {
      "Name": this.props.value.name,
      "id": this.props.value.id,
      "description":this.props.value.description
    }
  }
  render() {
   renderState() {
      return (
          <div class="col-md-4 col-lg-4 col-sm-6" >
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{this.state.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{this.state.id}</h6>
                <p class="card-text">{this.state.description}</p>
                <a href="#" class="card-link">Card link</a>
              </div>
            </div>
          </div>
      );
    }
    // RETURN THE COMPONENT
    return (
      <div className="App">
        <div class="row">
        <div class="col-md-10"> <Filter /> </div>
        <div class="row">
          {todos}
        </div>
        </div>
      </div>
    );
  }
}
export default financing; 
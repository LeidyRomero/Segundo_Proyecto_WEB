import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {NavLink}  from 'react-router-dom'
import { Container, Row, Col, CardDeck } from "react-bootstrap";
import axios from "axios";
import ScholarShip3 from "./Scholarship3";

class ScholarShipList3 extends Component {
  state = { 
            scholarships: [],
            showItems: 3
          };

  constructor(props) {
    super(props);
    axios.get(`http://localhost:3000/scholarship`).then(res => {
      const scholarship = res.data;
      this.populateState(scholarship)
    });
  }

  populateState = async function(data) {
    await this.setState({scholarships : data});
  }
  

  render() {
    const scholarshipItems = this.state.scholarships.slice(0, this.state.showItems).map((item, index) => {
        
        return (
            <ScholarShip3
            name={item.name}
            description={item.description}
            image={item.image}
            webpage={item.webpate}
            start_date={item.start_date}
            end_date={item.end_date}
            key={index}
            />
        );
    });

    return (
      <div className="App">
        <Container fluid={true}>
          <CardDeck>
            {scholarshipItems}
        </CardDeck>
        <NavLink to="/scholarship" > 
            <a className="a nav-item nav-link">Ver más becas</a>
        </NavLink>
        
        </Container>
      </div>
    );
  }
}

export default ScholarShipList3;

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, CardDeck } from "react-bootstrap";
import axios from "axios";
import ScholarShip from "./Scholarship";

import ReviewsList from "../Review/ReviewList"

class ScholarShipList extends Component {
  state = { scholarship: []};

  constructor(props) {
    super(props);
    axios.get(`http://localhost:3000/scholarship`).then(res => {
      const scholarship = res.data;
      this.populateState(scholarship)
    });
  }

  populateState = async function(data) {
    await this.setState({scholarship: data});
}
  

  render() {
    const scholarshipItems = this.state.scholarship.map((item, index) => {
      return (
        <ScholarShip
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
        <ReviewsList />
        </Container>
      </div>
    );
  }
}

export default ScholarShipList;

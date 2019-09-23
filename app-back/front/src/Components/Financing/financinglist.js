import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, CardDeck } from "react-bootstrap";
import axios from "axios";
import Financing from "./financing";
import ReviewsList from "../Review/ReviewList"

class FinancingList extends Component {
  state = { financing: []};

  constructor(props) {
    super(props);
    axios.get(`http://localhost:3000/financing`).then(res => {
      const financing = res.data;
      this.populateState(financing)
    });
  }

  populateState = async function(data) {
    await this.setState({financing: data});
  }
  

  render() {
    const financingItems = this.state.financing.map((item, index) => {
      return (
        <Financing
          name={item.name}
          description={item.description}
          image={item.image}
          webpage={item.webpate}
          start_date= {item.start_date}
          end_date={item.end_date}
          key={index}
        />
      );
    });

    return (
      <div className="App">
        <br></br>
        <Container fluid={true}>
          <CardDeck>
            {financingItems}
        </CardDeck>
        <hr></hr>
        <ReviewsList />
        </Container>
      </div>
    );
  }
}

export default FinancingList;

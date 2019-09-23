import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Financing from "./Financing";

class FinancingList extends Component {
  state = { financing: []};

  constructor(props) {
    super(props);
    axios.get(`http://localhost:3000/financing`).then(res => {
      console.log("There's something here!");
      console.log(res.data);
      const financing = res.data;
      this.populateState(financing)
    });
  }

  populateState = async function(data) {
    console.log(this.state);
    await this.setState({financing: data});
    console.log(this.state);
}
  

  render() {
    const financingItems = this.state.financing.map((item, index) => {
      console.log("Look, this is the state")
      console.log(this.state)
      return (
        <Financing
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
          <Row>
            <Col>{financingItems}</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default FinancingList;
